import { reactive } from "vue"
import type { PanelViewState } from "./types"
 
export const store = reactive({
  viewState: <PanelViewState> 'closed',
  headerHeight: -1,
  topOffset: 36,
  setViewState(value: PanelViewState) {
    this.viewState = value
  },
  setHeaderHeight(value: number) {
    this.headerHeight = value
  },
  setTopOffset(value: number) {
    this.topOffset = value
  }
})