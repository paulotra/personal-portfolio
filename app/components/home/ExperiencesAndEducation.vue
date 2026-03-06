<template>
  <div ref="sectionRef" class="relative flex flex-col items-center gap-[61px]">
    <!-- Decorative: skateboard (top-right) -->
    <div
      :class="
        visible ? 'animate-slideLeft [animation-delay:880ms]' : 'opacity-0'
      "
      class="absolute -top-[260px] right-[-50px] rotate-[7.9deg] pointer-events-none"
    >
      <img
        src="/images/experience/skateboard.png"
        alt=""
        aria-hidden="true"
        class="w-[315px] object-cover"
      />
    </div>

    <!-- Decorative: "what i've been through" (top-right) -->
    <div
      :class="
        visible ? 'animate-slideLeft [animation-delay:800ms]' : 'opacity-0'
      "
      class="absolute top-[0] right-[-72px] rotate-[20.2deg] pointer-events-none"
    >
      <p
        class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center whitespace-nowrap"
      >
        what i've<br />been through
      </p>
    </div>

    <!-- Tab Switcher -->
    <div
      :class="visible ? 'animate-slideDown' : 'opacity-0'"
      class="relative bg-white border border-neutral-400 flex gap-5 items-start p-6 rounded-2xl z-10 shadow-[inset_3px_3px_7px_0px_rgba(136,150,163,0.12),inset_-3px_-3px_7px_0px_white]"
    >
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
    <div
      ref="timelineBodyRef"
      class="relative flex items-center justify-between w-full"
    >
      <!-- Background glow -->
      <div
        :class="
          visible ? 'animate-slideDown [animation-delay:80ms]' : 'opacity-0'
        "
        class="absolute left-1/2 -translate-x-1/2 -top-10 w-[804px] h-[750px] pointer-events-none"
      >
        <img
          src="/images/experience/glow.svg"
          alt=""
          aria-hidden="true"
          class="absolute inset-[-21.33%_-19.9%] w-[140%] h-[140%] max-w-none"
        />
      </div>

      <!-- Timeline connector lines (SVG overlay) -->
      <img
        src="/images/experience/timeline-lines.svg"
        alt=""
        aria-hidden="true"
        :class="
          visible ? 'animate-slideDown [animation-delay:80ms]' : 'opacity-0'
        "
        class="hidden [@media(min-width:1420px)]:block absolute left-[450px] top-[21px] w-[639px] h-[666px] pointer-events-none z-0"
      />

      <div
        class="[@media(min-width:1420px)]:hidden m-auto reltaive z-100 gap-6 flex flex-col max-w-[720px]"
      >
        <Card class="flex flex-col gap-5 h-auto items-center p-10">
          <div class="flex flex-col gap-1 w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black flex justify-between items-center w-full"
            >
              Mango Interactive <i class="text-neutral-600">2015 - 2016</i>
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full text-primary-500"
            >
              Front End Lead
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Started my frontend career building ecommerce websites.
          </p>
        </Card>
        <Card class="flex flex-col gap-5 h-auto items-center p-10">
          <div class="flex flex-col gap-1 w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black flex justify-between items-center w-full"
            >
              RallyHR <i class="text-neutral-600">2016 - 2017</i>
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full text-primary-500"
            >
              Front End Lead
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Early-stage startup focused on HR services and help companies manage
            hiring.
          </p>
        </Card>
        <Card class="flex flex-col gap-5 h-auto items-center p-10">
          <div class="flex flex-col gap-1 w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black flex justify-between items-center w-full"
            >
              Aversafe <i class="text-neutral-600">2017 - 2018</i>
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full text-primary-500"
            >
              Front End Lead
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Startup where I helped build a platform for generating digital
            certificates.
          </p>
        </Card>
        <Card class="flex flex-col gap-5 h-auto items-center p-10">
          <div class="flex flex-col gap-1 w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black flex justify-between items-center w-full"
            >
              ProphetX <i class="text-neutral-600">2018 - 2026</i>
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full text-primary-500"
            >
              Front End Lead + Engr Manager
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Employee #0. Built the brand, product design, and frontend from the
            ground up.
          </p>
        </Card>
        <Card class="flex flex-col gap-5 h-auto items-center p-10">
          <div class="flex flex-col gap-1 w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black flex justify-between items-center w-full"
            >
              Freelancing <i class="text-neutral-600">2017 - PRESENT</i>
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full text-primary-500"
            >
              Brand + UI Design
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Alongside development, worked on various branding and design
            projects.
          </p>
        </Card>
      </div>

      <!-- LEFT column: right-aligned entries, gap-130 -->
      <div
        class="hidden [@media(min-width:1420px)]:flex flex-col gap-[130px] items-end text-right w-[432px] shrink-0 relative z-10"
      >
        <!-- RallyHR -->
        <div
          class="experience opacity-0 flex flex-col gap-5 h-auto items-start w-[430px]"
          :class="{ 'animate-slideLeft': isYearReached(2) }"
        >
          <div class="flex flex-col gap-1 items-end w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black"
            >
              RallyHR
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full"
            >
              Front End Lead
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Early-stage startup focused on HR services and help companies manage
            hiring.
          </p>
        </div>
        <!-- ProphetX -->
        <div
          class="experience opacity-0 flex flex-col gap-5 h-auto items-start w-[430px]"
          :class="{ 'animate-slideLeft': isYearReached(4) }"
        >
          <div class="flex flex-col gap-1 items-end w-full">
            <p
              class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black"
            >
              ProphetX
            </p>
            <p
              class="font-sans font-bold text-3xl leading-10 text-black w-full"
            >
              Front End Lead + Engr Manager
            </p>
          </div>
          <p
            class="font-sans font-normal text-default leading-6 text-black w-full"
          >
            Employee #0. Built the brand, product design, and frontend from the
            ground up.
          </p>
        </div>
      </div>

      <!-- CENTER group: year column + right text column -->
      <div
        class="hidden [@media(min-width:1420px)]:flex items-center gap-[114px] relative z-10"
      >
        <!-- Year column with vertical line -->
        <div
          :class="{ 'animate-slideDown [animation-delay:800ms]': visible }"
          class="relative flex flex-col gap-[96.5px] items-center w-[35px] shrink-0 opacity-0"
        >
          <!-- Gray background line -->
          <div
            class="absolute left-[13px] top-0 w-[6px] h-[698px] bg-neutral-300"
          />
          <!-- Blue progress line (scroll-driven) -->
          <div
            class="absolute left-[13px] top-0 w-[6px] bg-primary-500"
            :style="{ height: blueLineHeight + 'px' }"
          />

          <!-- Year labels -->
          <div
            v-for="(year, i) in years"
            :key="year"
            :ref="(el) => setYearRef(el, i)"
            class="bg-white flex items-center justify-center py-2 relative z-10 w-full"
          >
            <span
              :class="[
                'font-sans font-bold text-sm text-center tracking-[0.84px] whitespace-nowrap transition-colors duration-300',
                i < activeYearCount ? 'text-primary-500' : 'text-black',
              ]"
              >{{ year }}</span
            >
          </div>
        </div>

        <!-- RIGHT text column: gap-159 between Mango and the sub-group -->
        <div class="flex flex-col gap-[159px] w-[548px] shrink-0">
          <!-- Mango Interactive -->
          <div
            class="experience opacity-0 flex flex-col gap-5 h-auto items-start w-[430px]"
            :class="{ 'animate-slideLeft': isYearReached(1) }"
          >
            <div class="flex flex-col gap-1 items-start w-full">
              <p
                class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black"
              >
                Mango Interactive
              </p>
              <p
                class="font-sans font-bold text-3xl leading-10 text-black w-full"
              >
                Front End Developer
              </p>
            </div>
            <p
              class="font-sans font-normal text-default leading-6 text-black w-full"
            >
              Started my frontend career building ecommerce websites.
            </p>
          </div>

          <!-- Sub-group: Aversafe + Freelance, gap-46 -->
          <div class="flex-col items-start w-full">
            <!-- Aversafe -->
            <div
              class="experience opacity-0 flex flex-col gap-5 h-auto items-start w-[228px]"
              :class="{ 'animate-slideLeft': isYearReached(3) }"
            >
              <div class="flex flex-col gap-1 items-start w-full">
                <p
                  class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black"
                >
                  Aversafe
                </p>
                <p
                  class="font-sans font-bold text-3xl leading-10 text-black w-full"
                >
                  Front End Lead
                </p>
              </div>
              <p
                class="font-sans font-normal text-default leading-6 text-black w-full"
              >
                Startup where I helped build a platform for generating digital
                certificates.
              </p>
            </div>

            <!-- Freelance (shifted right with pl-299) -->
            <div
              class="experience opacity-0 flex flex-col gap-5 h-auto w-full pl-[299px] pt-[46px]"
              :class="{ 'animate-slideLeft': isYearReached(3) }"
            >
              <div class="flex flex-col gap-1 items-start w-full">
                <p
                  class="font-sans font-normal text-default leading-6 whitespace-nowrap text-black"
                >
                  Freelance
                </p>
                <p
                  class="font-sans font-bold text-3xl leading-10 text-black whitespace-nowrap"
                >
                  Brand + UI Design
                </p>
              </div>
              <p
                class="font-sans font-normal text-default leading-6 text-black w-full"
              >
                Alongside development, worked on various branding and design
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative: "don't just learn, experience!" (bottom-left) -->
      <div
        :class="
          visible ? 'animate-slideDown [animation-delay:960ms]' : 'opacity-0'
        "
        class="absolute left-[100px] bottom-[-100px] -rotate-[15.86deg] pointer-events-none"
      >
        <p
          class="font-['Gochi_Hand'] text-[30px] leading-normal text-primary-500 text-center whitespace-nowrap"
        >
          don't just learn,<br />experience!
        </p>
      </div>

      <!-- Decorative: keyboard (bottom-left) -->
      <div
        :class="
          visible ? 'animate-slideDown [animation-delay:960ms]' : 'opacity-0'
        "
        class="absolute -left-[290px] bottom-[-150px] rotate-[7.18deg] pointer-events-none"
      >
        <img
          src="/images/experience/keyboard.png"
          alt=""
          aria-hidden="true"
          class="w-[428px] object-cover"
        />
      </div>
    </div>
  </div>
</template>
=

<script setup lang="ts">
import { useInView } from "~/composables/useInView";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView(0.44);

const tabs = ["Experiences", "Education"] as const;
const activeTab = ref<"Experiences" | "Education">("Experiences");
const years = ["2015", "2016", "2017", "2018", "2026", "NOW"];

const timelineBodyRef = ref<HTMLElement | null>(null);
const yearItemRefs: HTMLElement[] = [];
const blueLineHeight = ref(0);
const activeYearCount = ref(0);

const GREY_LINE_HEIGHT = 698;

function isYearReached(yearIndex: number, offset = 0) {
  void blueLineHeight.value; // reactive trigger — re-evaluates on every scroll
  const el = yearItemRefs[yearIndex];
  if (!el) return false;
  // Trigger when the year dot's center scrolls to 75% down the viewport
  const rect = el.getBoundingClientRect();
  return rect.top + rect.height / 2 <= window.innerHeight * 0.75 + offset;
}

function setYearRef(el: unknown, i: number) {
  if (el instanceof HTMLElement) yearItemRefs[i] = el;
}

function updateProgress() {
  if (!timelineBodyRef.value) return;
  const rect = timelineBodyRef.value.getBoundingClientRect();
  const wh = window.innerHeight;

  // Progress: 0 when section top enters at 85% of viewport, 1 when fully consumed
  const progress = Math.max(
    0,
    Math.min(1, (wh * 0.6 - rect.top) / rect.height),
  );
  blueLineHeight.value = progress * GREY_LINE_HEIGHT;

  // Count years whose center is covered by the blue line
  if (blueLineHeight.value >= GREY_LINE_HEIGHT) {
    activeYearCount.value = years.length;
  } else {
    activeYearCount.value = yearItemRefs.filter((el) => {
      if (!el) return false;
      return el.offsetTop + el.offsetHeight / 2 <= blueLineHeight.value;
    }).length;
  }
}

onMounted(() => {
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>

<style>
@media (max-width: 1420px) {
  .experience {
    display: none;
  }
}
</style>
