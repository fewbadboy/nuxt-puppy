export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.push(`<meta name="description" content="My custom description" />`)
  })
})