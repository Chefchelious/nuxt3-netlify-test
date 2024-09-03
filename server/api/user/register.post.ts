import userModel from '../../models/user.model';
import type { IUser } from '~/types';
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

    const existingUser = await userModel.findOne({ username: body.username });

    if (existingUser) {
      return createError({
        statusCode: 400,
        message: 'Пользователь с таким username уже зарегистрирован.',
        stack: undefined,
      });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const userData = await userModel.create({
      username,
      password: hashPassword,
    });

    const { password: _, ...user } = userData.toObject();

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
