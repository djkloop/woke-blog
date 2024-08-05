<script setup lang="ts">
import { blogInfos, footerLinks } from '@/site.config'
</script>

<template>
  <div absolute bottom-0 z-2 w-full flex items-center justify-center py-4>
    <div flex flex-col items-center justify-center gap-x-2 text-sm class="color-coolGray-3">
      <div flex gap-x-2>
        <div flex items-center justify-center gap-x-1>
          <span class="i-hugeicons-copyright" role="img" aria-hidden="true" />
          <span>{{ blogInfos.title }}</span>
        </div>
        <span>|</span>
        <template v-for="link in footerLinks" :key="link.path">
          <span>|</span>
          <div flex items-center justify-center gap-x-1 class="wkLayoutMenuFooterItem">
            <span :class="link.icon" role="img" aria-hidden="true" />
            <a target="_blank" :href="link.path">{{ link.name }}</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wkLayoutMenuFooterItem {
  @apply hover:(color-primary transition-duration-150 transition-property-color);

  a {
    @apply color-coolGray-3 decoration-none hover:(color-primary transition-duration-150 transition-property-color);
  }
}
</style>
