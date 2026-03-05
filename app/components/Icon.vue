<template>
  <svg
    :width="resolvedSize"
    :height="resolvedSize"
    :viewBox="icons[name].viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="icons[name].path"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { icons, type IconName } from '~/assets/icons'

const props = defineProps<{
  name: IconName
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>()

const sizeMap = { xs: 10, sm: 12, md: 16, lg: 20, xl: 24 }

const resolvedSize = computed(() => {
  if (!props.size) return sizeMap.sm
  if (typeof props.size === 'number') return props.size
  return sizeMap[props.size]
})
</script>
