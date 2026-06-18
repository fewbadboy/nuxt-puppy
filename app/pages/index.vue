<template>
  <div>
    <div class="animate__animated animate__bounce">{{ title }} </div>
    <div class="red">{{ API_URL }} </div>
    <img src="~/assets/authority.svg" alt="authority" />
  </div>
</template>

<script setup lang="ts">
const { title } = useAppConfig()
const { public: { API_URL }} = useRuntimeConfig()
</script>