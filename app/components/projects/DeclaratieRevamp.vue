<template>
  <div class="max-w-[960px] mx-auto py-10 flex flex-col gap-5">
    <img
      src="/images/projects/declaratie-revamp/1.webp"
      alt="123declaratie redesigned landing page"
      v-bind="anim(3)"
      class="w-full img-shadow"
    />
    <img
      src="/images/projects/declaratie-revamp/2.webp"
      alt="123declaratie app reports screen"
      v-bind="anim(4)"
      class="w-full !shadow-none"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ cardsVisible: boolean }>();

function anim(index: number) {
  return {
    class: [
      "transition-all duration-700 ease-out",
      props.cardsVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8",
    ],
    style: { transitionDelay: props.cardsVisible ? `${index * 120}ms` : "0ms" },
  };
}
</script>

<style scoped>
img {
  @apply rounded-xl;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
</style>
