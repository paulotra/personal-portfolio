<template>
  <div ref="sectionRef" class="relative flex flex-col gap-[54px]">
    <!-- Header -->
    <div class="flex items-end justify-center lg:justify-between relative">
      <h2
        :class="visible ? 'animate-slideDown' : 'opacity-0'"
        class="font-sans font-black text-4xl leading-[1.4] uppercase text-black"
      >
        RECENT WORKS
      </h2>

      <!-- "design & development" decorative label -->
      <div
        :class="
          visible ? 'animate-slideDown [animation-delay:800ms]' : 'opacity-0'
        "
        class="absolute lg:right-[360px] -top-[180px] lg:-top-[132px] rotate-[15deg] pointer-events-none"
      >
        <p
          class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center whitespace-pre"
        >
          design <br />
          & <br />
          development
        </p>
      </div>

      <!-- Visit all projects -->
      <NuxtLink
        to="/projects"
        :class="visible ? 'animate-slideDown' : 'opacity-0'"
        class="lg:flex items-center gap-3 cursor-pointer hidden text-neutral-700 hover:text-primary-500"
      >
        <span class="font-['Gochi_Hand'] text-3xl leading-10 whitespace-nowrap"
          >Visit all projects</span
        >
        <img
          src="/images/works/visit-arrow.png"
          alt=""
          aria-hidden="true"
          class="h-[27px] w-[53px] object-cover"
        />
      </NuxtLink>
    </div>

    <!-- Cards Grid -->
    <div class="grid lg:grid-cols-3 gap-x-10 gap-y-[2.26rem]">
      <WorkCard
        v-for="(work, i) in works.slice(0, 3)"
        :key="work.title"
        v-bind="work"
        class="max-w-[600px] mx-auto lg:mx-0 w-full"
        :class="visible ? `animate-slideDown` : 'opacity-0'"
        :style="visible ? `animation-delay: ${(i + 1) * 80}ms` : ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInView } from "~/composables/useInView";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView(0.3);

import { works } from "~/data/works";
</script>
