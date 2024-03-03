// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["./assets/scss/global.scss"],
  modules: [
    '@pinia/nuxt',
  ],
  imports: {
    dirs: [
      'composable',
      'composable/*/index.{ts,js,mjs,mts}',
      'composable/**'
    ]
  },
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: false }
})
