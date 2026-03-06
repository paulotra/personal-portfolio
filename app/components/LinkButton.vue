<template>
  <a :href="href" class="link-hover relative group w-fit" :class="{ active: isActive }">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string }>();

const isActive = ref(false);

onMounted(() => {
  const targetId = props.href.startsWith("#") ? props.href.slice(1) : null;
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      isActive.value = entry!.isIntersecting;
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
  );

  observer.observe(target);
  onUnmounted(() => observer.disconnect());
});
</script>

<style scoped>
.link-hover::before,
.link-hover::after {
  content: "{";
  position: absolute;
  color: theme("colors.primary.500");
  opacity: 0;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.link-hover::after {
  content: "}";
}

.link-hover::before {
  left: -1em;
  transform: translateX(8px);
}

.link-hover::after {
  right: -1em;
  transform: translateX(-8px);
}

.link-hover:hover::before,
.link-hover:hover::after,
.link-hover.active::before,
.link-hover.active::after {
  opacity: 1;
  transform: translateX(0);
}

.link-hover.active {
  color: theme("colors.primary.500");
}
</style>
