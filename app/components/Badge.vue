<script setup lang="ts">
type Variant = 'ui' | 'brand' | 'dev'

withDefaults(defineProps<{
  variant?: Variant
}>(), {
  variant: 'ui',
})

const variantClasses: Record<Variant, { wrapper: string; dot: string }> = {
  ui:    { wrapper: 'bg-primary-100 border-primary-200 text-primary-500',      dot: 'bg-primary-500' },
  brand: { wrapper: 'bg-secondary-100 border-secondary-300 text-secondary-500', dot: 'bg-secondary-500' },
  dev:   { wrapper: 'bg-success-100 border-success-200 text-success-500',      dot: 'bg-success-500' },
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1 px-3 py-2 rounded-full border',
      'text-xs leading-3 font-medium font-sans whitespace-nowrap',
      variantClasses[variant].wrapper,
    ]"
  >
    <span :class="['size-2 rounded-full shrink-0', variantClasses[variant].dot]" aria-hidden="true" />
    <slot />
  </span>
</template>
