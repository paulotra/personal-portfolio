<template>
  <!-- Hero Section -->
  <section
    ref="heroSectionRef"
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
        ref="heroImageRef"
        src="/images/me.webp"
        class="absolute bottom-[-30px] -right-[420px] max-w-none hidden lg:block"
        width="1630px"
        alt="Hero Image"
      />

      <!-- Hero Content -->
      <div
        class="flex flex-col gap-3 pt-[160px] lg:pt-[260px] lg:max-w-[662px] text-center md:text-left"
      >
        <div class="flex flex-col gap-2 relative">
          <!-- Hi Guys! -->
          <div class="-rotate-6 inline-block absolute -top-10 left-0">
            <HandwrittenText
              text="Hi Guys!"
              class="font-['Gochi_Hand'] text-[50px] leading-10 text-neutral-700 whitespace-nowrap"
              :scroll-trigger="false"
              :delay="0.6"
              :stagger="0.06"
            />
          </div>
          <!-- Headline -->
          <Headline
            ref="headlineRef"
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
          ref="subtitleRef"
          class="text-xl text-black font-normal leading-[34px]"
        >
          Specialized in web design, branding, and frontend development.
        </p>
      </div>

      <!-- Location -->
      <div
        ref="locationRef"
        class="flex flex-col gap-3 lg:absolute py-12 lg:bottom-[60px] text-center md:text-left"
      >
        <div class="bg-neutral-400 h-[2px] w-[166px] mx-auto md:mx-0" />
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

useSeoMeta({
  title: "Paulo Trajano — Frontend Developer & Designer",
  description:
    "Personal portfolio of Paulo, a frontend developer building modern web experiences.",
  ogTitle: "Paulo — Frontend Developer",
  ogDescription:
    "Personal portfolio of Paulo, a frontend developer building modern web experiences.",
  ogImage: "https://paulotrajano.me/images/og-image.png",
  ogUrl: "https://paulotrajano.me",
  twitterCard: "summary_large_image",
  twitterImage: "https://paulotrajano.me/images/og-image.png",
});

definePageMeta({ layout: "default" });

// Refs for GSAP targets
const heroSectionRef = ref<HTMLElement | null>(null);
const heroImageRef = ref<HTMLElement | null>(null);
const headlineRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const locationRef = ref<HTMLElement | null>(null);

// Typewriter
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
    for (let i = 0; i <= word.length; i++) {
      displayedText.value = word.slice(0, i);
      await sleep(typeSpeed);
    }
    await sleep(pauseDuration);
    for (let i = word.length; i >= 0; i--) {
      displayedText.value = word.slice(0, i);
      await sleep(deleteSpeed);
    }
    await sleep(200);
    wordIndex.value++;
  }
}

let cursorInterval: ReturnType<typeof setInterval>;
let gsapCtx: gsap.Context | null = null;

onMounted(() => {
  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 530);
  typewriter();

  gsapCtx = gsap.context(() => {
    // Hero entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headlineRef.value, { y: 60, opacity: 0, duration: 0.8 })
      .from(subtitleRef.value, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(locationRef.value, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");

    // Hero image parallax on scroll
    if (heroImageRef.value && heroSectionRef.value) {
      gsap.to(heroImageRef.value, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.value,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }
  });
});

onUnmounted(() => {
  clearInterval(cursorInterval);
  gsapCtx?.revert();
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
