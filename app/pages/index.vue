<template>
  <div class="bg-neutral-100">
    <div class="min-h-[1045px]">
      <!-- Navbar -->
      <Navigation :scrolled="true" class="max-w-[1360px]" />
      <Navigation
        :scrolled="scrolled"
        class="fixed bg-white top-0 shadow-soft-y"
      />

      <!-- Hero Section -->
      <section class="bg-neutral-100 z-10 relative min-h-[944px]">
        <div class="max-w-[1360px] mx-auto px-6">
          <!-- Hero Content -->
          <div class="flex flex-col gap-3 pt-[260px] max-w-[662px]">
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
              <h1
                class="font-sans font-black text-[60px] leading-heading uppercase text-black w-[676px] min-h-[144px]"
              >
                I'm paulo Trajano, <br />A
                <span class="text-primary-500">{{ displayedText }}</span>
                <span
                  class="inline-block w-[1px] h-[0.9em] bg-primary-500 ml-[1px] align-middle relative -top-1"
                  :class="cursorVisible ? 'opacity-75' : 'opacity-0'"
                />
              </h1>
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
            class="flex flex-col gap-3 absolute bottom-[60px] animate-slideRight [animation-delay:720ms]"
          >
            <div class="bg-neutral-400 h-[2px] w-[166px]" />
            <p
              class="text-xs font-medium text-neutral-600 tracking-[1.2px] uppercase leading-7"
            >
              Butuan City 8600<br />
              Philippines
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- Content -->
    <Content ref="contentRef" class="relative z-20">
      <HomeCapabilities id="services" class="mt-[135px] scroll-mt-[240px]" />
      <HomeRecentWorks id="works" class="mt-[344.5px] scroll-mt-[120px]" />
      <HomeExperiencesAndEducation
        id="experience"
        class="mt-[260px] scroll-mt-[120px]"
      />
      <HomeTestimonials
        id="testimonials"
        class="mt-[320px] scroll-mt-[120px]"
      />
    </Content>

    <!-- Footer CTA Section -->
    <section class="relative bg-white">
      <div class="bg-neutral-100 relative">
        <div
          class="absolute -top-10 left-0 w-full h-[84px] bg-neutral-100 rounded-[80px]"
        />

        <div class="max-w-[1362px] mx-auto pt-[100px] pb-[60px]">
          <div class="flex gap-10 items-start">
            <!-- Left: CTA + Contacts -->
            <div class="flex flex-col gap-6 flex-1">
              <div class="flex flex-col gap-1">
                <h2
                  class="font-sans font-black text-[60px] leading-heading uppercase text-black"
                >
                  Let's build something great
                  <span class="text-primary-500">together</span>
                </h2>
                <p class="text-2xl text-neutral-800 font-normal leading-10">
                  Open to full-time, part-time roles and product collaborations.
                </p>
              </div>
              <div class="flex gap-6">
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                  >
                    EMAIL
                  </p>
                  <p
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    <LinkButton
                      href="mailto:trajanopaulo@gmail.com"
                      class="text-default text-neutral-800 font-normal leading-7"
                    >
                      trajanopaulo@gmail.com
                    </LinkButton>
                  </p>
                </div>
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                  >
                    CONTACT
                  </p>
                  <p
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    <LinkButton
                      href="https://www.linkedin.com/in/paulo-trajano-53aa56109/"
                      target="_blank"
                      class="text-default text-neutral-800 font-normal leading-7"
                    >
                      LinkedIn Profile
                    </LinkButton>
                  </p>
                </div>
              </div>
            </div>

            <!-- Right: Links -->
            <div class="flex flex-col gap-10 w-1/3">
              <!-- Portfolios -->
              <div class="flex flex-col gap-3">
                <p
                  class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                >
                  PORTFOLIOS
                </p>
                <div class="bg-neutral-400 h-[2px] w-full" />
                <div class="flex flex-col gap-2">
                  <LinkButton
                    href="https://www.behance.net/paulotrajano1"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Behance
                  </LinkButton>
                  <LinkButton
                    href="https://dribbble.com/paulotra"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Dribbble
                  </LinkButton>
                </div>
              </div>
              <!-- Socials -->
              <div class="flex flex-col gap-3">
                <p
                  class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                >
                  SOCIALS
                </p>
                <div class="bg-neutral-400 h-[2px] w-full" />
                <div class="flex flex-col gap-2">
                  <LinkButton
                    href="https://www.instagram.com/paulo_tra/"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Instagram
                  </LinkButton>
                  <LinkButton
                    href="https://www.facebook.com/paulotra/"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Facebook
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Bar -->
    <div class="bg-black relative">
      <div
        class="absolute -top-10 left-0 w-full h-[84px] bg-neutral-100 rounded-[80px]"
      />
      <div class="max-w-[1360px] mx-auto pb-5 pt-[62px]">
        <p class="text-sm text-white font-normal leading-7">
          © 2026 Paulo Trajano - Designer & Frontend Developer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

// Sticky nav
const scrolled = ref(false);
const contentRef = ref<{ $el: HTMLElement } | null>(null);

// Blinking cursor
let cursorInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  const el = contentRef.value?.$el ?? null;
  const onScroll = () => {
    if (!el) return;
    scrolled.value = el.getBoundingClientRect().top <= 400;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 530);
  typewriter();
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
onUnmounted(() => clearInterval(cursorInterval));
</script>
