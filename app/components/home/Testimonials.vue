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
                :src="t.avatar"
                :alt="t.name"
                class="size-[60px] rounded-full object-cover shrink-0"
              />
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
                :src="t.avatar"
                :alt="t.name"
                class="size-[60px] rounded-full object-cover shrink-0"
              />
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
    quote: "Patient, understanding to work with, Paulo is able to translate ideation into excellent design and perfect execution.",
    name: "Daniël Klabbers",
    role: "Co-founder of Floxum",
    avatar: "/images/people/daniel-klabbers.png",
  },
  {
    quote: "Incredibly detail-oriented and proactive. Paulo always delivered beyond expectations.",
    name: "Lena de Vries",
    role: "Founder of Vloer Offerte",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Paulo doesn’t make things pretty. He makes them work. Our clients open our apps and immediately know what to do. That’s not a coincidence.",
    name: "Job Wiegant",
    role: "CEO of RocketFlow",
    avatar: "/images/people/job.jpeg",
  },
  {
    quote: "Paulo transformed our brand identity and built the product from the ground up. Highly recommend.",
    name: "Alex Fontaine",
    role: "CEO of Cloudmazing",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Paulo has a rare combination of design sense and engineering skill. He elevated our entire frontend.",
    name: "Marco Visser",
    role: "CTO of Aversafe",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "The attention to both design and code quality is something I rarely see. Paulo is the real deal.",
    name: "Thomas Bruin",
    role: "Founder of 123declaratie",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Working with Paulo felt effortless. He understood our vision instantly and delivered a product that exceeded what we imagined.",
    name: "Sophie van den Berg",
    role: "Product Lead at ProphetX",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Paulo took ownership from day one. Clean code, sharp design, zero hand-holding required.",
    name: "Nina Cortez",
    role: "CTO of Anchor Capital",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Paulo brought structure and clarity to a messy design process. The end result was a product our whole team is proud of.",
    name: "Ravi Mehta",
    role: "Co-founder of Tenancy",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Our users love the new interface. Paulo nailed the balance between aesthetics and usability.",
    name: "David Huang",
    role: "Head of Product at Extiverse",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "He doesn’t just deliver designs — he delivers solutions. Every pixel Paulo ships has a reason behind it.",
    name: "Kevin Hartman",
    role: "Founder of Blomstra",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Paulo was fast, communicative, and sharp. He caught problems before they became problems.",
    name: "Yuki Tanaka",
    role: "Lead Designer at Ocam",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "The rebrand Paulo delivered gave us the credibility boost we needed to close enterprise deals.",
    name: "Lars Henriksen",
    role: "CEO of Well Played",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Collaboration with Paulo is seamless. He reads between the lines and ships exactly what you envisioned.",
    name: "Fatima Osei",
    role: "CPO of Tickets",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Paulo elevated our product from a prototype to something we’re genuinely proud to show investors.",
    name: "Ben Strickland",
    role: "Co-founder of Int Dashboard",
    avatar: "/images/testimonials/avatar-job.svg",
  },
  {
    quote: "Top-tier craft across both design and code. Paulo is the kind of developer every startup needs.",
    name: "Mia Johansson",
    role: "Head of Engineering at Coach Talk",
    avatar: "/images/testimonials/avatar-job.svg",
  },
];

const odd = testimonials.filter((_, i) => i % 2 === 0);
const even = testimonials.filter((_, i) => i % 2 === 1);

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
