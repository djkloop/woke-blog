<script lang="ts" setup>
const router = useRouter()

function backTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function back() {
  router.back()
}
</script>

<template>
  <div class="pr-2em xl:(absolute right-full top-0 h-full)">
    <div class="sticky top-14 w-8em">
      <div class="cursor-pointer" @click="back">
        <div class="i-icon-park-outline-left-small-up" /> Back
      </div>

      <div class="hidden cursor-pointer xl:block" @click="backTop">
        <div class="i-icon-park-outline-to-top-one" /> To Top
      </div>
    </div>
  </div>
</template>
