import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const lenis = new Lenis({ autoRaf: true, anchors: true });

  nuxtApp.hook("page:finish", () => {
    lenis.scrollTo(0, { immediate: true });
  });

  return { provide: { lenis } };
});
