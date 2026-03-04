<script setup lang="ts">
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

withDefaults(defineProps<{
  variant?: Variant
}>(), {
  variant: 'h1',
})

const classes: Record<Variant, string> = {
  h1: 'text-5xl leading-heading font-normal text-black',
  h2: 'text-4xl leading-heading font-normal text-black',
  h3: 'text-3xl leading-heading font-normal text-black',
  h4: 'text-2xl leading-heading font-normal text-black',
  h5: 'text-sm  leading-heading font-normal text-neutral-700 tracking-1 uppercase',
  h6: 'text-xs  leading-heading font-normal text-neutral-700 tracking-1 uppercase',
}
</script>

<template>
  <component :is="variant" :class="['font-sans', classes[variant]]">
    <slot />
  </component>
</template>
