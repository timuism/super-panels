import { reactive } from "vue"
 
export const store = reactive({
  headerHeight: -1,
  topOffset: 36,
  setHeaderHeight(value: number) {
    this.headerHeight = value
  },
  setTopOffset(value: number) {
    this.topOffset = value
  }
})