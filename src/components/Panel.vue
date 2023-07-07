<script setup lang="ts">
import { computed, toRefs } from "vue"
import { store } from "../store";

const { viewState, headerHeight, topOffset } = toRefs(store)

const $panelHeight = computed(() => {
  return {
    height: window.innerHeight - topOffset.value + 'px',
    top: topOffset.value + 'px'
  }
})

const $panelTransform = computed(() => {
  switch (viewState.value) {
    case 'open':
      return {
        transform: 'translateY(0)'
      }

    case 'peek':
      return {
        transform: 'translateY(50%)'
      }

    case 'closed':
      const height = window.innerHeight - topOffset.value - headerHeight.value
      return {
        transform: `translateY(${height}px)`
      }
  }
})
</script>

<template>
  <section class="absolute z-10 w-full h-full overflow-hidden">
    <div 
      :style="[$panelHeight, $panelTransform]" 
      class="absolute w-full duration-300 bg-white border-t-2 border-l-2 border-r-2 border-gray-200 shadow-md rounded-tl-xl rounded-tr-xl"
    >
      <slot />
    </div>
  </section>
</template>