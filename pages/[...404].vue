<script setup lang="ts">

</script>

<template>
  <div class="h100vh flex flex-col items-center justify-center gap-y-4 text-3xl font-bold container">
    <span class="i-ph-warning-circle-duotone text-6xl" role="img" aria-hidden="true" />
    <p>
      Oops! 页面丢啦！
    </p>
    <NuxtLink to="/">
      <t-button theme="primary">
        返回首页
      </t-button>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
