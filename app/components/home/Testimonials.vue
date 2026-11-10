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
      class="relative w-full overflow-hidden slider-mask"
    >
      <div class="flex flex-col gap-10">
        <!-- Rows alternate: scroll left, right, left -->
        <div
          v-for="(row, r) in rows"
          :key="r"
          :class="r % 2 === 0 ? 'marquee-left' : 'marquee-right'"
          class="flex gap-10 w-max"
        >
          <div
            v-for="(t, i) in row"
            :key="`r${r}-${i}`"
            class="bg-white border border-neutral-400 flex flex-col gap-5 items-start px-10 py-8 w-[400px] lg:w-[546px] shrink-0"
          >
            <div class="flex flex-col gap-4 w-full">
              <img
                src="/images/testimonials/quote-left.svg"
                alt=""
                aria-hidden="true"
                class="w-[35px] h-[40px]"
              />
              <div class="flex flex-col">
                <p
                  :ref="(el) => setRef(el as HTMLElement, `${r}-${i}`)"
                  :class="expanded.has(`${r}-${i}`) ? '' : 'line-clamp-2'"
                  class="font-sans font-normal text-base leading-6 text-black whitespace-pre-line"
                >
                  {{ t.quote }}
                </p>
                <button
                  v-if="overflowing.has(`${r}-${i}`) && !expanded.has(`${r}-${i}`)"
                  class="font-sans underline text-base mt-2 text-primary-500 text-left"
                  @click.stop="expanded = new Set(expanded.add(`${r}-${i}`))"
                >
                  Read more
                </button>
              </div>
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
import { ref, onMounted, nextTick } from "vue";
import { useInView } from "~/composables/useInView";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView();

const testimonials = [
  {
    quote: `I’ve worked with Paulo for more than a decade across multiple companies, and he’s one of those engineers you want on every team you build.\n\nHis frontend work, especially with Vue, is excellent, but what really stands out is his attention to detail and care for the user experience. He sweats the small stuff in a way that most people don’t, and it shows in the quality of what he ships.\n\nPaulo is also a genuinely great person to work with, collaborative, dependable, and always contributing positively to the team. I’ve trusted him across multiple companies for a reason.`,
    name: "Andrew Duck",
    role: "CEO of GuardRails",
    avatar: "/images/people/andrew.jpeg",
  },
  {
    quote:
      "Patient, understanding to work with, Paulo is able to translate ideation into excellent design and perfect execution.",
    name: "Daniël Klabbers",
    role: "Co-founder of Floxum",
    avatar: "/images/people/daniel-klabbers.webp",
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
    avatar: "/images/people/job.webp",
  },
  {
    quote:
      "I worked with Paulo while we were developing the early versions of our platform. He contributed strong design thinking and was effective at turning product concepts into usable prototypes and early engineering builds. His combination of product design instincts and hands-on technical capability helped us move quickly during the early stages of development.",
    name: "Jake Benzaquen",
    role: "Co-founder of ProphetX",
    avatar: "/images/people/jake.webp",
  },
  {
    quote:
      "He has an exceptional eye for vision and design. Over time I had to adjust to a new normal where every task he turned in exceeded my expectations.",
    name: "Brianna O’Keefe",
    role: "CEO of Songoda LLC",
    avatar: "/images/people/bri.webp",
  },
  {
    quote:
      "Working with Paulo was an absolute pleasure. He brought fresh ideas, a great eye for design, and wrote clean, well-structured code. His creativity and attention to detail really elevated the entire project. I’d be happy to collaborate with him again anytime.",
    name: "Dirk Aldekamp",
    role: "CEO of Aconi",
    avatar: null,
  },
  {
    quote:
      `Paulo was fantastic to work with from start to finish. He took my original vision and elevated it far beyond what I expected while still respecting the direction, structure, and feel I wanted for the project. He was incredibly responsive, collaborative, and fast. I would send feedback, ideas, or random “what about this?” messages, and he would turn around thoughtful updates almost immediately.\n\nOur time difference honestly worked in our favor because progress seemed to happen overnight. What stood out most was how much effort he put into understanding the product, the tone, and how the landing page needed to feel, not just how it needed to look. He approached the project like a true creative partner, not someone simply completing tasks.\n\nThe final landing page feels polished, premium, clean, and intentional. The turnaround time was impressive, communication was easy throughout the project, and the entire process felt collaborative and smooth. I would absolutely work with Paulo again and highly recommend him to anyone looking for a strong designer/developer hybrid who cares deeply about execution and quality.`,
    name: "Monica Peverini",
    role: "Absovex Client",
    avatar: "/images/people/monica.webp",
  },
  {
    quote:
      "Great to work with – he meets your every need and really understands your needs and is able to adapt to changes fast.",
    name: "Lucas Crossland",
    role: "Nudge Client",
    avatar: "/images/people/lucas.webp",
  },
  {
    quote: `I worked with Paulo for three years across a range of projects — from an HR platform to a blockchain verification system. What sets him apart is his rare combination of design and frontend development skills. He’s deeply knowledgeable in Vue.js and has a strong command of HTML and CSS.\n\nIf you’re a company looking for someone who can handle both design and frontend development, you’d be lucky to have him — and you’ll save a lot by not needing to hire two separate roles. I genuinely enjoyed working with him and I’m always open to collaborating again on future projects.`,
    name: "Harlequin Doyon",
    role: "Colleague at RallyHR & ProphetX",
    avatar: "/images/people/harlequin.webp",
  },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

const expanded = ref(new Set<string>());
const overflowing = ref(new Set<string>());

const paraRefs = new Map<string, HTMLElement | null>();

function setRef(el: HTMLElement | null, key: string) {
  paraRefs.set(key, el);
}

onMounted(() => {
  nextTick(() => {
    paraRefs.forEach((el, key) => {
      if (el && el.scrollHeight > el.clientHeight) overflowing.value.add(key);
    });
    overflowing.value = new Set(overflowing.value);
  });
});

const ROW_COUNT = 3;
const valid = testimonials.filter((t) => t.name && t.quote);

// Spread reviews across the rows, then repeat each row once for a seamless loop
const rows = Array.from({ length: ROW_COUNT }, (_, r) => {
  const row = valid.filter((_, i) => i % ROW_COUNT === r);
  return [...row, ...row];
});
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
