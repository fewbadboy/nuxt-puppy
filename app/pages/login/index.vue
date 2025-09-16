<template>
  <div class="h-full flex justify-center self-center">
    <UForm :state="loginInfo" :validate="validate" class="space-y-4">
      <UFormField label="Username" name="username" :ui="formFieldFlex" required>
        <UInput v-model="loginInfo.username" />
      </UFormField>

      <UFormField label="Password" name="password" :ui="formFieldFlex" required>
        <UInput v-model="loginInfo.password" type="password" />
      </UFormField>

      <UButton @click="handleLogin"> Submit </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormError } from '@nuxt/ui'
import type { UserLogin } from '~/global'
import { formFieldFlex } from '~/ui.config'
const toast = useToast()

console.log(useRequestURL())
definePageMeta({
  layout: 'blank',
})

const loginInfo = reactive<UserLogin>({
  username: '',
  password: '',
})

const validate = (info: UserLogin): FormError[] => {
  const errors = []
  if (!info.username) errors.push({ name: 'username', message: 'Required' })
  if (!info.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}

function handleLogin() {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success',
  })
}
</script>
