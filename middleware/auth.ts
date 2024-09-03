export default defineNuxtRouteMiddleware(async () => {
  const { $api } = useNuxtApp();
  try {
    await $api.post('/user/check-auth');
  } catch (e: unknown) {
    console.error('Unauthorized:', e);
    return navigateTo('/login');
  }
})
