<template>
  <div
    class="laser-stroke absolute top-0 bottom-0 w-[1px]"
    :class="{ 'laser-stroke-up': direction === 'up' }"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  direction?: 'down' | 'up'
}>()
</script>
