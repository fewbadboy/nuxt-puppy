export default defineEventHandler(async (event) => {
  const log = useLogger(event)

  log.set({ echo: { plan: 'test' } })
  return [
    { title: '阿尔卑斯', description: '棒棒糖' }
  ]
})