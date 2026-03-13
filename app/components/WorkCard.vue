<template>
  <Card
    class="cursor-pointer"
    @click="router.push(`/projects/${slug}`)"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <div class="flex flex-col gap-5 pb-[45.5px]">
      <div
        class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
      >
        <img
          ref="imgRef"
          :src="image"
          :alt="title"
          :class="imageClass"
          class="object-contain project-img"
        />
      </div>
      <div class="flex flex-col gap-2 px-6">
        <p
          class="font-sans font-semibold text-2xl leading-10 capitalize text-black text-left"
        >
          {{ title }}
        </p>
        <div class="flex flex-col gap-8">
          <div class="flex gap-2 flex-wrap">
            <Badge
              v-for="badge in badges"
              :key="badge.label"
              :variant="badge.variant"
              >{{ badge.label }}</Badge
            >
          </div>
          <div class="flex items-center gap-6">
            <a
              v-if="siteUrl && siteUrl !== '#'"
              :href="siteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 leading text-neutral-600 hover:text-primary-500"
              @click.stop
            >
              <Headline variant="h6" class="relative top-[1px]"
                >VISIT SITE</Headline
              >
              <Icon name="arrow-diagonal" size="sm" class="text-primary-500" />
            </a>
            <div
              v-if="siteUrl && siteUrl !== '#'"
              class="w-px h-[19px] bg-neutral-400"
            />
            <NuxtLink
              :to="`/projects/${slug}`"
              class="flex items-center gap-2 leading text-neutral-600 hover:text-primary-500"
              @click.stop
            >
              <Headline variant="h6" class="relative top-[1px]"
                >VIEW PROJECT</Headline
              >
              <Icon name="arrow-right" size="md" class="text-primary-500" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const router = useRouter();
const imgRef = ref<HTMLImageElement | null>(null);

defineProps<{
  slug: string;
  image: string;
  title: string;
  badges: { variant: string; label: string }[];
  siteUrl: string;
  projectUrl: string;
  imageClass?: string;
}>();

function onEnter() {
  if (!imgRef.value) return;
  gsap.to(imgRef.value, {
    scale: 1,
    filter: "grayscale(0)",
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
  });
}

function onLeave() {
  if (!imgRef.value) return;
  gsap.to(imgRef.value, {
    scale: 0.9,
    filter: "grayscale(1)",
    opacity: 0.6,
    duration: 0.4,
    ease: "power2.in",
  });
}
</script>

<style scoped>
.project-img {
  transform: scale(0.9);
  filter: grayscale(1);
  opacity: 0.6;
}
</style>
