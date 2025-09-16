<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
const { locale } = useI18n()

console.log(locale, locales['zh_cn'])

useSeoMeta({
  title: 'Puppy Site',
  ogTitle: 'Puppy Site',
  description: 'This is Puppy site, let me tell you all about it.',
  ogDescription: 'This is Puppy site, let me tell you all about it.',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>
<style lang="scss"></style>
