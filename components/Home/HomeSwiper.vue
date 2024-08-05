<script setup lang="ts">
const imgs = shallowRef<any>([])

const allImages = shallowRef<any>({})

for (const path in allImages.value) {
  const module = allImages.value[path]
  imgs.value.push(module)
}
</script>

<template>
  <section id="WoKeHomeSwiper">
    <t-swiper class="h300px overflow-hidden rounded-sm" trigger="click" :navigation="{ showSlideBtn: 'hover' }">
      <t-swiper-item v-for="(img) in imgs" :key="img" class="relative h300px bg-black">
        <t-image
          lazy
          class="h300px w-full"
          :src="img"
          fit="cover"
        />
      </t-swiper-item>
    </t-swiper>
  </section>
</template>
