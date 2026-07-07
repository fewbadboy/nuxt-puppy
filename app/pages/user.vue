<template>
  <div>
    Hello User
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in',
  },
  middleware(to, from) {
      if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean') {
      const toLen = to.path.split('/').filter(Boolean).length
      const fromLen = from.path.split('/').filter(Boolean).length
      // ensure TypeScript knows pageTransition has a 'name' property
      ;(to.meta.pageTransition as { name?: string }).name = (toLen === fromLen ? 'layout' : toLen > fromLen ? 'slide-left' : 'slide-right')
    }
  }
})
</script>

<style lang="scss" scoped>


</style>