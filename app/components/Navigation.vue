<template>
  <header
    class="z-50 w-full mx-auto transition-transform duration-300"
    :class="scrolled ? 'translate-y-0' : '-translate-y-full'"
  >
    <nav class="flex items-center justify-between mx-auto px-6 py-4 max-w-full">
      <img src="/images/pt-logo.svg" alt="PT Logo" class="h-[22px] w-[24px]" />
      <div class="flex items-center gap-10">
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
          <Button variant="secondary" :show-icon="false"
            >See All Projects</Button
          >
          <a href="mailto:trajanopaulo@gmail.com">
            <Button variant="primary" :show-icon="false">Work With Me</Button>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { scrolled } = defineProps<{ scrolled: boolean }>();
</script>
