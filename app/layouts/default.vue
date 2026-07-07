<template>
  <div>
    <UApp :locale="appLocale">
      <UHeader>
        <template #title>
          <div>Nuxt UI</div>
        </template>
        <UNavigationMenu color="secondary" variant="link" :highlight="true" :items="navData" />
        <template #right>
          <ULocaleSelect
            :model-value="locale"
            :locales="[locales.en, locales.zh_cn]"
            @update:model-value="setLocaleLocal($event)"
          />
          <UColorModeButton />
        </template>
      </UHeader>
      <UMain>
        <slot />
      </UMain>
      <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />
      <UFooter>
        <template #left>
          <p class="text-muted text-sm">
            Copyright © {{ new Date().getFullYear() }}
          </p>
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
          <UButton
            icon="i-simple-icons-discord"
            color="neutral"
            variant="ghost"
            to="https://go.nuxt.com/discord"
            target="_blank"
            aria-label="Discord"
          />
          <UButton
            icon="i-simple-icons-x"
            color="neutral"
            variant="ghost"
            to="https://go.nuxt.com/x"
            target="_blank"
            aria-label="X"
          />
          <UButton
            icon="i-simple-icons-github"
            color="neutral"
            variant="ghost"
            to="https://github.com/nuxt/nuxt"
            target="_blank"
            aria-label="GitHub"
          />
        </template>
      </UFooter>
    </UApp>
  </div>
</template>

<script lang="ts" setup>
import * as locales from '@nuxt/ui/locale'
import type { NavigationMenuItem } from '@nuxt/ui'
import { getNavData } from '../utils/index'

const navData = computed<NavigationMenuItem[]>(() => getNavData())

const items: NavigationMenuItem[] = [
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  }, {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank'
  }, {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
]

const { locale, setLocale } = useI18n()

const setLocaleLocal = (val: string) => {
  setLocale(val as 'en' | 'zh-CN')
}

const appLocale = computed(() => {
  return locale.value === 'en' ? locales.en : locales.zh_cn
})

</script>

<style>

</style>
