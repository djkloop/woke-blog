<script setup lang="ts">
const props = defineProps(['article'])
</script>

<template>
  <ContentRenderer :value="props.article" />
</template>
