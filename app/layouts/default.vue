<template>
  <div>
    <div class="flex self-center h-14">
      <img src="~/assets/images/fe_all.png" />
      <UNavigationMenu
        class="w-full justify-center"
        color="primary"
        :items="menu"
        :ui="{}"
      />
      <div class="flex self-center pr-4">
        <UserDropdown />
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const { menu } = useMenuStore()
</script>
