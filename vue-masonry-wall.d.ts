declare module 'vue-masonry-wall' {
  import type { DefineComponent } from 'vue'
  const MasonryWall: DefineComponent<{
    items: unknown[]
    columnWidth?: number
    gap?: number
    minColumns?: number
    maxColumns?: number
    rtl?: boolean
  }>
  export default MasonryWall
}
