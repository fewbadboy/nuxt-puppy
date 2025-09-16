// automatically run on every route change
export default defineNuxtRouteMiddleware((to) => {
  const list = ['/']
  const authorization = useRequestHeader('authorization')
  console.log(authorization)

  if (!list.includes(to.path)) {
    console.log(to)
    // return navigateTo('/')
  }
})
