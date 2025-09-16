import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir: resolve('./lang'),
        locales: [
          {
            code: 'zh_cn',
            file: 'zh-CN.ts',
          },
          {
            code: 'en',
            file: 'en-US.ts',
          },
        ],
      })
    })
  },
})
