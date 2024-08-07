<script setup lang="ts">
import LayoutFooter from './LayoutFooter.vue'
import { blogInfos, navLinks } from '@/site.config'
</script>

<template>
  <div class="h100vh" border="1px solid r-coolGray-2 l-0 b-0 t-0" relative flex flex-col items-center justify-center gap-y-4 overflow-hidden>
    <div border="1px solid coolgray-2" h30 w30 flex rotate-y-180deg items-center justify-center overflow-hidden rounded-full p2>
      <img :src="`/images/${blogInfos.logoUrl}`" class="block h20 w20" alt="" srcset="">
    </div>
    <div text-3xl>
      <span>{{ blogInfos.title }}</span>
    </div>
    <div text-sm color-coolGray-6>
      <span>{{ blogInfos.description }}</span>
    </div>
    <div class="wkMenuWrapper">
      <NuxtLink
        v-for="menuItem in navLinks"
        :key="menuItem.path"
        class="wkMenuItem"
        exact-active-class="wkMenuItemActive"
        :to="menuItem.path"
      >
        {{ menuItem.name }}
      </NuxtLink>
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss">
.wkMenuWrapper {
  @apply flex gap-x-4 items-center justify-center;
}
.wkMenuItem {
  @apply transition-all decoration-none border-(1px solid color-transparent) p-(x1 y0.5) color-slate-8 cursor-pointer hover:(color-primary transition-duration-150 transition-property-color);
}
.wkMenuItemActive {
  @apply color-primary border-(1px solid primary) rounded-sm;
}
</style>
