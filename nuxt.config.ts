// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    'dayjs-nuxt',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@tdesign-vue-next/nuxt',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/main.css',
    '~/assets/markdown.scss',
    '~/assets/transition.scss',
  ],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      preload: [
        'c',
        'cpp',
        'java',
      ],

    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  ssr: true,
})
