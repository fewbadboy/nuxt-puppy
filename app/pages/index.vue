<template>
  <UContainer>
    <div class="animate__animated animate__bounce">{{ title }} </div>
    <div class="red url-bg">{{ API_URL }}</div>
    <div class="red url-bg underline">大家好</div>
    <img src="~/assets/authority.svg" alt="authority" />
    <NuxtLink to="/about">About page</NuxtLink>
    <UTheme
      :ui="{
        button: {
          base: 'rounded-full'
        }
      }"
    >
      <div class="flex items-center gap-2">
        <UButton label="Button" color="neutral" :ui="{ base: 'rounded-none' }" />
        <UButton label="Button" color="neutral" variant="outline" />
        <UButton label="Button" color="neutral" variant="subtle" />
      </div>
    </UTheme>
    <div class="flex items-center gap-2">
      <UAvatar 
        icon="i-lucide-image" 
        loading="lazy"
        :chip="{
          inset: true
        }"
      />
    </div>
    <UBanner id="example" title="This is a closable banner." close />
    <UCard variant="subtle">
      <template #header>
        <Placeholder class="h-8" />
      </template>
      <Placeholder class="h-32" />
      <template #footer>
        <div>{{ t('hello') }}</div>
        <Placeholder class="h-8" />
      </template>
    </UCard>
    <USlideover 
      title="Slideover with title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      close-icon="i-lucide-arrow-right"
      inset
    >
      <UButton label="Open" color="neutral" variant="subtle" />
      <template #content>
        <Placeholder class="h-full m-4" />
      </template>
    </USlideover>
    <UPopover v-model:open="open">
      <UButton color="neutral" variant="subtle">
        <template #default>
          <UKbd>ctrl + o</UKbd>
        </template>
      </UButton>
      <template #content>
        <Placeholder class="size-48 m-4 inline-flex" />
      </template>
    </UPopover>
    <LazyBaseFooter v-if="clickable" />
    <component :is="clickable ? BaseFooterAsync : 'div'" />
    <component :is="BaseFooter" />
  </UContainer>
</template>

<script setup lang="ts">
import { BaseFooter } from '#components'
const { title } = useAppConfig()
const { public: { API_URL }} = useRuntimeConfig()

// const headers = useRequestHeaders(['accept-encoding'])
// console.log(headers)
const { t } = useI18n()
const website = useWebsiteStore()

await callOnce(website.fetch)

const open = ref(false)

defineShortcuts({
  ctrl_o: () => {
    open.value = !open.value
  }
})

const id = ref(1)

// 动态组件
const clickable = ref(true)
const BaseFooterAsync = resolveComponent('BaseFooter')

const counter = useState('counter', () => Math.round(Math.random() * 1000))
await callOnce(async () => {
  // initial state
  counter.value = await new Promise((resolve) => resolve(100))
})

const { data, status, error, refresh } = await useAsyncData('getEcho', async() => {
  // callOnce 触发 Pinia actions
  return $fetch<{ title: string, description: string }[]>('/api/echo')
}, { 
  transform:(data) => { return data.map(row => ({ title: row.title, description: row.description }))},
  // watch: [id] // Changing the id will trigger a refetch
})
// const { data } = await useFetch('/api/echo')
// const { data, execute, status } = await useLazyFetch(() => `/api/users/${id.value}`, { immediate: false })
// console.log(data, error)

// const response = await $fetch<ReadableStream>('/chats/ask-ai', {
//   method: 'POST',
//   body: {
//     query: 'Hello AI, how are you?',
//   },
//   responseType: 'stream',
// })
// const reader = response.pipeThrough(new TextDecoderStream()).getReader()
// while (true) {
//   const { value, done } = await reader.read()
//   if (done) { break }
//   console.log('Received:', value)
// }
</script>

<style>
@import url("~/assets/css/scope-index.css");
</style>