// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: 'authjs',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth"],
  runtimeConfig: {
    auth: {
      keycloak: {
        clientId: process.env.NUXT_AUTH_KEYCLOAK_CLIENT_ID,
        clientSecret: process.env.NUXT_AUTH_KEYCLOAK_CLIENT_SECRET,
        issuer: process.env.NUXT_AUTH_KEYCLOAK_ISSUER
      },
      secret: process.env.NUXT_AUTH_SECRET
    },
    authOrigin: process.env.NUXT_AUTH_ORIGIN
  }
})
