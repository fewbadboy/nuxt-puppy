<template>
  <UContainer
    :ui="{
      base: 'flex justify-center'
    }"
  >
    <UAuthForm
      title="Login"
      description="Enter your credentials to access your account."
      icon="i-lucide-user"
      :fields="fields"
      class="max-w-md"
    />
  </UContainer>
</template>

<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'

definePageMeta({
  layout: false
})

const fields = ref<AuthFormField[]>([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>