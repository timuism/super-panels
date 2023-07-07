import { store } from "./store"
import type { PanelViewState } from "./types"

export function updateViewState(state: PanelViewState) {
  store.setViewState(state)
}

export function open() {
  store.setViewState('open')
}

export function peek() {
  store.setViewState('peek')
}

export function closed() {
  store.setViewState('closed')
}

export function is() {
  return store.viewState
}

export function next() {

  // this works like a 3-way toggle, updating the 
  // current view state with the "next" index in the array…
  const order:PanelViewState[] = ['closed', 'peek', 'open']
  const currentIndex = order.indexOf(is())

  // when we reach the end of the array, we 'reset' 
  let addend = currentIndex === order.length ? (-1 * order.length) : 1
  
  // now we can update it
  updateViewState(order[currentIndex + addend])
}

