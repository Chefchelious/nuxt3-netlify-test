import { defineEventHandler } from 'h3';
import jwt from 'jsonwebtoken';

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  try {
    const authorizationHeader = getHeader(event, 'authorization')
    if (!authorizationHeader) {
      return createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }
    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }
    try {
      jwt.verify(accessToken, config.public.jwtAccessSecret);

    } catch (err) {
      // console.error(err);
      return createError({ statusCode: 401, statusMessage: 'Unauthorized' });
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
