<script setup lang="ts">
import 'tdesign-vue-next/es/style/index.css'
import '~/assets/theme.css'

const colorMode = useColorMode()

useHead({
  script: [
    {
      innerHTML: `
        import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

        window.onload = () => {
          setTimeout(() => {
            const el = document.getElementById('waline');
            if (!el) return;
            init({
              el: '#waline',
              serverURL: 'https://waline-woke-blog-comment.vercel.app',
            });
          }, 500)
        }
      `,
      type: 'module',
      key: 'waline-comment-script',
    },
  ],
})

onBeforeMount(() => {
  watchEffect(() => {
    if (colorMode.preference === 'dark') {
      document.documentElement.setAttribute('theme-mode', 'dark')
    }
    else {
      document.documentElement.removeAttribute('theme-mode')
    }
  })
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
