/**
 * expose public variables
 * cannot be overridden using environment variables
 *
 * Variables are exposed using the useAppConfig().
 *  */
export default defineAppConfig({
  ui: {
    colors: {
      /**
       * @see https://ui.nuxt.com/getting-started/theme#configuration
       */
      danger: 'red',
    },
    link: {
      base: 'focus-visible:outline-primary',
      variants: {
        active: {
          true: 'text-primary',
          false: 'text-muted',
        },
        disabled: {
          true: 'cursor-not-allowed opacity-75',
        },
      },
    },
    formField: {},
  },
})
