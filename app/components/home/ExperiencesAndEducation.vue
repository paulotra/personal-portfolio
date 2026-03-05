<template>
  <div class="relative flex flex-col items-center gap-[61px]">

    <!-- Decorative: skateboard (top-right) -->
    <div class="absolute -top-[260px] right-[-50px] rotate-[7.9deg] pointer-events-none">
      <img src="/images/experience/skateboard.png" alt="" aria-hidden="true" class="w-[315px] object-cover" />
    </div>

    <!-- Decorative: "what i've been through" (top-right) -->
    <div class="absolute top-[0] right-[-72px] rotate-[20.2deg] pointer-events-none">
      <p class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center whitespace-nowrap">
        what i've<br />been through
      </p>
    </div>

    <!-- Tab Switcher -->
    <div class="relative bg-white border border-neutral-400 flex gap-5 items-start p-6 rounded-2xl z-10 shadow-[inset_3px_3px_7px_0px_rgba(136,150,163,0.12),inset_-3px_-3px_7px_0px_white]">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="[
          'px-8 py-5 rounded w-[200px] font-sans font-medium text-xl leading-5 whitespace-nowrap transition-colors',
          activeTab === tab
            ? 'bg-primary-100 border border-primary-300 text-primary-500'
            : 'bg-neutral-200 border border-neutral-400 text-neutral-600',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Timeline body -->
    <div class="relative flex items-center justify-between w-full">

      <!-- Background glow -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-10 w-[804px] h-[750px] pointer-events-none">
        <img src="/images/experience/glow.svg" alt="" aria-hidden="true" class="absolute inset-[-21.33%_-19.9%] w-[140%] h-[140%] max-w-none" />
      </div>

      <!-- Timeline connector lines (SVG overlay) -->
      <img
        src="/images/experience/timeline-lines.svg"
        alt=""
        aria-hidden="true"
        class="absolute left-[450px] top-[21px] w-[639px] h-[666px] pointer-events-none z-0"
      />

      <!-- LEFT column: right-aligned entries, gap-130 -->
      <div class="flex flex-col gap-[130px] items-end text-right w-[432px] shrink-0 relative z-10 -mt-3">
        <!-- RallyHR -->
        <div class="flex flex-col gap-5 h-auto items-end w-full">
          <div class="flex flex-col gap-1 items-end w-full">
            <p class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black">RallyHR</p>
            <p class="font-sans font-bold text-3xl leading-10 text-black w-full">Front End Lead</p>
          </div>
          <p class="font-sans font-normal text-default leading-6 text-black w-full">
            Turning design into fast, scalable, production-ready applications.
          </p>
        </div>
        <!-- ProphetX -->
        <div class="flex flex-col gap-5 h-auto items-end w-full">
          <div class="flex flex-col gap-1 items-end w-full">
            <p class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black">ProphetX</p>
            <p class="font-sans font-bold text-3xl leading-10 text-black w-full">Front End Lead + Engr Manager</p>
          </div>
          <p class="font-sans font-normal text-default leading-6 text-black w-full">
            Turning design into fast, scalable, production-ready applications.
          </p>
        </div>
      </div>

      <!-- CENTER group: year column + right text column -->
      <div class="flex items-center gap-[114px] relative z-10">

        <!-- Year column with vertical line -->
        <div class="relative flex flex-col gap-[100px] items-center w-[35px] shrink-0">
          <!-- Gray background line -->
          <div class="absolute left-[13px] top-0 w-[6px] h-[698px] bg-neutral-300" />
          <!-- Blue progress line (2015–2016) -->
          <div class="absolute left-[13px] top-0 w-[6px] h-[147px] bg-primary-500" />

          <!-- Year labels -->
          <div v-for="year in years" :key="year" class="bg-white flex items-center justify-center py-2 relative z-10 w-full">
            <span
              :class="[
                'font-sans font-bold text-sm text-center tracking-[0.84px] whitespace-nowrap',
                ['2015', '2016'].includes(year) ? 'text-primary-500' : 'text-black',
              ]"
            >{{ year }}</span>
          </div>
        </div>

        <!-- RIGHT text column: gap-159 between Mango and the sub-group -->
        <div class="flex flex-col gap-[159px] w-[548px] shrink-0  -mt-3">

          <!-- Mango Interactive -->
          <div class="flex flex-col gap-5 h-auto items-start w-[430px]">
            <div class="flex flex-col gap-1 items-start w-full">
              <p class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black">Mango Interactive</p>
              <p class="font-sans font-bold text-3xl leading-10 text-black w-full">Front End Developer</p>
            </div>
            <p class="font-sans font-normal text-default leading-6 text-black w-full">
              Turning design into fast, scalable, production-ready applications.
            </p>
          </div>

          <!-- Sub-group: Aversafe + Freelance, gap-46 -->
          <div class="flex flex-col gap-[46px] items-start w-full">

            <!-- Aversafe -->
            <div class="flex flex-col gap-5 items-start w-[228px]">
              <div class="flex flex-col gap-1 items-start w-full">
                <p class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black">Aversafe</p>
                <p class="font-sans font-bold text-3xl leading-10 text-black w-full">Front End Lead</p>
              </div>
              <p class="font-sans font-normal text-default leading-6 text-black w-full">
                Turning design into fast, scalable, production-ready applications.
              </p>
            </div>

            <!-- Freelance (shifted right with pl-299) -->
            <div class="flex flex-col gap-5 items-start w-full pl-[299px]">
              <div class="flex flex-col gap-1 items-start w-full">
                <p class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black">Freelance</p>
                <p class="font-sans font-bold text-3xl leading-10 text-black whitespace-nowrap">Brand + UI Design</p>
              </div>
              <p class="font-sans font-normal text-default leading-6 text-black w-full">
                Turning design into fast, scalable, production-ready applications.
              </p>
            </div>

          </div>
        </div>
      </div>

      <!-- Decorative: "don't just learn, experience!" (bottom-left) -->
      <div class="absolute left-[100px] bottom-[-100px] -rotate-[15.86deg] pointer-events-none">
        <p class="font-['Gochi_Hand'] text-[30px] leading-normal text-primary-500 text-center whitespace-nowrap">
          don't just learn,<br />experience!
        </p>
      </div>

      <!-- Decorative: keyboard (bottom-left) -->
      <div class="absolute -left-[290px] bottom-[-150px] rotate-[7.18deg] pointer-events-none">
        <img src="/images/experience/keyboard.png" alt="" aria-hidden="true" class="w-[428px] object-cover" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const tabs = ['Experiences', 'Education'] as const
const activeTab = ref<'Experiences' | 'Education'>('Experiences')
const years = ['2015', '2016', '2017', '2018', '2026', 'NOW']
</script>
