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
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
