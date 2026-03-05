<template>
  <div ref="sectionRef" class="relative flex flex-col gap-[60px]">
    <!-- Header -->
    <div class="flex gap-10 items-start">
      <!-- Left: Title + subtitle -->
      <div class="relative flex flex-col gap-4 flex-1">
        <!-- Craft & Code label -->
        <div
          :class="
            visible ? 'animate-slideDown [animation-delay:800ms]' : 'opacity-0'
          "
          class="absolute -top-8 left-[360px] rotate-[4.62deg] pointer-events-none"
        >
          <span
            class="font-['Gochi_Hand'] text-[36px] leading-10 text-primary-500 whitespace-nowrap"
            >Craft &amp; Code</span
          >
        </div>
        <div :class="visible ? 'animate-slideDown' : 'opacity-0'">
          <h2
            class="font-sans font-black text-4xl uppercase text-black whitespace-nowrap leading-[1.4]"
          >
            CORE CAPABILITIES
          </h2>
          <p class="text-xl text-neutral-700 leading-9">
            Hi, I'm a Frontend Developer who blends
            <strong class="font-bold text-black">engineering</strong> with
            <strong class="font-bold text-black">design</strong>.
          </p>
        </div>
      </div>
      <!-- Right: Description -->
      <p
        :class="
          visible ? 'animate-slideDown [animation-delay:80ms]' : 'opacity-0'
        "
        class="flex-1 text-xl text-neutral-700 leading-10"
      >
        I build fast, scalable Vue.js applications with clean architecture and
        thoughtful UI. I care about more than just making things work. From
        component structure to visual hierarchy, every detail is intentional.
      </p>
    </div>

    <!-- Capability Cards -->
    <div class="grid grid-cols-3 gap-10">
      <!-- Branding -->
      <Card
        class="transition-none"
        :class="
          visible ? 'animate-slideDown [animation-delay:160ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-6 h-[312px] px-6 py-8">
          <div class="flex flex-col gap-4">
            <h3
              class="font-sans font-bold text-3xl leading-10 uppercase text-black"
            >
              Branding
            </h3>
            <p class="font-sans font-normal text-sm leading-6 text-neutral-700">
              Building identities that communicate clearly and scale
              confidently.
            </p>
          </div>
          <div class="flex gap-5 items-center">
            <img
              src="/images/capabilities/illustrator.png"
              alt="Adobe Illustrator"
              class="size-8 rounded object-contain"
            />
            <img
              src="/images/capabilities/photoshop.png"
              alt="Adobe Photoshop"
              class="size-8 rounded object-contain"
            />
            <img
              src="/images/capabilities/figma.png"
              alt="Figma"
              class="size-8 object-contain"
            />
          </div>
        </div>
      </Card>

      <!-- UI & UX Design -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:240ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-6 h-[312px] px-6 py-8">
          <div class="flex flex-col gap-4">
            <h3
              class="font-sans font-bold text-3xl leading-10 uppercase text-black"
            >
              UI &amp; UX Design
            </h3>
            <p class="font-sans font-normal text-sm leading-6 text-neutral-700">
              Designing intuitive experiences for web and<br />mobile.
            </p>
          </div>
          <div class="flex gap-5 items-center flex-wrap">
            <img
              src="/images/capabilities/figma.png"
              alt="Figma"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/sketch.png"
              alt="Sketch"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/framer.png"
              alt="Framer"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/spline.png"
              alt="Spline"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/storybook.png"
              alt="Storybook"
              class="size-8 object-contain"
            />
          </div>
        </div>
      </Card>

      <!-- FE Development -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:320ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-6 h-[312px] px-6 py-8">
          <div class="flex flex-col gap-4">
            <h3
              class="font-sans font-bold text-3xl leading-10 uppercase text-black"
            >
              FE Development
            </h3>
            <p class="font-sans font-normal text-sm leading-6 text-neutral-700">
              Turning design into fast, scalable, production-ready applications.
            </p>
          </div>
          <div class="flex flex-wrap gap-5 items-center">
            <img
              src="/images/capabilities/vscode.png"
              alt="VS Code"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/github.png"
              alt="GitHub"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/chatgpt.png"
              alt="ChatGPT"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/vue.png"
              alt="Vue"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/nuxt2.png"
              alt="Nuxt"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/html5.png"
              alt="HTML5"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/css3.png"
              alt="CSS3"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/javascript.png"
              alt="JavaScript"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/tailwind.png"
              alt="Tailwind CSS"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/nuxt.png"
              alt="Nuxt"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/sass.png"
              alt="Sass"
              class="size-8 object-contain"
            />
            <img
              src="/images/capabilities/cypress.png"
              alt="Cypress"
              class="size-8 object-contain"
            />
          </div>
        </div>
      </Card>
    </div>

    <!-- Decorative: Camera (top-right) -->
    <div
      :class="
        visible ? 'animate-slideLeft [animation-delay:880ms]' : 'opacity-0'
      "
      class="absolute -top-[159px] right-[-60px] rotate-[15.01deg] pointer-events-none"
    >
      <img
        src="/images/capabilities/camera.png"
        alt=""
        aria-hidden="true"
        class="w-[214px] h-[143px] object-cover"
      />
    </div>

    <!-- Decorative: Sneaker (bottom-left) -->
    <div
      :class="
        visible ? 'animate-slideRight [animation-delay:960ms]' : 'opacity-0'
      "
      class="absolute top-[394px] -left-[109px] rotate-[14.21deg] pointer-events-none"
    >
      <img
        src="/images/capabilities/sneaker.png"
        alt=""
        aria-hidden="true"
        class="w-[306px] h-[204px] object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { useInView } from "~/composables/useInView";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView(0.9);
</script>
