<template>
  <div
    class="min-h-screen md:h-screen md:overflow-hidden bg-[#ebf2f9] flex flex-col md:flex-row transition-opacity duration-300 ease-out"
    :class="mounted ? 'opacity-100' : 'opacity-0'"
  >
    <!-- Sidebar — slides from left on desktop, fades on mobile -->
    <aside
      class="w-full md:w-[474px] md:shrink-0 md:h-screen md:overflow-y-auto bg-white px-8 md:px-10 py-10 flex flex-col gap-8 transition-[transform,opacity] duration-500 ease-out"
      :class="
        asideVisible
          ? 'md:translate-x-0 opacity-100'
          : 'md:-translate-x-full opacity-0'
      "
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-3">
          <h1 class="font-sans font-bold text-[28px] leading-10 text-black">
            {{ work.title }}
          </h1>
          <div class="flex gap-2 flex-wrap">
            <Badge
              v-for="badge in work.badges"
              :key="badge.label"
              :variant="badge.variant as 'ui' | 'brand' | 'dev'"
              >{{ badge.label }}</Badge
            >
          </div>
        </div>

        <div v-if="work.sections" class="flex flex-col text-base leading-8">
          <template v-for="section in work.sections" :key="section.heading">
            <p class="font-bold text-black">{{ section.heading }}</p>
            <p class="text-neutral-600 mb-6 last:mb-0">{{ section.body }}</p>
          </template>
        </div>
      </div>

      <div class="flex gap-4 justify-end">
        <NuxtLink to="/projects">
          <Button variant="outline" size="default" :show-icon="false">
            <Icon name="arrow-left" class="size-4 mr-1" />
            Go Back
          </Button>
        </NuxtLink>
        <a
          v-if="work.siteUrl && work.siteUrl !== '#'"
          :href="work.siteUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="default">
            Visit Site
            <template #icon>
              <Icon name="arrow-diagonal" class="size-3.5" />
            </template>
          </Button>
        </a>
      </div>
    </aside>

    <!-- Right panel -->
    <main class="flex-1 md:h-screen md:overflow-y-auto">
      <div class="max-w-[960px] mx-auto px-6 md:px-10 py-10">
        <template v-if="galleryLeft.length || galleryRight.length">
          <!-- Two columns -->
          <div class="flex gap-8">
            <!-- Left column -->
            <div class="flex-1 grid grid-cols-2 gap-8 content-start">
              <div
                v-for="(item, i) in galleryLeft"
                :key="i"
                class="rounded-[20px] overflow-hidden bg-white shadow-card transition-all duration-500 ease-out"
                :class="[
                  item.width === '100%' ? 'col-span-2' : 'col-span-1',
                  cardsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6',
                ]"
                :style="{
                  transitionDelay: cardsVisible ? `${i * 200}ms` : '0ms',
                  ...(item.height ? { height: item.height } : {}),
                }"
              >
                <img
                  :src="item.src"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Right column -->
            <div class="flex-1 grid grid-cols-2 gap-8 content-start">
              <div
                v-for="(item, i) in galleryRight"
                :key="i"
                class="rounded-[20px] overflow-hidden bg-white shadow-card transition-all duration-500 ease-out"
                :class="[
                  item.width === '100%' ? 'col-span-2' : 'col-span-1',
                  cardsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6',
                ]"
                :style="{
                  transitionDelay: cardsVisible ? `${i * 200}ms` : '0ms',
                  ...(item.height ? { height: item.height } : {}),
                }"
              >
                <img
                  :src="item.src"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Mockups — full width -->
          <div v-if="galleryMockups.length" class="mt-8 flex flex-col gap-8">
            <div
              v-for="(item, i) in galleryMockups"
              :key="i"
              class="w-full rounded-[20px] overflow-hidden bg-white transition-all duration-500 ease-out"
              :class="
                cardsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              "
              :style="{
                transitionDelay: cardsVisible
                  ? `${(galleryLeft.length + galleryRight.length + i) * 200}ms`
                  : '0ms',
              }"
            >
              <img :src="item.src" alt="" class="w-full object-cover" />
            </div>
          </div>
        </template>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { works, type ProjectGallery } from "~/data/works";

definePageMeta({ layout: "blank" });

const route = useRoute();
const work = works.find((w) => w.slug === route.params.slug);

if (!work) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

const gallery = ((work as any).gallery as ProjectGallery) ?? null;
const galleryLeft = gallery?.left ?? [];
const galleryRight = gallery?.right ?? [];
const galleryMockups = gallery?.mockups ?? [];

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
