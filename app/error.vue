<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    default() {
      return {
        error: true,
      };
    },
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <h2>{{ props.error?.statusCode }}</h2>
    <h6>{{ props.error?.message }}</h6>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
