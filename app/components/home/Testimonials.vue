<template>
  <div
    ref="sectionRef"
    class="relative flex flex-col gap-12 items-center lg:-mx-20"
  >
    <!-- Title -->
    <div
      :class="
        visible ? 'animate-slideDown [animation-delay:400ms]' : 'opacity-0'
      "
      class="absolute lg:right-[200px] right-[-40px] lg:top-[-80px] top-[-90px] w-[246px] h-[230px] rotate-[23.35deg] pointer-events-none"
    >
      <p
        class="font-['Gochi_Hand'] text-[30px] leading-normal text-primary-500 text-center whitespace-nowrap relative z-10"
      >
        Built on Trust<br />Backed by Results
      </p>
    </div>

    <h2
      :class="visible ? 'animate-slideDown' : 'opacity-0'"
      class="font-sans font-black text-4xl leading-normal uppercase text-black text-center lg:text-left"
    >
      What My Clients Say
    </h2>

    <!-- Slider -->
    <div
      :class="visible ? 'animate-slideUp [animation-delay:80ms]' : 'opacity-0'"
      class="relative w-full overflow-hidden slider-mask group"
    >
      <div class="flex flex-col gap-10">
        <!-- Row 1: scroll left -->
        <div
          class="flex gap-10 w-max marquee-left group-hover:[animation-play-state:paused]"
        >
          <div
            v-for="(t, i) in row1"
            :key="`r1-${i}`"
            class="bg-white border border-neutral-400 flex flex-col gap-5 items-start px-10 py-8 w-[400px] lg:w-[546px] shrink-0"
          >
            <div class="flex flex-col gap-4 w-full">
              <img
                src="/images/testimonials/quote-left.svg"
                alt=""
                aria-hidden="true"
                class="w-[35px] h-[40px]"
              />
              <p class="font-sans font-normal text-base leading-6 text-black">
                {{ t.quote }}
              </p>
            </div>
            <div class="flex gap-5 items-center w-full">
              <img
                v-if="t.avatar"
                :src="t.avatar"
                :alt="t.name"
                class="size-[60px] rounded-full object-cover shrink-0"
              />
              <div
                v-else
                class="size-[60px] rounded-full bg-primary-500 shrink-0 flex items-center justify-center"
              >
                <span class="font-sans font-bold text-sm text-white">{{
                  initials(t.name)
                }}</span>
              </div>
              <div class="flex flex-col gap-0.5">
                <p
                  class="font-sans font-medium text-lg leading-6 text-black whitespace-nowrap"
                >
                  {{ t.name }}
                </p>
                <p
                  class="font-sans font-normal text-base leading-6 text-neutral-700 whitespace-nowrap"
                >
                  {{ t.role }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: scroll right -->
        <div
          class="flex gap-10 w-max marquee-right group-hover:[animation-play-state:paused]"
        >
          <div
            v-for="(t, i) in row2"
            :key="`r2-${i}`"
            class="bg-white border border-neutral-400 flex flex-col gap-5 items-start px-10 py-8 w-[400px] lg:w-[546px] shrink-0"
          >
            <div class="flex flex-col gap-4 w-full">
              <img
                src="/images/testimonials/quote-left.svg"
                alt=""
                aria-hidden="true"
                class="w-[35px] h-[40px]"
              />
              <p class="font-sans font-normal text-base leading-6 text-black">
                {{ t.quote }}
              </p>
            </div>
            <div class="flex gap-5 items-center w-full">
              <img
                v-if="t.avatar"
                :src="t.avatar"
                :alt="t.name"
                class="size-[60px] rounded-full object-cover shrink-0"
              />
              <div
                v-else
                class="size-[60px] rounded-full bg-primary-500 shrink-0 flex items-center justify-center"
              >
                <span class="font-sans font-bold text-sm text-white">{{
                  initials(t.name)
                }}</span>
              </div>
              <div class="flex flex-col gap-0.5">
                <p
                  class="font-sans font-medium text-lg leading-6 text-black whitespace-nowrap"
                >
                  {{ t.name }}
                </p>
                <p
                  class="font-sans font-normal text-base leading-6 text-neutral-700 whitespace-nowrap"
                >
                  {{ t.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInView } from "~/composables/useInView";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView();

const testimonials = [
  {
    quote:
      "Patient, understanding to work with, Paulo is able to translate ideation into excellent design and perfect execution.",
    name: "Daniël Klabbers",
    role: "Co-founder of Floxum",
    avatar: "/images/people/daniel-klabbers.png",
  },
  {
    quote:
      "Paulo was instrumental in getting our platform set up properly from the very beginning. He is highly skilled and delivers exceptional work on time. Having him handle the technical heavy lifting allowed us to focus on business operations and growth. ",
    name: "Zach La Motta",
    role: "Founder & Managing Partner at LFF Industrial ",
    avatar: null,
  },
  {
    quote:
      "Paulo doesn’t make things pretty. He makes them work. Our clients open our apps and immediately know what to do. That’s not a coincidence.",
    name: "Job Wiegant",
    role: "CEO of RocketFlow",
    avatar: "/images/people/job.jpeg",
  },
  {
    quote:
      "I worked with Paulo while we were developing the early versions of our platform. He contributed strong design thinking and was effective at turning product concepts into usable prototypes and early engineering builds. His combination of product design instincts and hands-on technical capability helped us move quickly during the early stages of development.",
    name: "Jake Benzaquen",
    role: "Co-founder of ProphetX",
    avatar: "/images/people/jake.jpeg",
  },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

const valid = testimonials.filter((t) => t.name && t.quote);
const odd = valid.filter((_, i) => i % 2 === 0);
const even = valid.filter((_, i) => i % 2 === 1);

const row1 = [...odd, ...odd];
const row2 = [...even, ...even];
</script>

<style scoped>
.slider-mask {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 12%,
    black 88%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 12%,
    black 88%,
    transparent
  );
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.marquee-left {
  animation: marquee-left 320s linear infinite;
}

.marquee-right {
  animation: marquee-right 320s linear infinite;
}
</style>
