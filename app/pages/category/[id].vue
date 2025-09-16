<template>
  <div>{{ route.params.id }} {{ data?.message }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

definePageMeta({
  // router validation
  validate: async (route) => {
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  },
});

const name = ref("Nuxt");

const { data } = useLazyFetch("/api/test", {
  query: {
    name,
  },
  immediate: true,
});
</script>
