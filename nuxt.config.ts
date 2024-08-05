// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    'dayjs-nuxt',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@tdesign-vue-next/nuxt',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  css: [
    '~/assets/main.css',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  ssr: true,
})
