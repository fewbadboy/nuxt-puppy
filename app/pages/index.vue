<template>
  <div>
    <h1 class="success bg-amber-300">
      Welcome to the homepage, {{ data?.message }} {{ user.name }}
      {{ numberFormat(1234.234) }}
    </h1>
    <div>
      <NuxtTime
        :locale="'zh-CN'"
        :datetime="new Date()"
        :year="'numeric'"
        :month="'2-digit'"
        :day="'2-digit'"
        :hour="'2-digit'"
        :minute="'2-digit'"
        :second="'2-digit'"
        :time-zone="'Asia/Shanghai'"
      />
    </div>
    <LazyNuxtPicture
      src="https://47e1bfa3-0330-4fd0-96f7-e88ff9eae8e3.mdnplay.dev/shared-assets/images/examples/surfer.jpg"
    />
    <!-- <UIcon name="i-few-sun" />
    <UButton icon="i-ep-avatar" variant="subtle">Button</UButton> -->
    <AppAlert> This is an auto-imported component </AppAlert>
    <div>
      <UButton
        v-for="locale in locales"
        :key="locale.code"
        color="neutral"
        variant="outline"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </UButton>
      <h1>{{ $t('welcome') }}</h1>
    </div>
    <Placeholder class="h-48" />
  </div>
</template>
<script setup lang="ts">
const { locales, setLocale } = useI18n()
const l = useBrowserLocale()
console.log(l)
const user = useUserStore()
const background = ref('#f5f5f5')

const { data } = await useFetch('/api/test', {
  method: 'get',
  params: {
    name: 'test',
  },
  pick: ['message'],
  server: false,
})

// 测试异常
try {
  const { data, error } = await useFetch('/api/consumer/admin')
  if (error.value?.data?.message) {
    console.log('error', error.value?.data?.message)
  } else {
    console.log('data', data.value)
  }
} catch (error) {
  console.log(error)
}
</script>

<style scoped>
/** Dynamic Styles */
.dynamic-bg {
  background-color: v-bind(background);
}
</style>
