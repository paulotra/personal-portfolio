<template>
  <div class="bg-neutral-100">
    <!-- Hero Section -->
    <section class="bg-neutral-100 z-10 relative min-h-[944px]">
      <div class="max-w-[1360px] mx-auto px-6">
        <!-- Navbar -->
        <nav class="flex items-center justify-between pt-[60px]">
          <img src="/images/pt-logo.svg" alt="PT Logo" class="h-[28px] w-[31px]" />
          <div class="flex items-center gap-10">
            <a href="#services" class="text-lg text-neutral-800">Services</a>
            <a href="#experience" class="text-lg text-neutral-800">Experience</a>
            <a href="#education" class="text-lg text-neutral-800">Education</a>
            <a href="#works" class="text-lg text-neutral-800">Works</a>
            <a href="#testimonials" class="text-lg text-neutral-800">Testimonials</a>
            <Button variant="primary" :show-icon="false">Work With Me</Button>
          </div>
        </nav>

        <!-- Hero Content -->
        <div class="flex flex-col gap-3 pt-[220px] max-w-[662px]">
          <div class="flex flex-col gap-2 relative">
            <!-- Hi Guys! -->
            <div class="-rotate-6 inline-block absolute -top-10 left-0">
              <span class="font-['Gochi_Hand'] text-[50px] leading-10 text-neutral-700 whitespace-nowrap">
                Hi Guys!
              </span>
            </div>
            <!-- Headline -->
            <h1 class="font-sans font-black text-[60px] leading-heading uppercase text-black w-[676px] min-h-[144px]">
              I'm paulo Trajano, <br>A <span class="text-primary-500">{{ displayedText }}</span> 
              <span class="inline-block w-[1px] h-[0.9em] bg-primary-500 ml-[1px] align-middle relative -top-1" :class="cursorVisible ? 'opacity-75' : 'opacity-0'" />
            </h1>
          </div>
          <!-- Subtitle -->
          <p class="text-xl text-black font-normal leading-[34px]">
            Specialized in web design, branding, and frontend development.
          </p>
        </div>

        <!-- Location -->
        <div class="flex flex-col gap-3 absolute bottom-[60px]">
          <div class="bg-neutral-400 h-[2px] w-[166px]" />
          <p class="text-xs font-medium text-neutral-600 tracking-[1.2px] uppercase leading-7">
            Butuan City 8600<br />
            Philippines
          </p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <Content class="relative z-20">
      <HomeCapabilities class="mt-[120px]" />
      <HomeRecentWorks class="mt-[320px]" />
      <HomeExperiencesAndEducation class="mt-[200px]" />
      <HomeTestimonials class="mt-[200px]" />
    </Content>

    <!-- Footer CTA Section -->
    <section class="relative bg-white">
      <div class="bg-neutral-100 relative">
        <div class="absolute -top-10 left-0 w-full h-[84px] bg-neutral-100 rounded-[80px]" />

        <div class="max-w-[1362px] mx-auto py-[100px]">
          <div class="flex gap-8 items-start">
            <!-- Left: CTA + Contacts -->
            <div class="flex flex-col gap-6 flex-1">
              <div class="flex flex-col gap-5">
                <h2 class="font-sans font-black text-[60px] leading-heading uppercase text-black">
                  Let's build something great <span class="text-primary-500">together</span>
                </h2>
                <p class="text-2xl text-neutral-800 font-normal leading-10">
                  Open to full-time, part-time roles and product collaborations.
                </p>
              </div>
              <div class="flex gap-6">
                <div class="flex flex-col gap-1 flex-1">
                  <p class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7">EMAIL</p>
                  <p class="text-default text-neutral-800 font-normal leading-7">trajanopaulo@gmail.com</p>
                </div>
                <div class="flex flex-col gap-1 flex-1">
                  <p class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7">LINKEDIN</p>
                  <p class="text-default text-neutral-800 font-normal leading-7">trajanopaulo@gmail.com</p>
                </div>
              </div>
            </div>

            <!-- Right: Links -->
            <div class="flex flex-col gap-10 w-[316px]">
              <!-- Portfolios -->
              <div class="flex flex-col gap-3">
                <p class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7">PORTFOLIOS</p>
                <div class="bg-neutral-400 h-[2px] w-full" />
                <div class="flex flex-col gap-2">
                  <p class="text-default text-neutral-800 font-normal leading-7">Behance</p>
                  <p class="text-default text-neutral-800 font-normal leading-7">Dribbble</p>
                </div>
              </div>
              <!-- Socials -->
              <div class="flex flex-col gap-3">
                <p class="text-sm font-bold text-neutral-800 tracking-[0.84px] uppercase leading-7">SOCIALS</p>
                <div class="bg-neutral-400 h-[2px] w-full" />
                <div class="flex flex-col gap-2">
                  <p class="text-default text-neutral-800 font-normal leading-7">Instagram</p>
                  <p class="text-default text-neutral-800 font-normal leading-7">Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Bar -->
    <div class="bg-black relative">
      <div class="absolute -top-10 left-0 w-full h-[84px] bg-neutral-100 rounded-[80px]" />
      <div class="max-w-[1360px] mx-auto px-6 pb-5 pt-[62px]">
        <p class="text-sm text-white font-normal leading-7">
          © 2026 Paulo Trajano - Designer & Frontend Developer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const words = ['Brand Designer', 'UI/UX Designer', 'FE Developer']
const typeSpeed = 80
const deleteSpeed = 50
const pauseDuration = 2000

const displayedText = ref('')
const cursorVisible = ref(true)

let wordIndex = 0

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function typewriter() {
  while (true) {
    const word = words[wordIndex % words.length]!

    // Type out
    for (let i = 0; i <= word.length; i++) {
      displayedText.value = word.slice(0, i)
      await sleep(typeSpeed)
    }

    // Pause
    await sleep(pauseDuration)

    // Delete
    for (let i = word.length; i >= 0; i--) {
      displayedText.value = word.slice(0, i)
      await sleep(deleteSpeed)
    }

    await sleep(200)
    wordIndex++
  }
}

// Blinking cursor
let cursorInterval: ReturnType<typeof setInterval>

onMounted(() => {
  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 530)
  typewriter()
})
onUnmounted(() => clearInterval(cursorInterval))
</script>
