export default defineEventHandler((event) => {
  const consumer = event.context.params?.consumer;

  // setResponseStatus(event, 202)
  if (consumer === "admin") {
    throw createError({
      statusCode: 403,
      message: "没权限执行该操作",
    });
  }
  return `Default customer handler: ${event.context.params?.consumer}`;
});
