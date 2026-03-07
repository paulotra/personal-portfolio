<template>
  <div
    class="pointer-events-none fixed inset-0 z-[9999]"
    :style="{ opacity: visible ? 1 : 0 }"
  >
    <!-- Cursor arrow -->
    <div class="absolute" :style="{ left: `${pos.x}px`, top: `${pos.y}px` }">
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L1 18L14.5 10L1 1Z"
          fill="white"
          stroke="white"
          stroke-width="3"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <path
          d="M1 1L1 18L14.5 10L1 1Z"
          :fill="hovering ? '#0c8ce9' : '#1a1a1a'"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const pos = reactive({ x: -100, y: -100 });
const visible = ref(false);
const hovering = ref(false);
const trail = ref<{ x: number; y: number }[]>([]);
const TRAIL_LENGTH = 20;

function isInteractive(el: Element | null): boolean {
  while (el) {
    if (el.matches("a, button, [data-cursor-hover]")) return true;
    el = el.parentElement;
  }
  return false;
}

onMounted(() => {
  document.documentElement.style.setProperty("cursor", "none", "important");
  document.body.style.setProperty("cursor", "none", "important");

  const style = document.createElement("style");
  style.textContent =
    "*, *::before, *::after { cursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E\") 0 0, none !important; }";
  document.head.appendChild(style);

  const onMove = (e: MouseEvent) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    visible.value = true;
    hovering.value = isInteractive(e.target as Element);
    trail.value.push({ x: e.clientX, y: e.clientY });
    if (trail.value.length > TRAIL_LENGTH) trail.value.shift();
  };
  const onLeave = () => {
    visible.value = false;
    hovering.value = false;
    trail.value = [];
  };
  document.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseleave", onLeave);
  onUnmounted(() => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseleave", onLeave);
    document.head.removeChild(style);
  });
});
</script>
