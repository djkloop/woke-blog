<script setup lang="ts">
import { getIncludedYearPosts } from '@/utils/getContent'

// xxx
const postList = await getIncludedYearPosts('home')
</script>

<template>
  <section flex flex-col gap-y-4>
    <!-- 首页轮播图 -->
    <HomeSwiper />
    <!-- 首页文章列表 -->
    <HomeContentList :posts="postList" />
  </section>
</template>

<style scoped>

</style>
