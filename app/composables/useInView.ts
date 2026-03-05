import { ref, onMounted } from 'vue'

export function useInView(threshold = 0.1) {
  const sectionRef = ref<HTMLElement | null>(null)
  const visible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
  })

  return { sectionRef, visible }
}
