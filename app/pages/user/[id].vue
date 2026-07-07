<template>
  <div>
    路由上的id ： {{id}}
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  validate (route) {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
})

const { id }  = useRoute().params

</script>

<style scoped>


</style>