<template>
  <div
    class="pointer-events-none fixed inset-0 z-[9999]"
    :style="{ opacity: visible ? 1 : 0 }"
  >
    <!-- Cursor arrow -->
    <div class="absolute" :style="{ left: `${pos.x}px`, top: `${pos.y}px` }">
      <svg
        width="20"
        height="20"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.15388 9.6998L7.49015 13.7588C7.15344 14.5803 5.99294 14.5883 5.64491 13.7716L0.584656 1.89652C0.231567 1.06791 1.06802 0.231455 1.89663 0.584544L13.7717 5.64479C14.5885 5.99283 14.5804 7.15333 13.7589 7.49004L9.69991 9.15376C9.45213 9.25532 9.25544 9.45202 9.15388 9.6998Z"
          :fill="hovering ? '#0c8ce9' : 'black'"
          stroke="white"
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
