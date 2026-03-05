<template>
  <div class="relative flex flex-col gap-12 items-center">

    <!-- Decorative: glow (behind card, right side) -->
    <div class="absolute right-[160px] bottom-[-100px] w-[246px] h-[230px] -rotate-[20.35deg] pointer-events-none">
      <img src="/images/testimonials/glow.svg" alt="" aria-hidden="true" class="absolute inset-[-70%_-65%] w-[240%] h-[240%] max-w-none" />
      <p class="font-['Gochi_Hand'] text-[30px] leading-normal text-primary-500 text-center whitespace-nowrap relative z-10">
        Built on Trust<br />Backed by Results
      </p>
    </div>

    <!-- Decorative: guitar (right side) -->
    <!-- <div class="absolute right-[-60px] top-[20px] rotate-[11.69deg] pointer-events-none">
      <img src="/images/testimonials/guitar.png" alt="" aria-hidden="true" class="w-[370px] object-cover" />
    </div> -->

    <!-- Header + Card + Dots -->
    <div class="flex flex-col gap-12 items-center w-full">

      <!-- Title -->
      <h2 class="font-sans font-black text-4xl leading-normal uppercase text-black whitespace-nowrap">
        What My Clients Say
      </h2>

      <!-- Testimonial Card -->
      <div class="bg-white border border-neutral-400 flex flex-col gap-5 items-start px-10 py-8 w-[742px]">
        <!-- Quote + Text -->
        <div class="flex flex-col gap-4 w-full">
          <img src="/images/testimonials/quote-left.svg" alt="" aria-hidden="true" class="w-[35px] h-[40px]" />
          <p class="font-sans font-normal text-default leading-6 text-black">
            {{ testimonials[activeIndex]!.quote }}
          </p>
        </div>
        <!-- Author -->
        <div class="flex gap-5 items-center w-full">
          <img
            :src="testimonials[activeIndex]!.avatar"
            :alt="testimonials[activeIndex]!.name"
            class="size-[60px] rounded-full object-cover shrink-0"
          />
          <div class="flex flex-col gap-0.5">
            <p class="font-sans font-medium text-lg leading-6 text-black whitespace-nowrap">
              {{ testimonials[activeIndex]!.name }}
            </p>
            <p class="font-sans font-normal text-default leading-6 text-neutral-700 whitespace-nowrap">
              {{ testimonials[activeIndex]!.role }}
            </p>
          </div>
        </div>
      </div>

      <!-- Pagination Dots -->
      <div class="flex items-center gap-2">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          @click="activeIndex = i"
          :class="[
            'rounded-full transition-all',
            activeIndex === i
              ? 'w-4 h-4 bg-primary-500'
              : 'w-3 h-3 bg-neutral-400',
          ]"
          :aria-label="`Go to testimonial ${i + 1}`"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const activeIndex = ref(0)

const testimonials = [
  {
    quote: "Paulo brings clarity to complex projects. He doesn't just build features — he improves the entire product experience.",
    name: 'Job Weigant',
    role: 'CEO of Rocket Flow',
    avatar: '/images/testimonials/avatar-job.svg',
  },
  {
    quote: "Working with Paulo was seamless. His ability to translate design into pixel-perfect code is unmatched.",
    name: 'Sarah Mitchell',
    role: 'Product Manager at ProphetX',
    avatar: '/images/testimonials/avatar-job.svg',
  },
  {
    quote: "Paulo has a rare combination of design sense and engineering skill. He elevated our entire frontend.",
    name: 'Marco Visser',
    role: 'CTO of Aversafe',
    avatar: '/images/testimonials/avatar-job.svg',
  },
  {
    quote: "Incredibly detail-oriented and proactive. Paulo always delivered beyond expectations.",
    name: 'Lena de Vries',
    role: 'Founder of Vloer Offerte',
    avatar: '/images/testimonials/avatar-job.svg',
  },
  {
    quote: "Paulo transformed our brand identity and built the product from the ground up. Highly recommend.",
    name: 'Alex Fontaine',
    role: 'CEO of Cloudmazing',
    avatar: '/images/testimonials/avatar-job.svg',
  },
]
</script>
