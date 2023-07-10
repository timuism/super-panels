<script setup lang="ts">
import { Ref, computed, onMounted, ref, toRefs } from "vue"
import { store } from "../store";

const { viewState, headerHeight, topOffset } = toRefs(store)
const allowInnerScroll:Ref<boolean> = ref(false)
const currentWindowInnerHeight = ref(window.innerHeight)

onMounted(() => {
  window.addEventListener('mouseover', (e) => {
    const eventTarget = e.target as HTMLElement
    allowInnerScroll.value = eventTarget.closest('[data-inner]') ? true : false
  })

  window.addEventListener('touchstart', (e) => {
    const eventTarget = e.target as HTMLElement
    allowInnerScroll.value = eventTarget.closest('[data-inner]') ? true : false 
  })

  window.addEventListener('resize', () => {
    currentWindowInnerHeight.value = window.innerHeight
  })
})

const $panelHeight = computed(() => {
  return {
    height: currentWindowInnerHeight.value - topOffset.value + 'px',
    top: topOffset.value + 'px'
  }
})

const $panelMarginTop = computed(() => {
  switch (viewState.value) {
    case 'open':
      return { marginTop: 0 }

    case 'peek':
      return { marginTop: currentWindowInnerHeight.value / 2 + 'px' }

    case 'closed':
      const height = currentWindowInnerHeight.value - topOffset.value - headerHeight.value
      return { marginTop: height + 'px'}
  }
})
</script>

<template>
  <section 
    class="fixed bottom-0 z-10 w-full pointer-events-none h-dscreen no-scrollbar" 
    :class="[allowInnerScroll ? 'overflow-y-auto' : 'overflow-hidden']"
  >
    <div 
      :style="[$panelHeight, $panelMarginTop]" 
      class="absolute w-full duration-300 bg-white border-t-2 border-l-2 border-r-2 border-gray-200 shadow-md pointer-events-auto rounded-tl-xl rounded-tr-xl"
      data-inner
    >
      <slot />
    </div>
  </section>
</template>