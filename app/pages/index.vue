<template>
  <!-- Hero Section -->
  <section
    class="bg-neutral-100 z-10 relative lg:min-h-[900px] min-h-[680px] flex flex-col overflow-hidden"
  >
    <div class="max-w-[1360px] mx-auto px-6 relative flex-1 w-full">
      <div class="hidden lg:block">
        <!-- Logo + Branding badge with animated tracking line (up then right) -->
        <div
          class="absolute right-[40px] top-[152px] hidden lg:flex flex-row items-start"
        >
          <svg
            width="94"
            height="44"
            viewBox="0 0 94 44"
            fill="none"
            overflow="visible"
          >
            <!-- Dashed path: start bottom-left, go up, then right -->
            <path
              d="M0 44 V0 H94"
              stroke="#9751fb"
              stroke-width="1.5"
              stroke-dasharray="5 4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Cover path that wipes away to reveal dashed line -->
            <path
              d="M0 44 V0 H94"
              stroke="#f5f5f5"
              stroke-width="4"
              stroke-dasharray="138 138"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              class="tracking-cover-brand"
            />
          </svg>
          <div class="tracking-badge-reveal-brand relative -top-[16px]">
            <Badge variant="brand">Logo + Branding</Badge>
          </div>
        </div>

        <!-- UI+UX badge with animated tracking line annotation -->
        <div
          class="absolute right-[64px] top-[300px] hidden lg:flex flex-col items-end"
        >
          <svg
            width="120"
            height="44"
            viewBox="0 0 120 44"
            fill="none"
            overflow="visible"
            class="mr-[14px]"
          >
            <!-- Dashed path (visual) -->
            <path
              d="M0 2 H116 V44"
              stroke="#0c8ce9"
              stroke-width="1.5"
              stroke-dasharray="5 4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Cover path that wipes away to reveal dashed line -->
            <path
              d="M0 2 H116 V44"
              stroke="#f5f5f5"
              stroke-width="4"
              stroke-dasharray="158 158"
              stroke-linecap="butt"
              class="tracking-cover"
            />
          </svg>
          <div class="tracking-badge-reveal relative left-[20px]">
            <Badge variant="ui">UI + UX</Badge>
          </div>
        </div>
        <!-- FE Development badge with animated tracking line (right to left then down to up) -->
        <div
          class="absolute right-[372px] top-[300px] hidden lg:flex flex-col items-start"
        >
          <div class="tracking-badge-reveal-dev relative -left-[66px]">
            <Badge variant="dev">FE Development</Badge>
          </div>
          <svg
            width="116"
            height="36"
            viewBox="0 0 116 36"
            fill="none"
            overflow="visible"
          >
            <!-- Dashed path: start bottom-right, go left, then up -->
            <path
              d="M116 36 H0 V0"
              stroke="#2a9f64"
              stroke-width="1.5"
              stroke-dasharray="5 4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Cover path that wipes away to reveal dashed line -->
            <path
              d="M116 36 H0 V0"
              stroke="#f5f5f5"
              stroke-width="4"
              stroke-dasharray="152 152"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              class="tracking-cover-dev"
            />
          </svg>
        </div>
      </div>

      <img
        src="/images/me.webp"
        class="absolute bottom-[0px] -right-[420px] max-w-none hidden lg:block animate-slideUp"
        width="1630px"
        alt="Hero Image"
      />

      <!-- Hero Content -->
      <div
        class="flex flex-col gap-3 pt-[160px] lg:pt-[260px] lg:max-w-[662px]"
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
            <span :class="currentColor">{{ displayedText }}</span>
            <span
              class="inline-block w-[1px] h-[0.9em] ml-[1px] align-middle relative -top-1"
              :class="[
                currentColor.replace('text-', 'bg-'),
                cursorVisible ? 'opacity-75' : 'opacity-0',
              ]"
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
  <Content class="relative z-20 -mt-16">
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
const wordColors: Record<string, string> = {
  "Brand Designer": "text-secondary-500",
  "UI UX Designer": "text-primary-500",
  "FE Developer": "text-green-500",
};
const typeSpeed = 80;
const deleteSpeed = 50;
const pauseDuration = 1000;

const displayedText = ref("");
const cursorVisible = ref(true);

const wordIndex = ref(0);
const currentColor = computed(
  () =>
    wordColors[words[wordIndex.value % words.length]!] ?? "text-primary-500",
);

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typewriter() {
  while (true) {
    const word = words[wordIndex.value % words.length]!;

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
    wordIndex.value++;
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
