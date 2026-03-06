import { ref, onMounted } from "vue";

export function useInView(_threshold = 0.1) {
  const sectionRef = ref<HTMLElement | null>(null);
  const visible = ref(false);

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    if (sectionRef.value) observer.observe(sectionRef.value);
  });

  return { sectionRef, visible };
}
