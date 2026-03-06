<template>
  <header
    class="z-50 w-full mx-auto transition-transform duration-300"
    :class="scrolled ? 'translate-y-0' : '-translate-y-full'"
  >
    <nav class="flex items-center justify-between mx-auto px-6 py-4 max-w-full">
      <NuxtLink to="/">
        <img
          src="/images/pt-logo.svg"
          alt="PT Logo"
          class="h-[22px] w-[24px]"
        />
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-10">
        <LinkButton href="#services" class="text-base text-neutral-800"
          >Services</LinkButton
        >
        <LinkButton href="#works" class="text-base text-neutral-800"
          >Recent Works</LinkButton
        >
        <LinkButton href="#experience" class="text-base text-neutral-800"
          >Experience</LinkButton
        >
        <LinkButton href="#testimonials" class="text-base text-neutral-800"
          >Testimonials</LinkButton
        >
        <div class="flex gap-4">
          <NuxtLink to="/projects">
            <Button variant="secondary" :show-icon="false" class="w-full"
              >See All Projects</Button
            >
          </NuxtLink>
          <a href="mailto:trajanopaulo@gmail.com">
            <Button variant="primary" :show-icon="false">Work With Me</Button>
          </a>
        </div>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col justify-center gap-[5px] p-1"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block w-5 h-[2px] bg-neutral-800 transition-all duration-200 origin-center"
          :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''"
        />
        <span
          class="block w-5 h-[2px] bg-neutral-800 transition-all duration-200"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-5 h-[2px] bg-neutral-800 transition-all duration-200 origin-center"
          :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
        />
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-show="menuOpen"
      class="md:hidden flex flex-col gap-5 px-6 pb-6 border-t border-neutral-200"
    >
      <LinkButton
        href="#services"
        class="text-base text-neutral-800"
        @click="menuOpen = false"
        >Services</LinkButton
      >
      <LinkButton
        href="#works"
        class="text-base text-neutral-800"
        @click="menuOpen = false"
        >Recent Works</LinkButton
      >
      <LinkButton
        href="#experience"
        class="text-base text-neutral-800"
        @click="menuOpen = false"
        >Experience</LinkButton
      >
      <LinkButton
        href="#testimonials"
        class="text-base text-neutral-800"
        @click="menuOpen = false"
        >Testimonials</LinkButton
      >
      <div class="flex flex-col gap-3 pt-2">
        <NuxtLink to="/projects">
          <Button variant="secondary" :show-icon="false" class="w-full"
            >See All Projects</Button
          >
        </NuxtLink>
        <a href="mailto:trajanopaulo@gmail.com" class="w-full">
          <Button variant="primary" :show-icon="false" class="w-full"
            >Work With Me</Button
          >
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { scrolled } = defineProps<{ scrolled: boolean }>();
const menuOpen = ref(false);
</script>
