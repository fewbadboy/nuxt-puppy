type WebsiteType = {
  name: string
  description: string
}

export const useWebsiteStore = defineStore('websiteStore', () => {
  const name = ref('')
  const description = ref('')

  async function fetch() {
    const infos: WebsiteType = await new Promise((resolve) => resolve({ name: 'nuxt', description: 'nuxt description' }))
    name.value = infos.name
    description.value = infos.description
  }
  
  return {
    name,
    description,
    fetch
  }
})