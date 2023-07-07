<script setup lang="ts">
import { computed, ref, toRefs } from "vue"
import type { Ref } from "vue"
import { store } from "../store";

type PanelState = 'open' | 'peek' | 'closed'

const { headerHeight, topOffset } = toRefs(store)
const currentPanelState:Ref<PanelState> = ref('peek')

const $panelHeight = computed(() => {
  return {
    height: window.innerHeight - topOffset.value + 'px',
    top: topOffset.value + 'px'
  }
})

const $panelTransform = computed(() => {
  switch (currentPanelState.value) {
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
  <section class="absolute z-10 overflow-hidden w-full h-full">
    <div 
      :style="[$panelHeight, $panelTransform]" 
      class="absolute z-10 w-full bg-white border-t-2 border-l-2 border-r-2 border-gray-200 shadow-md rounded-tl-xl rounded-tr-xl duration-300"
    >
      <slot />
    </div>
  </section>
</template>