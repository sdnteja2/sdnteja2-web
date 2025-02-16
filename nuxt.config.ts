// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthub/core',
  ],
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },
  hub: {
    database: true,
  },
})
