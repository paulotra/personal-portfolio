<template>
  <div class="max-w-[960px] mx-auto py-10 flex flex-col gap-5">
    <div class="flex gap-5 flex-col">
      <img
        src="/images/projects/ocam/1.webp"
        v-bind="anim(0)"
        class="w-full img-shadow"
      />
      <img
        src="/images/projects/ocam/2.webp"
        v-bind="anim(1)"
        class="w-full img-shadow"
      />
      <img
        src="/images/projects/ocam/3.webp"
        v-bind="anim(2)"
        class="w-full img-shadow"
      />
      <img
        src="/images/projects/ocam/4.webp"
        v-bind="anim(3)"
        class="w-full img-shadow"
      />
      <img
        src="/images/projects/ocam/5.webp"
        v-bind="anim(4)"
        class="w-full img-shadow"
      />
    </div>
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
