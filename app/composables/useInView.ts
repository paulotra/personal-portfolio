import { ref, onMounted, nextTick } from "vue";

export function useInView(_threshold = 0.1) {
  const sectionRef = ref<HTMLElement | null>(null);
  const visible = ref(false);

  onMounted(async () => {
    await nextTick();

    if (!sectionRef.value) {
      visible.value = true;
      return;
    }

    // If already in view (e.g. on back navigation), show immediately
    const rect = sectionRef.value.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      visible.value = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(sectionRef.value);
  });

  return { sectionRef, visible };
}
