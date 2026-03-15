<template>
  <div
    class="min-h-screen md:h-screen md:overflow-hidden bg-[#ebf2f9] flex flex-col md:flex-row transition-opacity duration-300 ease-out"
    :class="mounted ? 'opacity-100' : 'opacity-0'"
  >
    <!-- Sidebar — slides from left on desktop, fades on mobile -->
    <aside
      class="w-full md:w-[458px] md:shrink-0 md:h-screen md:overflow-y-auto bg-white px-8 py-10 flex flex-col gap-8 transition-[transform,opacity] duration-500 ease-out"
      :class="
        asideVisible
          ? 'md:translate-x-0 opacity-100'
          : 'md:-translate-x-full opacity-0'
      "
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-4">
            <button
              class="flex hover:text-primary-500 text-base font-normal text-neutral-600 items-center gap-2"
              @click="router.back()"
            >
              <Icon name="arrow-left" class="size-5 mr-1 relative" />
            </button>
            <h1 class="font-sans font-bold text-[28px] leading-10 text-black">
              {{ work.title }}
            </h1>
          </div>
          <div class="flex gap-2 flex-wrap">
            <Badge
              v-for="badge in work.badges"
              :key="badge.label"
              :variant="badge.variant as 'ui' | 'brand' | 'dev'"
              >{{ badge.label }}</Badge
            >
          </div>
        </div>

        <p class="font-bold text-black">Tech & Tools</p>
        <div class="flex flex-wrap gap-5 items-center justify-start">
          <img
            v-for="tech in work.tech"
            :src="`/images/capabilities/${tech}.webp`"
            alt="VS Code"
            class="size-8 object-contain"
          />
        </div>

        <div v-if="work.sections" class="flex flex-col text-base leading-8">
          <template v-for="section in work.sections" :key="section.heading">
            <p class="font-bold text-black">{{ section.heading }}</p>
            <p class="text-neutral-600 mb-6 last:mb-0">{{ section.body }}</p>
          </template>
        </div>
      </div>

      <div
        v-if="work.siteUrl && work.siteUrl !== '#'"
        class="flex gap-4 justify-end"
      >
        <a
          :href="work.siteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full"
        >
          <Button variant="primary" size="default" class="w-full">
            Visit Site
            <template #icon>
              <Icon name="arrow-diagonal" class="size-3.5" />
            </template>
          </Button>
        </a>
      </div>
    </aside>

    <!-- Right panel -->
    <main class="flex-1 md:h-screen md:overflow-y-auto px-8 md:p-0">
      <ProjectsRocketFlow
        v-if="route.params.slug === 'rocket-flow'"
        :cards-visible="cardsVisible"
      />
      <ProjectsProphetX
        v-else-if="route.params.slug === 'prophetx'"
        :cards-visible="cardsVisible"
      />
      <ProjectsCoachTalk
        v-else-if="route.params.slug === 'coach-talk'"
        :cards-visible="cardsVisible"
      />
      <ProjectsVloer
        v-else-if="route.params.slug === 'vloer-offerte'"
        :cards-visible="cardsVisible"
      />
      <ProjectsCloudmazing
        v-else-if="route.params.slug === 'cloudmazing'"
        :cards-visible="cardsVisible"
      />
      <ProjectsDeclaratie
        v-else-if="route.params.slug === '123declaratie'"
        :cards-visible="cardsVisible"
      />
      <ProjectsTenancy
        v-else-if="route.params.slug === 'tenancy'"
        :cards-visible="cardsVisible"
      />
      <ProjectsElated
        v-else-if="route.params.slug === 'elated'"
        :cards-visible="cardsVisible"
      />
      <ProjectsLFF
        v-else-if="route.params.slug === 'lff-industrial'"
        :cards-visible="cardsVisible"
      />
      <ProjectsID
        v-else-if="route.params.slug === 'int-dashboard'"
        :cards-visible="cardsVisible"
      />
      <ProjectsOcam
        v-else-if="route.params.slug === 'ocam'"
        :cards-visible="cardsVisible"
      />
      <ProjectsArlon
        v-else-if="route.params.slug === 'arlon-antonius-portfolio'"
        :cards-visible="cardsVisible"
      />
      <ProjectsBlomstra
        v-else-if="route.params.slug === 'blomstra'"
        :cards-visible="cardsVisible"
      />
      <ProjectsJazzInc
        v-else-if="route.params.slug === 'jazz-inc-diorama'"
        :cards-visible="cardsVisible"
      />
      <ProjectsCDG
        v-else-if="route.params.slug === 'camp-diego-garcia'"
        :cards-visible="cardsVisible"
      />
      <ProjectsHyn
        v-else-if="route.params.slug === 'hyn-portfolio'"
        :cards-visible="cardsVisible"
      />
      <ProjectsLMS
        v-else-if="route.params.slug === 'lms'"
        :cards-visible="cardsVisible"
      />
      <ProjectsNaks
        v-else-if="route.params.slug === 'naks-choice'"
        :cards-visible="cardsVisible"
      />
      <div v-else class="flex items-center justify-center flex-col h-full p-8">
        <img src="/images/coding.webp" width="400px" alt="" />
        <Headline variant="h4" class="font-bold mb-2 mt-6"
          >Dusting off the archives...</Headline
        >
        <p class="text-neutral-600 max-w-[520px] text-center leading-loose">
          Currently hunting down my old Figma files and code snippets to tell
          the full story. Stay tuned!
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { works } from "~/data/works";

definePageMeta({ layout: "blank" });

const route = useRoute();
const router = useRouter();
const work = works.find((w) => w.slug === route.params.slug);

if (!work) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

const mounted = ref(false);
const asideVisible = ref(false);
const cardsVisible = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    mounted.value = true;
    setTimeout(() => {
      asideVisible.value = true;
    }, 300);
    setTimeout(() => {
      cardsVisible.value = true;
    }, 800);
  });
});
</script>
