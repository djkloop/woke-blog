import { blogInfos } from './site.config'

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
    '@nuxt/scripts',
  ],
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/main.css',
    '~/assets/markdown.scss',
    '~/assets/transition.scss',
  ],
  app: {
    rootId: 'nuxt-root',
    head: {
      meta: [
        { name: 'description', content: blogInfos.seoDescription },
        { name: 'author', content: blogInfos.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      htmlAttrs: {
        lang: blogInfos.lang,
      },
      bodyAttrs: {
        class: 'font-sans',
      },
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/@waline/client@v3/dist/waline.css' },
      ],
    },
  },
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
