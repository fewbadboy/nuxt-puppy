export default defineNuxtRouteMiddleware(async(to, from) => {
  if (await isAuthenticated() === false) {
    return navigateTo('/')
  }
})

async function isAuthenticated() {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(true), 1500)
  })
}