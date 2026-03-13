import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

interface RevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  start?: string;
}

/**
 * Reveals elements when they scroll into view using GSAP ScrollTrigger.
 * Pass a container ref and one or more CSS selectors (or element refs).
 * All ScrollTriggers are scoped and cleaned up on unmount.
 */
export function useGsapReveal() {
  let ctx: gsap.Context | null = null;

  onMounted(() => {
    ctx = gsap.context(() => {});
  });

  onUnmounted(() => {
    ctx?.revert();
  });

  function reveal(
    target: string | Element | Element[] | Ref<HTMLElement | null>,
    options: RevealOptions = {},
    triggerEl?: string | Element | Ref<HTMLElement | null>,
  ) {
    const {
      y = 40,
      x = 0,
      opacity = 0,
      scale = 1,
      rotation = 0,
      stagger = 0,
      duration = 0.7,
      ease = "power3.out",
      delay = 0,
      start = "top 85%",
    } = options;

    const resolvedTarget =
      target && typeof target === "object" && "value" in target
        ? (target as Ref<HTMLElement | null>).value
        : target;

    const resolvedTrigger =
      triggerEl && typeof triggerEl === "object" && "value" in triggerEl
        ? (triggerEl as Ref<HTMLElement | null>).value ?? resolvedTarget
        : (triggerEl ?? resolvedTarget);

    if (!resolvedTarget) return;

    ctx?.add(() => {
      gsap.from(resolvedTarget, {
        y,
        x,
        opacity,
        scale,
        rotation,
        stagger,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: resolvedTrigger as Element,
          start,
          toggleActions: "play none none none",
        },
      });
    });
  }

  function parallax(
    target: string | Element | Ref<HTMLElement | null>,
    options: {
      yPercent?: number;
      xPercent?: number;
      rotation?: number;
      scrub?: number | boolean;
      trigger?: string | Element | Ref<HTMLElement | null>;
      start?: string;
      end?: string;
    } = {},
  ) {
    const {
      yPercent = -20,
      xPercent = 0,
      rotation,
      scrub = 1.5,
      start = "top bottom",
      end = "bottom top",
    } = options;

    const resolvedTarget =
      target && typeof target === "object" && "value" in target
        ? (target as Ref<HTMLElement | null>).value
        : target;

    const resolvedTrigger =
      options.trigger && typeof options.trigger === "object" && "value" in options.trigger
        ? (options.trigger as Ref<HTMLElement | null>).value ?? resolvedTarget
        : (options.trigger ?? resolvedTarget);

    if (!resolvedTarget) return;

    const toProps: gsap.TweenVars = { yPercent, xPercent, ease: "none", scrub };
    if (rotation !== undefined) toProps.rotation = rotation;

    ctx?.add(() => {
      gsap.to(resolvedTarget, {
        ...toProps,
        scrollTrigger: {
          trigger: resolvedTrigger as Element,
          start,
          end,
          scrub,
        },
      });
    });
  }

  return { reveal, parallax };
}
