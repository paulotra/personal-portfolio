<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'outline' | 'disabled'
type Size = 'sm' | 'default' | 'lg' | 'xl'

withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  showIcon?: boolean
}>(), {
  variant: 'primary',
  size: 'default',
  showIcon: true,
})

const sizeClasses: Record<Size, string> = {
  sm:      'px-4 py-2 text-sm gap-2',
  default: 'px-5 py-3 text-default gap-2',
  lg:      'px-6 py-4 text-lg gap-2',
  xl:      'px-8 py-5 text-xl gap-2',
}

const iconSizeClasses: Record<Size, string> = {
  sm:      'size-3',
  default: 'size-3.5',
  lg:      'size-4.5',
  xl:      'size-5',
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-primary-100 border border-primary-300 text-primary-500 rounded-lg',
  secondary: 'bg-secondary-500 text-white rounded',
  outline:   'bg-white border border-primary-200 text-primary-500 rounded',
  disabled:  'bg-neutral-300 text-neutral-600 rounded cursor-not-allowed',
}
</script>

<template>
  <button
    :disabled="variant === 'disabled'"
    :class="[
      'inline-flex items-center justify-center font-sans transition-all duration-300',
      sizeClasses[size],
      variantClasses[variant],
    ]"
  >
    <slot />
    <template v-if="showIcon">
      <slot name="icon">
        <svg
          :class="iconSizeClasses[size]"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.75 2.75a.75.75 0 0 0-1.5 0v5.5h-5.5a.75.75 0 0 0 0 1.5h5.5v5.5a.75.75 0 0 0 1.5 0v-5.5h5.5a.75.75 0 0 0 0-1.5h-5.5v-5.5Z" />
        </svg>
      </slot>
    </template>
  </button>
</template>
