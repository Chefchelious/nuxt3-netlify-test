import tokenModel from '~/server/models/token.model';

export default defineEventHandler(async (event) => {
  try {
    const refreshToken = getCookie(event, 'refreshToken');

    if (!refreshToken) {
      return 200;
    }

    await tokenModel.deleteOne({ refreshToken });
    deleteCookie(event, 'refreshToken');
    return 200;
  } catch (e: unknown) {
    console.error('Ошибка:', e);
    return createError({
      statusCode: 500,
      message: 'Something went wrong',
      stack: undefined,
    });
  }
});
