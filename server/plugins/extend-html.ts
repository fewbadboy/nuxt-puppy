export default defineNitroPlugin((nitroApp) => {
  // Extending the HTML Template
  nitroApp.hooks.hook('render:html', (html) => {
    html.head.push(
      `<meta name="description" content="My custom description" />`
    )
  })
  nitroApp.hooks.hook('render:response', () => {})
})
