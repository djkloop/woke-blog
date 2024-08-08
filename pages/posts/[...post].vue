<script setup lang="ts">
const route = useRoute()
const post = route.params.post as Array<string>
const path = post.join('/')

useHead({
  script: [
    {
      innerHTML: `
        import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

        window.onload = () => {
          setTimeout(() => {
            const el = document.getElementById('waline');
            if (!el) return;
            init({
              el: '#waline',
              serverURL: 'https://waline-woke-blog-comment.vercel.app',
            });
          }, 500)
        }
      `,
      type: 'module',
      key: 'waline-comment-script',
      defer: true,
      async: true,
    },
  ],
})
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
        <div id="waline" class="fixed right-20px top-20px" />
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
