<script setup lang="ts">
import { Waline } from '@waline/client/component'
import '@waline/client/style'

const route = useRoute()
const post = route.params.post as Array<string>
const path = post.join('/')

const serverURL = 'https://waline-woke-blog-comment.vercel.app'
const xPath = computed(() => useRoute().path)
//
</script>

<template>
  <section class="markdown-theme-prose slide-enter-content post-wrapper p4">
    <ContentDoc :path="path">
      <template #default="{ doc }">
        <div class="grid grid-cols-60 items-center justify-center">
          <div class="col-span-44">
            <DocRender :article="doc" />
          </div>
        </div>
        <div id="waline" class="fixed right-20px top-20px">
          <Waline :server-u-r-l="serverURL" :path="xPath" />
        </div>
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

<style lang="scss">
#waline {
  background: #f1f0f0;
  padding: 4px;
  border-radius: 4px;
}

.wl-cards {
  background: #fff !important;
  margin: 0.5em !important;
  box-shadow: none;

  border: 2px solid #fff;
  border-radius: 4px;
}

.wl-power {
  margin-right: 1em !important;
}
</style>
