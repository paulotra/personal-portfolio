<template>
  <div class="bg-neutral-100">
    <!-- Navbar -->
    <template v-if="route.path !== '/projects'">
      <Navigation :scrolled="true" class="max-w-[1360px] relative top-[12px]" />
      <Navigation
        :scrolled="scrolled"
        class="fixed bg-white top-0 shadow-soft-y"
      />
    </template>
    <slot />

    <!-- Footer CTA Section -->
    <section class="relative bg-white">
      <div class="bg-neutral-100 relative">
        <div
          class="absolute -top-10 left-0 w-full h-[84px] bg-neutral-100 rounded-[80px]"
        />

        <div class="max-w-[1362px] mx-auto pt-[100px] pb-[60px]">
          <div class="lg:flex gap-10 items-start px-8 lg:px-0">
            <!-- Left: CTA + Contacts -->
            <div class="flex flex-col gap-6 flex-1 mb-10 lg:mb-0">
              <div class="flex flex-col gap-1">
                <h2
                  class="font-sans font-black text-[60px] leading-heading uppercase text-black"
                >
                  Let's build something great
                  <span class="text-primary-500">together</span>
                </h2>
                <p class="text-2xl text-neutral-800 font-normal leading-10">
                  Open to full-time, part-time roles and product collaborations.
                </p>
              </div>
              <div class="flex gap-10">
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                  >
                    EMAIL
                  </p>
                  <p
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    <LinkButton
                      href="mailto:trajanopaulo@gmail.com"
                      class="text-default text-neutral-800 font-normal leading-7"
                    >
                      trajanopaulo@gmail.com
                    </LinkButton>
                  </p>
                </div>
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                  >
                    CONTACT
                  </p>
                  <p
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    <LinkButton
                      href="https://www.linkedin.com/in/paulo-trajano-53aa56109/"
                      target="_blank"
                      class="text-default text-neutral-800 font-normal leading-7"
                    >
                      LinkedIn Profile
                    </LinkButton>
                  </p>
                </div>
              </div>
            </div>

            <!-- Right: Links -->
            <div class="flex lg:flex-col gap-10 lg:w-1/3">
              <!-- Portfolios -->
              <div class="flex-1 flex flex-col gap-3">
                <p
                  class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                >
                  PORTFOLIOS
                </p>
                <div class="bg-neutral-400 h-[2px] w-full" />
                <div class="flex flex-col gap-2">
                  <LinkButton
                    href="https://www.behance.net/paulotrajano1"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Behance
                  </LinkButton>
                  <LinkButton
                    href="https://dribbble.com/paulotra"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Dribbble
                  </LinkButton>
                </div>
              </div>
              <!-- Socials -->
              <div class="flex-1 flex flex-col gap-3">
                <p
                  class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7"
                >
                  SOCIALS
                </p>
                <div class="bg-neutral-400 h-[2px] w-full" />
                <div class="flex flex-col gap-2">
                  <LinkButton
                    href="https://www.instagram.com/paulo_tra/"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Instagram
                  </LinkButton>
                  <LinkButton
                    href="https://www.facebook.com/paulotra/"
                    target="_blank"
                    class="text-default text-neutral-800 font-normal leading-7"
                  >
                    Facebook
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Bar -->
    <div class="bg-black relative">
      <div
        class="absolute -top-10 left-0 w-full h-[84px] bg-neutral-100 rounded-[80px]"
      />
      <div class="max-w-[1360px] mx-auto pb-5 pt-[62px]">
        <p
          class="text-sm text-white font-normal leading-7 text-center lg:text-left"
        >
          © 2026 Paulo Trajano - Designer & Frontend Developer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const scrolled = ref(false);

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 300;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>
