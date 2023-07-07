<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { Ref } from "vue"
import { store } from "../store";

const header:Ref<HTMLElement | null> = ref(null)


watchEffect(async () => {
  if(!header.value) return
  store.setHeaderHeight(header.value.clientHeight)
  document.addEventListener('resize', () => {
    store.setHeaderHeight((header.value as HTMLElement).clientHeight)
  })
})
</script>

<template>
  <header 
    ref="header" 
    class="px-6 py-4 border-b-2 border-gray-200"
  >
    <slot />
  </header>
</template>