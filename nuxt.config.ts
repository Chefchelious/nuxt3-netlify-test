// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/eslint', 'nuxt-quasar-ui', '@pinia/nuxt'],
  css: ['~/assets/styles/main.scss'],
  alias: {
    '@': '/<rootDir>',
    '@assets': '/<rootDir>/assets',
    '@images': '/<rootDir>/assets/images',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      mongoUrl: process.env.MONGO_URL,
      jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
      jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
      apiUrl: process.env.API_BASE_URL,
    }
  },
  quasar: {
    cssAddon: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/styles/quasar.variables.scss";
            @import "~/assets/styles/mixins.scss";
          `,
        },
      },
    },
  },
  nitro: {
    plugins: ['~/server/plugins/mongoDB.ts']
  },
  // routeRules: {
  //   '/': { prerender: true },
  //   '/agents': { ssr: false },
  //   '/*/*': { ssr: false },
  // },
});
