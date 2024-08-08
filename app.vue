<script setup lang="ts">
import 'tdesign-vue-next/es/style/index.css'
import '~/assets/theme.css'

const colorMode = useColorMode()

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

useHead({
  script: [
    {
      innerHTML: `
        import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

        let waline = null;

        function observeElementAppearance(selector) {
          const observer = new MutationObserver((mutationsList, observer) => {
              for (const mutation of mutationsList) {
                  if (mutation.type === 'childList' || mutation.type === 'subtree') {
                      const element = document.querySelector(selector);
                      if (element && !waline) {
                          waline = init({
                            el: selector,
                            serverURL: 'https://waline-woke-blog-comment.vercel.app',
                          });
                      } else {
                       if (waline) {
                          waline.destroy()
                          waline = null
                       }
                      }
                  }
              }
          });

          observer.observe(document.documentElement, {
              childList: true,
              subtree: true
          });
      }

        // 假设要监测一个具有特定 ID 的元素
        observeElementAppearance('#waline');

      `,
      type: 'module',
      key: 'waline-comment-script',
      defer: true,
      tagPosition: 'bodyClose',
      async: true,
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
