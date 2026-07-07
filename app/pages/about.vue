<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <NuxtLink to="/">Home page</NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import * as z from 'zod'

definePageMeta({
  layout: 'sidebar',
  pageTransition: {
    name: 'rotate',
  },
})
const schema = z.object({
  name: z.string().min(2, 'Too short'),
  email: z.email('Invalid email'),
  bio: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: 'john',
  email: 'john@example.com',
  bio: undefined
})

const { success, error } = schema.safeParse(state)
// console.log(schema.safeParse(state)) 
</script>

<style scoped>
section {
  padding: 20px;
}
</style>