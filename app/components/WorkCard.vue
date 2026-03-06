<template>
  <Card>
    <div class="flex flex-col gap-5 pb-[45.5px]">
      <div
        class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
      >
        <img
          :src="image"
          :alt="title"
          :class="imageClass"
          class="object-contain project-img"
        />
      </div>
      <div class="flex flex-col gap-2 px-6">
        <p
          class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
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
            <LinkButton :href="siteUrl" class="flex items-center gap-2 leading">
              <Headline
                variant="h6"
                class="!text-neutral-600 relative top-[1px]"
                >VISIT SITE</Headline
              >
              <Icon name="arrow-diagonal" size="sm" class="text-primary-500" />
            </LinkButton>
            <div class="w-px h-[19px] bg-neutral-400" />
            <LinkButton
              :href="projectUrl"
              class="flex items-center gap-2 leading"
            >
              <Headline
                variant="h6"
                class="!text-neutral-600 relative top-[1px]"
                >VIEW PROJECT</Headline
              >
              <Icon name="arrow-right" size="md" class="text-primary-500" />
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import LinkButton from "./LinkButton.vue";

defineProps<{
  image: string;
  title: string;
  badges: { variant: string; label: string }[];
  siteUrl: string;
  projectUrl: string;
  imageClass?: string;
}>();
</script>

<style scoped>
.project-img {
  transform: scale(0.9) rotateY(180deg);
  filter: grayscale(1) blur(4px);
  opacity: 0.6;
  transition:
    transform 0.4s ease,
    filter 0.4s ease,
    opacity 0.4s ease;
}
.group:hover .project-img {
  transform: scale(1) rotateY(0deg);
  filter: grayscale(0) blur(0px);
  opacity: 1;
}
</style>
