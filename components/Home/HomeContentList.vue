<script setup lang="ts">
import { useDayjs } from '#dayjs'

const { posts } = defineProps(['posts'])

const dayjs = useDayjs()

const computedPosts = computed(() => {
  return posts.map((post: any) => {
    return {
      id: post._id,
      title: post.title,
      content: post.description,
      createTime: dayjs(post.date).format('YYYY-MM-DD HH:MM:ss'),
      tags: post.tags,
      isPin: post.isPin,
      path: post._path,

    }
  })
})
</script>

<template>
  <div v-for="item in computedPosts" :key="item.id">
    <ArticleBlockDescription
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :content="item.content"
      :tags="item.tags"
      :is-pin="item.isPin"
      :path="item.path"
      :create-time="item.createTime"
    />
  </div>
</template>

<style scoped>

</style>
