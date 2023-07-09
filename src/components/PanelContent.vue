<script setup lang="ts">
import { computed, ref, toRefs, watch, watchEffect } from 'vue'
import { useScroll } from "@vueuse/core"
import { store } from '../store';
import type { Ref } from 'vue'

const { headerHeight, topOffset } = toRefs(store)
const content:Ref<HTMLElement | null> = ref(null)
const contentHeight = ref(-1)
const { arrivedState } = useScroll(content)

watchEffect(async () => {
  if(!content.value) return
  contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  document.addEventListener('resize', () => {
    alert("resizeEvent")
    contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  })
})

watch(arrivedState, (newArrivedState) => {
  console.log({aS: newArrivedState})
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