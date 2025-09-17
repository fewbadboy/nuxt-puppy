<template>
  <div class="login">
    <div class="flex justify-end">
      <LanguageDropdown />
    </div>
    <UForm
      class="space-y-4 text-center"
      :schema="schema"
      :state="state"
      @submit="handleLogin"
    >
      <UFormField
        name="username"
        :label="t('login.username')"
        :ui="formFieldFlex"
        required
      >
        <UInput v-model="state.username" />
      </UFormField>

      <UFormField
        name="password"
        :label="t('login.password')"
        :ui="formFieldFlex"
        required
      >
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit" class="w-full justify-center">
        {{ t('login') }}
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import { formFieldFlex } from '~/ui.config'
const { t } = useI18n()
const toast = useToast()

console.log(useRequestURL())
console.log(useLocale())
definePageMeta({
  layout: 'blank',
})

type Schema = v.InferOutput<typeof schema>

const state = reactive<Schema>({
  username: '',
  password: '',
})

const schema = v.object({
  username: v.pipe(
    v.string(),
    v.nonEmpty(() => t('login.vUsername'))
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty(() => t('login.vPassword')),
    v.minLength(8, () => t('login.vPasswordMin'))
  ),
})

async function handleLogin(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success',
  })
  await navigateTo('/')
}
</script>

<style>
.login {
  @apply relative w-[260px] flex flex-col justify-center self-center top-1/2 left-1/2 -translate-1/2;
}
</style>
