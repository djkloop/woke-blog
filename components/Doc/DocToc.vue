<script setup lang="ts">
const props = defineProps(['toc'])
const currentId = ref()

onMounted(() => {
  function handleScroll() {
    const headings = document.querySelectorAll('h2, h3')
    for (let i = 0; i < headings.length; i++) {
      const top = headings[i].getBoundingClientRect().top
      if (top >= 0 && top <= 100)
        currentId.value = headings[i].id
    }
  }
  useEventListener(document, 'scroll', handleScroll)
})
</script>

<template>
  <div class="h-full">
    <nav>
      <ul>
        <li v-for="(h2, h2Index) in props.toc.links" :key="h2Index" class="relative list-none">
          <span class="flex items-center">
            <span v-if="h2.id === currentId" class="i-icon-park-outline-right-small absolute right-full text-1em" />
            <a :href="`#${h2.id}`">  {{ h2.text }}</a>
          </span>
          <template v-if="h2.children && h2.children.length > 0">
            <ul v-for="(h3, h3Index) in h2.children" :key="h3Index">
              <li class="relative flex list-none items-center">
                <div v-if="h3.id === currentId" class="i-icon-park-outline-right-small absolute right-full" />
                <a :href="`#${h3.id}`">
                  {{ h3.text }}</a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>
