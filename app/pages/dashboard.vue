<template>
  <div>
    <UDashboardSearchButton />
    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar />
        <UDashboardToolbar />
        <UColorModeButton />
      </template>
    </UDashboardPanel>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})

const text = ref('')

async function stream() {
  text.value = ''
  const content = 'The user is asking about Vue components.'

  for (const char of content) {
    text.value += char
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}
</script>

<style lang="scss" scoped>


</style>