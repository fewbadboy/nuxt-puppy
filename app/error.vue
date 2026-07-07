<template>
  <UError
    redirect="/"
    :clear="{
      color: 'neutral',
      size: 'xl',
      icon: 'i-lucide-arrow-left',
      class: 'rounded-full'
    }"
    :error="{
      statusCode: error?.status,
      statusMessage: error?.message,
      message: 'The page you are looking for does not exist.'
    }"
  >
    <template #leading>
      <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full" />
    </template>
  </UError>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<style lang="scss" scoped>


</style>