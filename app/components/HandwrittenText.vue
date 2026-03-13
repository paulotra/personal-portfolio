<template>
  <span ref="containerRef" v-bind="$attrs">
    <template v-for="(part, i) in parts" :key="i">
      <br v-if="part.isBreak" />
      <span
        v-else
        class="gochi-char inline-block"
        >{{ part.isSpace ? "\u00A0" : part.char }}</span
      >
    </template>
  </span>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    text: string;
    delay?: number;
    scrollTrigger?: boolean;
    scrollStart?: string;
    stagger?: number;
  }>(),
  {
    delay: 0,
    scrollTrigger: true,
    scrollStart: "top 85%",
    stagger: 0.045,
  },
);

const containerRef = ref<HTMLElement | null>(null);

const parts = computed(() =>
  props.text.split("").map((char) => ({
    char,
    isBreak: char === "\n",
    isSpace: char === " ",
  })),
);

let ctx: gsap.Context | null = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const chars = containerRef.value?.querySelectorAll(".gochi-char");
    if (!chars?.length) return;

    const st = props.scrollTrigger
      ? {
          trigger: containerRef.value,
          start: props.scrollStart,
          toggleActions: "play none none none",
        }
      : undefined;

    gsap.from(chars, {
      opacity: 0,
      y: 8,
      rotation: () => (Math.random() - 0.5) * 22,
      duration: 0.38,
      stagger: props.stagger,
      ease: "power2.out",
      delay: props.delay,
      scrollTrigger: st,
    });
  }, containerRef.value!);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
