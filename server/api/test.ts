export default defineEventHandler(async (event) => {
  const { apiSecret } = useRuntimeConfig(event)
  const query = getQuery(event)

  console.log(apiSecret)

  return {
    message: `Query name: ${query.name}`,
    hi: 'hi',
  }
})
