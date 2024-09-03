import type { IUser } from '~/types';
import UserModel from '~/server/models/user.model';
import bcrypt from 'bcrypt';
import { saveToken } from '~/server/utils/tokens';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<IUser | null>(event);

    if (!body) {
      return createError({ statusCode: 400, message: 'Bad request.' });
    }

    const { username, password } = body;

    if (!username || !password) {
      return createError({ statusCode: 400, message: 'Bad request.' });
    }

    const user = await UserModel.findOne({ username });

    if (!user) {
      return createError({ statusCode: 400, message: 'Invalid credentials.' });
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);

    if (!isPasswordEquals) {
      return createError({ statusCode: 400, message: 'Invalid credentials.' });
    }

    const tokens = generateTokens({...user});
    await saveToken(user._id.toString(), tokens.refreshToken);

    setCookie(event, 'refreshToken', tokens.refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    })

    return {
      ...tokens,
      user,
    }
  } catch (e: unknown) {
    console.error('Ошибка:', e);
    return createError({
      statusCode: 500,
      message: 'Something went wrong',
      stack: undefined,
    });
  }
});
