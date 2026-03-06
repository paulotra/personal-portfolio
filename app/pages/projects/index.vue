<template>
  <Content class="relative z-20 rounded-t-none !pt-0">
    <div
      ref="sectionRef"
      class="relative flex flex-col gap-[54px] text-center lg:text-left"
    >
      <!-- Visit all projects -->
      <NuxtLink
        to="/"
        :class="visible ? 'animate-slideDown' : 'opacity-0'"
        class="flex items-center lg:justify-start justify-center relative left-[-12px] lg:left-0 gap-3 cursor-pointer text-neutral-700 hover:text-primary-500"
      >
        <img
          src="/images/works/visit-arrow.png"
          alt=""
          aria-hidden="true"
          class="h-[27px] w-[53px] object-cover scale-x-[-1]"
        />
        <span class="font-['Gochi_Hand'] text-3xl leading-10 whitespace-nowrap"
          >Visit all projects</span
        >
      </NuxtLink>
      <!-- Header -->
      <div class="flex items-end justify-center lg:justify-between relative">
        <h2
          :class="visible ? 'animate-slideDown' : 'opacity-0'"
          class="font-sans font-black text-4xl leading-[1.4] uppercase text-black"
        >
          ALL MY PROJECTS
        </h2>

        <!-- "design & development" decorative label -->
        <div
          :class="
            visible ? 'animate-slideDown [animation-delay:800ms]' : 'opacity-0'
          "
          class="hidden lg:block absolute right-[20px] -top-[92px] rotate-[15deg] pointer-events-none"
        >
          <p
            class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center whitespace-pre"
          >
            design <br />
            & <br />
            development
          </p>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid lg:grid-cols-3 gap-x-10 gap-y-[2.26rem]">
        <WorkCard
          v-for="(work, i) in works"
          :key="work.title"
          v-bind="work"
          class="max-w-[600px] mx-auto lg:mx-0 w-full"
          :class="visible ? `animate-slideDown` : 'opacity-0'"
          :style="visible ? `animation-delay: ${(i + 1) * 80}ms` : ''"
        />
      </div>
    </div>
  </Content>
</template>

<script setup lang="ts">
import { useInView } from "~/composables/useInView";
import { works } from "~/data/works";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView(0.3);
</script>
