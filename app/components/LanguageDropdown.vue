<template>
  <UDropdownMenu
    :items="items"
    :ui="{
      content: 'bg-amber-50',
    }"
  >
    <UButton icon="i-lucide-languages" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { LanguageType } from '~/global'
const { setLocale } = useI18n()
const { code } = useLocale()
setLocale(code.value as LanguageType)

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: '中文',
      onSelect() {
        setLocale('zh_cn')
      },
    },
    {
      label: 'English',
      onSelect() {
        setLocale('en')
      },
    },
  ],
])
</script>
