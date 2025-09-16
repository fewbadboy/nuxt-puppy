// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Puppy',
      meta: [{ name: 'description', content: 'Puppy site.' }],
      bodyAttrs: {
        class: 'puppy',
      },
      /**
       * CDN css
       * { rel: 'stylesheet', href: '' }
       */
      link: [],
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  runtimeConfig: {
    // private key only available server-side
    // overridden by NUXT_API_SECRET environment variable
    apiSecret: '123',
    // exposed client-side
    // overridden by NUXT_PUBLIC_API_BASE environment variable
    public: {
      apiBase: '/api',
    },
  },
  routeRules: {},
  devServer: {
    port: 3000,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  i18n: {
    defaultLocale: 'zh_cn',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'zh_cn',
        name: '中文',
        language: 'zh-CN',
        // file: 'zh-CN.ts',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        // file: 'en-US.ts',
      },
    ],
  },
  ui: {
    fonts: false,
    theme: {
      defaultVariants: {
        color: 'primary',
        size: 'md',
      },
      colors: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'neutral',
        'danger',
      ],
    },
  },
  css: ['~/assets/css/main.css', '~/assets/styles/main.scss'],
  icon: {
    customCollections: [{ prefix: 'few', dir: './app/assets/icons' }],
  },
})
