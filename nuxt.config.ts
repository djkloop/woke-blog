// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    'dayjs-nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    "@nuxt/content"
  ],
  devtools: { enabled: true },
  css: [
    '~/assets/main.css'
  ],
  ssr: true
})