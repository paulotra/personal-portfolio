<template>
  <div class="max-w-[960px] mx-auto py-10 flex flex-col gap-6">
    <div class="flex gap-6 overflow-hidden">
      <div class="flex-1">
        <img src="/images/projects/rocket-flow/1.webp" class="shadow-soft-y" />
      </div>
      <div class="flex flex-col gap-6 flex-1 w-full">
        <img
          src="/images/projects/rocket-flow/2.webp"
          class="w-full shadow-soft-y"
        />
        <img
          src="/images/projects/rocket-flow/3.webp"
          class="w-full shadow-soft-y"
        />
      </div>
      <div class="flex-1">
        <img src="/images/projects/rocket-flow/4.webp" class="shadow-soft-y" />
      </div>
    </div>
    <div class="flex gap-6 overflow-hidden">
      <div class="flex-1">
        <img src="/images/projects/rocket-flow/5.webp" class="shadow-soft-y" />
      </div>
      <div class="flex flex-col gap-6 flex-1">
        <img
          src="/images/projects/rocket-flow/6.webp"
          class="w-full shadow-soft-y"
        />
        <img
          src="/images/projects/rocket-flow/7.webp"
          class="w-full shadow-soft-y"
        />
      </div>
    </div>
    <div class="flex gap-6 flex-col overflow-hidden">
      <img src="/images/projects/rocket-flow/8.webp" class="shadow-soft-y" />
      <img src="/images/projects/rocket-flow/9.webp" class="shadow-soft-y" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GalleryColumnItem, GalleryMockupItem } from "~/data/works";

defineProps<{
  galleryLeft: GalleryColumnItem[];
  galleryRight: GalleryColumnItem[];
  galleryMockups: GalleryMockupItem[];
  cardsVisible: boolean;
}>();
</script>

<style scoped>
img {
  @apply rounded-xl;
}
</style>
