import $api from '~/http';

export default defineNuxtRouteMiddleware(async () => {
  try {
    await $api.post('/user/check-auth');
  } catch (e: unknown) {
    console.error('Unauthorized:', e);
    return navigateTo('/login');
  }
})
