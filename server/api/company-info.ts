import { defineEventHandler } from 'h3';
import CompanyModel from '~/server/models/company.model';

export default defineEventHandler(async () => {
  try {
    const companyInfo = await CompanyModel.findOne();

    if (!companyInfo) {
      return createError({
        statusCode: 404,
        message: 'Company information not found',
      });
    }

    return companyInfo;
  } catch (e: unknown) {
    console.error('Ошибка:', e);
    return createError({
      statusCode: 500,
      message: 'Something went wrong',
      stack: undefined,
    });
  }
});
