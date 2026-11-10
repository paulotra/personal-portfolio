<template>
  <div class="max-w-[960px] mx-auto py-10 flex flex-col gap-5">
    <img
      src="/images/projects/nudge/1.webp"
      alt="Nudge waitlist landing page"
      v-bind="anim(3)"
      class="w-full img-shadow"
    />
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:flex-1">
        <img
          src="/images/projects/nudge/2.webp"
          alt="Nudge wordmark refinement, before and after"
          v-bind="anim(4)"
          class="w-full img-shadow"
        />
      </div>
      <div class="md:flex-1">
        <img
          src="/images/projects/nudge/3.webp"
          alt="Nudge logomark refinement, before and after"
          v-bind="anim(5)"
          class="w-full img-shadow"
        />
      </div>
    </div>
    <img
      src="/images/projects/nudge/4.webp"
      alt="Nudge logo and logomark in blue with an orange accent dot"
      v-bind="anim(4)"
      class="w-full img-shadow"
    />
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:flex-1">
        <img
          src="/images/projects/nudge/5.webp"
          alt="Nudge logo-inspired pattern on blue"
          v-bind="anim(4)"
          class="w-full img-shadow"
        />
      </div>
      <div class="md:flex-1">
        <img
          src="/images/projects/nudge/6.webp"
          alt="Nudge outlined logo pattern on blue"
          v-bind="anim(5)"
          class="w-full img-shadow"
        />
      </div>
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
