<template>
  <div class="max-w-[960px] mx-auto py-10 flex flex-col gap-5">
    <img
      src="/images/projects/twenste-horren/1.webp"
      alt="Twenste Horren website homepage"
      v-bind="anim(3)"
      class="w-full img-shadow"
    />
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:flex-1">
        <img
          src="/images/projects/twenste-horren/2.webp"
          alt="Twenste Horren logomark over a window photo"
          v-bind="anim(4)"
          class="w-full img-shadow"
        />
      </div>
      <div class="md:flex-1">
        <img
          src="/images/projects/twenste-horren/3.webp"
          alt="Twenste Horren logo on white and red backgrounds"
          v-bind="anim(5)"
          class="w-full img-shadow"
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:flex-1">
        <img
          src="/images/projects/twenste-horren/4.webp"
          alt="Twenste Horren logomark construction grid"
          v-bind="anim(4)"
          class="w-full img-shadow"
        />
      </div>
      <div class="md:flex-1">
        <img
          src="/images/projects/twenste-horren/5.webp"
          alt="Twenste Horren logo with brand pattern"
          v-bind="anim(5)"
          class="w-full img-shadow"
        />
      </div>
    </div>
    <img
      src="/images/projects/twenste-horren/6.webp"
      alt="Twenste Horren brand mockups: tote bag, building sign, container and billboard"
      v-bind="anim(4)"
      class="w-full img-shadow"
    />
    <img
      src="/images/projects/twenste-horren/7.webp"
      alt="Twenste Horren full website design"
      v-bind="anim(4)"
      class="w-full img-shadow"
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
