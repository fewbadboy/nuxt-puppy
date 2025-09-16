export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    message: `Body name: ${body.name}`,
    hi: "hi",
  };
});
