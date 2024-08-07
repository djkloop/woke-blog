<script setup lang="ts">
import { useDayjs } from '#dayjs'

const props = defineProps(['article'])
const dayjs = useDayjs()
const formattedDate = dayjs(props.article.date).format('YYYY-MM-DD HH:MM:ss')

const computedTags = computed(() => {
  let tagText = ''

  if (props.article.tags.length === 0)
    return '无分类'

  props.article.tags.forEach((xItem: number, index: number) => {
    const item = articleTags.find(x => x.value === xItem)

    tagText += `${item?.title} ${index !== props.article.tags.length - 1 ? '/' : ''} `
  })

  return tagText
})
</script>

<template>
  <div>
    <h1>{{ props.article.title }}</h1>
    <div class="mb-4em flex items-center gap-x-0.5em op-50">
      <div class="flex items-center">
        <span class="i-ph-calendar-dots-duotone m-r-0.5em" role="img" aria-hidden="true" /> {{ formattedDate }}
      </div>
      <div flex items-center>
        <span class="i-ph-tag-duotone m-r-0.5em" role="img" aria-hidden="true" /> {{ computedTags }}
      </div>
    </div>
  </div>
</template>
