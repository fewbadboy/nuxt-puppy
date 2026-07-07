// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    PORT: 8080,
    HOST: '0.0.0.0',
    apiSecret: '123',
    public: {
      API_URL: 'https://api.nuxt.com',
    }
  },
  $production: {
    routeRules: {
      '/': { prerender: true },
      // 特殊路由设置布局
      '/admin': { appLayout: 'default' }, 
      '/assets/**': {
        headers: { 'cache-control': 's-maxage=31536000' }
      }
    },
    sourcemap: false
  },
  // SEO and Meta
  app: {
    head: {
      title: 'Nuxt',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { name: 'description', content: 'My amazing site.' },
      ],
      link: []
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'evlog/nuxt',
    'nuxt-security'
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }, {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json'
      }
    ],
    defaultLocale: 'en',
  },
  evlog: {
    env: {
      service: 'puppy-service',
    },
    // include: [],
    exclude: []
  },
  // https://nuxt-security.vercel.app/getting-started/installation
  security: {
    hidePoweredBy: true
  },
  css: [
    '~/assets/css/index.css',
    'animate.css',
  ],
  ui: {
    fonts: false,
    theme: {
      defaultVariants: {
        size: 'md'
      }
    },
  },
  vue: {
    propsDestructure: true,
  },
  nitro: {
    prerender: {
      routes: []
    }
  },
  vite: {
    css: {
      devSourcemap: false
    },
    optimizeDeps: {
      include: [
        'zod',
      ]
    }
  },
  devtools: { enabled: true }
})