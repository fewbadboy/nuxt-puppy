export const useUserStore = defineStore('userStore', () => {
  const count = ref(0)
  const name = ref('Vue')
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    ++count.value
  }

  return {
    count,
    name,
    doubleCount,
    increment,
  }
})
