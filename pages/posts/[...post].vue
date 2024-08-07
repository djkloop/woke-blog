<script setup lang="ts">
const route = useRoute()
const post = route.params.post as Array<string>
const path = post.join('/')
</script>

<template>
  <section class="markdown-theme-prose slide-enter-content relative p4">
    <ContentDoc :path="path">
      <template #default="{ doc }">
        <DocRender :article="doc" />
      </template>
      <template #empty>
        <h1 class="text-center">
          没有内容😔
        </h1>
      </template>

      <template #not-found>
        <h1 class="text-center">
          找不到内容😔
        </h1>
      </template>
    </ContentDoc>
  </section>
</template>

<style scoped>

</style>
