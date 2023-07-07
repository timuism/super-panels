<script setup lang="ts">
import { computed, ref, toRefs, watchEffect } from 'vue'
import { store } from '../store';
import type { Ref } from 'vue'

const { headerHeight, topOffset } = toRefs(store)
const content:Ref<HTMLElement | null> = ref(null)
const contentHeight = ref(-1)

watchEffect(async () => {
  if(!content.value) return
  contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  document.addEventListener('resize', () => {
    contentHeight.value = window.innerHeight - topOffset.value - headerHeight.value
  })
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