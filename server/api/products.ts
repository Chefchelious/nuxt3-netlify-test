import { defineEventHandler } from 'h3';
import Product from '~/server/models/product.model';

export default defineEventHandler(async () => {
  try {
    return Product.find();
  } catch (e: unknown) {
    console.error('Ошибка:', e);
    return createError({
      statusCode: 500,
      message: 'Something went wrong',
      stack: undefined,
    });
  }
});
