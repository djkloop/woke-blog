<script setup lang="ts">
const imgs = shallowRef<any>([])

const allImages = import.meta.glob('/public/images/home/banner/*.{png,jpg}', {
  query: '?url',
  import: 'default',
  eager: true,
})

for (const path in allImages) {
  const module = allImages[path] as any
  imgs.value.push(module.replace('/_nuxt/public/', ''))
}
</script>

<template>
  <section id="WoKeHomeSwiper">
    <TSwiper class="h300px overflow-hidden rounded-sm" trigger="click" :navigation="{ showSlideBtn: 'hover' }">
      <TSwiperItem v-for="(img) in imgs" :key="img" class="relative h300px bg-black">
        <TImage
          class="h300px w-full"
          :src="img"
          fit="cover"
        />
      </TSwiperItem>
    </TSwiper>
  </section>
</template>
