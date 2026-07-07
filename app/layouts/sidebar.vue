<template>
  <div>
    <UApp>
      <div class="flex flex-1">
        <USidebar
          :collapsible="collapsible"
          :ui="{
            root: 'h-screen'
          }"
        >
          <template #header>
            <UIcon name="i-logos-nuxt-icon" class="size-8" />
          </template>
          <UNavigationMenu
            :items="navData"
            orientation="vertical"
            :ui="{ link: 'p-1.5 overflow-hidden' }"
          />
        </USidebar>
        <div class="flex-1 flex flex-col overflow-hidden">
          <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-default">Header</div>
          <div class="flex-1">
            <UMain>
              <slot />
            </UMain>
          </div>
        </div>
      </div>
    </UApp>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem, SidebarProps } from '@nuxt/ui'
import { getNavData } from '../utils/index'

const navData = computed<NavigationMenuItem[]>(() => getNavData())

// defineProps<Pick<SidebarProps, 'collapsible'>>()

const collapsible = ref<SidebarProps['collapsible']>('none')

</script>

<style scoped>
.orange {
  background-color: #eebb90;
}
</style>