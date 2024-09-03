import { defineEventHandler } from 'h3';
import AgentFeedback from '~/server/models/angentFeedback.model';

export default defineEventHandler(async () => {
  try {
    return AgentFeedback.find();
  } catch (e: unknown) {
    console.error('Ошибка:', e);
    return createError({
      statusCode: 500,
      message: 'Something went wrong',
      stack: undefined,
    });
  }
});
