<template>
  <!-- Navbar -->
  <Navigation :scrolled="true" class="max-w-[1360px] relative top-[12px]" />
  <Navigation :scrolled="scrolled" class="fixed bg-white top-0 shadow-soft-y" />
  <!-- Hero Section -->
  <section class="bg-neutral-100 z-10 relative lg:min-h-[800px] min-h-[520px]">
    <div class="max-w-[1360px] mx-auto px-6">
      <!-- Hero Content -->
      <div
        class="flex flex-col gap-3 pt-[120px] lg:pt-[260px] lg:max-w-[662px]"
      >
        <div
          class="flex flex-col gap-2 relative animate-slideRight [animation-delay:240ms]"
        >
          <!-- Hi Guys! -->
          <div class="-rotate-6 inline-block absolute -top-10 left-0">
            <span
              class="font-['Gochi_Hand'] text-[50px] leading-10 text-neutral-700 whitespace-nowrap"
            >
              Hi Guys!
            </span>
          </div>
          <!-- Headline -->
          <Headline
            class="font-sans font-black leading-heading uppercase text-black max-w-[676px] lg:min-h-[144px] min-h-[252px]"
          >
            I'm paulo Trajano, <br />A
            <span class="text-primary-500">{{ displayedText }}</span>
            <span
              class="inline-block w-[1px] h-[0.9em] bg-primary-500 ml-[1px] align-middle relative -top-1"
              :class="cursorVisible ? 'opacity-75' : 'opacity-0'"
            />
          </Headline>
        </div>
        <!-- Subtitle -->
        <p
          class="text-xl text-black font-normal leading-[34px] animate-slideRight [animation-delay:480ms]"
        >
          Specialized in web design, branding, and frontend development.
        </p>
      </div>

      <!-- Location -->
      <div
        class="flex flex-col gap-3 lg:absolute py-12 lg:bottom-[60px] animate-slideRight [animation-delay:720ms]"
      >
        <div class="bg-neutral-400 h-[2px] w-[166px]" />
        <p
          class="text-xs font-medium text-neutral-600 tracking-[1.2px] uppercase leading-7"
        >
          Butuan City 8600<br />
          UTC+8 - Philippines
        </p>
      </div>
    </div>
  </section>

  <!-- Content -->
  <Content class="relative z-20">
    <HomeCapabilities
      id="services"
      class="mt-[60px] lg:mt-[135px] scroll-mt-[240px]"
    />
    <HomeRecentWorks
      id="works"
      class="mt-[240px] lg:mt-[344.5px] scroll-mt-[120px]"
    />
    <HomeExperiencesAndEducation
      id="experience"
      class="mt-[260px] scroll-mt-[120px]"
    />
    <HomeTestimonials id="testimonials" class="mt-[320px] scroll-mt-[120px]" />
  </Content>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" });
const words = ["Brand Designer", "UI UX Designer", "FE Developer"];
const typeSpeed = 80;
const deleteSpeed = 50;
const pauseDuration = 1000;

const displayedText = ref("");
const cursorVisible = ref(true);

let wordIndex = 0;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typewriter() {
  while (true) {
    const word = words[wordIndex % words.length]!;

    // Type out
    for (let i = 0; i <= word.length; i++) {
      displayedText.value = word.slice(0, i);
      await sleep(typeSpeed);
    }

    // Pause
    await sleep(pauseDuration);

    // Delete
    for (let i = word.length; i >= 0; i--) {
      displayedText.value = word.slice(0, i);
      await sleep(deleteSpeed);
    }

    await sleep(200);
    wordIndex++;
  }
}

// Blinking cursor
let cursorInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 530);
  typewriter();
});
onUnmounted(() => clearInterval(cursorInterval));
</script>
