<template>
  <div ref="sectionRef" class="relative flex flex-col gap-[54px]">
    <!-- Header -->
    <div class="flex items-end justify-center lg:justify-between relative">
      <h2
        ref="headingRef"
        class="font-sans font-black text-4xl leading-[1.4] uppercase text-black"
      >
        RECENT WORKS
      </h2>

      <!-- "design & development" decorative label -->
      <div
        class="absolute lg:right-[360px] -top-[180px] lg:-top-[132px] rotate-[15deg] pointer-events-none"
      >
        <HandwrittenText
          :text="'design\n&\ndevelopment'"
          class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center"
          :stagger="0.05"
        />
      </div>

      <!-- Visit all projects -->
      <NuxtLink
        ref="visitLinkRef"
        to="/projects"
        class="lg:flex items-center gap-3 cursor-pointer hidden text-neutral-700 hover:text-primary-500"
      >
        <HandwrittenText
          text="Visit all projects"
          class="font-['Gochi_Hand'] text-3xl leading-10 whitespace-nowrap"
          :delay="0.1"
        />
        <img
          src="/images/works/visit-arrow.png"
          alt=""
          aria-hidden="true"
          class="h-[27px] w-[53px] object-cover"
        />
      </NuxtLink>
    </div>

    <!-- Cards Grid -->
    <div ref="cardsRef" class="grid lg:grid-cols-3 gap-x-10 gap-y-[2.26rem]">
      <WorkCard
        v-for="(work) in works.slice(0, 3)"
        :key="work.title"
        v-bind="work"
        class="max-w-[600px] mx-auto lg:mx-0 w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { works } from "~/data/works";

const sectionRef = ref<HTMLElement | null>(null);
const headingRef = ref<HTMLElement | null>(null);
const visitLinkRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const trigger = sectionRef.value!;

    gsap.from(headingRef.value, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger, start: "top 85%" },
    });

    gsap.from(visitLinkRef.value?.$el ?? visitLinkRef.value, {
      x: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.1,
      scrollTrigger: { trigger, start: "top 85%" },
    });

    if (cardsRef.value) {
      gsap.from(cardsRef.value.children, {
        y: 80,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: cardsRef.value, start: "top 85%" },
      });
    }
  }, sectionRef.value!);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
