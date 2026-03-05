<template>
  <div class="relative flex flex-col gap-[54px]">

    <!-- Header -->
    <div class="flex items-end justify-between relative">
      <h2 class="font-sans font-black text-4xl leading-[1.4] uppercase text-black">RECENT WORKS</h2>

      <!-- "design & development" decorative label -->
      <div class="absolute right-[360px] -top-[132px] rotate-[15deg] pointer-events-none">
        <p class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center whitespace-pre">
          design <br> & <br> development
        </p>
      </div>

      <!-- Visit all projects -->
      <a href="#" class="flex items-center gap-3 cursor-pointer">
        <span class="font-['Gochi_Hand'] text-3xl leading-10 text-neutral-700 whitespace-nowrap">Visit all projects</span>
        <img src="/images/works/visit-arrow.png" alt="" aria-hidden="true" class="h-[27px] w-[53px] object-cover" />
      </a>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-3 gap-10">

      <!-- Rocket Flow -->
      <Card>
        <div class="flex flex-col gap-5 pb-8">
          <div class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center mix-blend-luminosity opacity-80">
            <div class="flex items-center gap-2">
              <img src="/images/works/rocketflow-r.png" alt="Rocket Flow" class="h-11 object-contain" />
              <img src="/images/works/rocketflow-text.png" alt="" aria-hidden="true" class="h-5 object-contain" />
            </div>
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p class="font-sans font-semibold text-2xl leading-10 capitalize text-black">Rocket Flow</p>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-5">
                <CardLink label="VISIT SITE" :diagonal="true" />
                <div class="w-px h-[19px] bg-neutral-400" />
                <CardLink label="VIEW PROJECT" />
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
                <Badge variant="dev">FE Development</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- ProphetX -->
      <Card>
        <div class="flex flex-col gap-5 pb-8">
          <div class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center mix-blend-luminosity opacity-80">
            <img src="/images/works/prophetx-logo.png" alt="ProphetX" class="h-[26px] object-contain" />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p class="font-sans font-semibold text-2xl leading-10 capitalize text-black">ProphetX</p>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-5">
                <CardLink label="VISIT SITE" :diagonal="true" />
                <div class="w-px h-[19px] bg-neutral-400" />
                <CardLink label="VIEW PROJECT" />
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
                <Badge variant="dev">FE Development</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Coach Talk -->
      <Card>
        <div class="flex flex-col gap-5 pb-8">
          <div class="border-b border-neutral-300 h-[391px] w-full flex flex-col items-center justify-center gap-2 mix-blend-luminosity opacity-80">
            <img src="/images/works/coachtalk-icon.png" alt="" aria-hidden="true" class="h-[112px] object-contain" />
            <img src="/images/works/coachtalk-text.png" alt="C*achtalk" class="h-5 object-contain" />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p class="font-sans font-semibold text-2xl leading-10 capitalize text-black">Coach Talk</p>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-5">
                <CardLink label="VISIT SITE" :diagonal="true" />
                <div class="w-px h-[19px] bg-neutral-400" />
                <CardLink label="VIEW PROJECT" />
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Vloer Offerte -->
      <Card>
        <div class="flex flex-col gap-5 pb-8">
          <div class="border-b border-neutral-300 h-[391px] w-full flex flex-col items-center justify-center mix-blend-luminosity opacity-80">
            <div class="flex items-center gap-3">
              <div class="flex flex-col gap-0.5">
                <img src="/images/works/vloer-group3.png" alt="" aria-hidden="true" class="h-6 object-contain" />
                <img src="/images/works/vloer-group4.png" alt="" aria-hidden="true" class="h-6 object-contain" />
              </div>
              <img src="/images/works/vloer-text.png" alt="VLOER-OFFERTE.NL" class="h-4 object-contain" />
            </div>
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p class="font-sans font-semibold text-2xl leading-10 capitalize text-black">Vloer Offerte</p>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-5">
                <CardLink label="VISIT SITE" :diagonal="true" />
                <div class="w-px h-[19px] bg-neutral-400" />
                <CardLink label="VIEW PROJECT" />
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Cloudmazing -->
      <Card>
        <div class="flex flex-col gap-5 pb-8">
          <div class="border-b border-neutral-300 h-[391px] w-full flex flex-col items-center justify-center gap-3 mix-blend-luminosity opacity-80">
            <img src="/images/works/cloudmazing-logo.png" alt="" aria-hidden="true" class="h-16 object-contain" />
            <img src="/images/works/cloudmazing-icon.png" alt="Cloudmazing" class="h-[63px] object-contain" />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p class="font-sans font-semibold text-2xl leading-10 capitalize text-black">Cloudmazing</p>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-5">
                <CardLink label="VISIT SITE" :diagonal="true" />
                <div class="w-px h-[19px] bg-neutral-400" />
                <CardLink label="VIEW PROJECT" />
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
                <Badge variant="dev">FE Development</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- 123declaratie -->
      <Card>
        <div class="flex flex-col gap-5 pb-8">
          <div class="border-b border-neutral-400 h-[391px] w-full flex items-center justify-center mix-blend-luminosity opacity-80">
            <img src="/images/works/declaratie-logo.png" alt="123declaratie" class="w-[280px] object-contain" />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p class="font-sans font-semibold text-2xl leading-10 capitalize text-black">123declaratie</p>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-5">
                <CardLink label="VISIT SITE" :diagonal="true" />
                <div class="w-px h-[19px] bg-neutral-400" />
                <CardLink label="VIEW PROJECT" />
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

    </div>
  </div>
</template>

<script setup lang="ts">
// Inline link sub-component to avoid repetition
const CardLink = defineComponent({
  props: {
    label: { type: String, required: true },
    diagonal: { type: Boolean, default: false },
  },
  template: `
    <a href="#" class="flex items-center gap-2 cursor-pointer group">
      <span class="font-sans font-medium text-xs leading-7 tracking-[1.2px] uppercase text-neutral-600 whitespace-nowrap group-hover:text-neutral-800 transition-colors">{{ label }}</span>
      <img
        :src="diagonal ? '/images/works/arrow-diagonal.svg' : '/images/works/arrow-right.svg'"
        alt=""
        aria-hidden="true"
        :class="diagonal ? 'size-[14.5px] -rotate-45' : 'w-[14.5px] h-[10px]'"
      />
    </a>
  `,
})
</script>
