<script setup lang="ts">
import LayoutLeft from './components/LayoutLeft.vue'
</script>

<template>
  <div class="font-sans-regular grid grid-cols-4 gap-x-4 overflow-hidden">
    <LayoutLeft />
    <div col-span-3 overflow-y-scroll py4 class="scrollbar-none h-[calc(100vh-2rem)]">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
