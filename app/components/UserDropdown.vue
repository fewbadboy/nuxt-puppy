<template>
  <UDropdownMenu
    :items="items"
    :ui="{
      content: '',
    }"
  >
    <UButton icon="i-lucide-user" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user-cog',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: ['meta', 'q'],
      onSelect() {
        navigateTo('/login')
      },
    },
  ],
])

defineShortcuts(extractShortcuts(items.value))
</script>
