// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    apiSecret: '123',
    public: {
      API_URL: 'https://api.nuxt.com',
    }
  },
  $production: {
    routeRules: {
      '/assets/**': {
        headers: { 'cache-control': 's-maxage=31536000' }
      }
    },
    sourcemap: false
  },
  css: [
    '~/assets/css/index.css',
    'animate.css',
  ],
  nitro: {},
  vite: {},
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})