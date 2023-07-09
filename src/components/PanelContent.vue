<script setup lang="ts">
import { computed, onMounted, ref, toRefs, watch, watchEffect } from 'vue'
import { useScroll } from "@vueuse/core"
import { store } from '../store';
import type { Ref } from 'vue'

const { headerHeight, topOffset } = toRefs(store)
const content: Ref<HTMLElement | null> = ref(null)
const contentHeight = ref(-1)
const { arrivedState } = useScroll(content)

onMounted(() => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
})

watchEffect(async () => {
  if (!content.value) return
  contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  window.addEventListener('resize', () => {
    contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  })

  window.addEventListener('scroll', (e) => {
    contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  })
})

watch(arrivedState, (newArrivedState) => {
  console.log({ aS: newArrivedState })
})

const $contentHeight = computed(() => {
  return {
    height: contentHeight.value + 'px'
  }
})
</script>

<template>
  <section ref="content" :style="$contentHeight" class="overflow-y-auto">
    <slot />
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
</style>