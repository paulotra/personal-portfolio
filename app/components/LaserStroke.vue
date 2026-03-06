<template>
  <div
    ref="el"
    class="laser-stroke absolute top-0 bottom-0 w-[1px]"
    :class="[
      { 'laser-stroke-up': direction === 'up' },
      paused ? 'laser-paused' : '',
    ]"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  direction?: 'down' | 'up'
  pause?: number // pause duration in ms between each cycle
}>()

const el = ref<HTMLElement | null>(null)
const paused = ref(false)

onMounted(() => {
  if (!props.pause || !el.value) return

  el.value.addEventListener('animationiteration', () => {
    paused.value = true
    setTimeout(() => {
      paused.value = false
    }, props.pause)
  })
})
</script>
