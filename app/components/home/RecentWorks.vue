<template>
  <div ref="sectionRef" class="relative flex flex-col gap-[54px]">
    <!-- Header -->
    <div class="flex items-end justify-between relative">
      <h2
        :class="visible ? 'animate-slideDown' : 'opacity-0'"
        class="font-sans font-black text-4xl leading-[1.4] uppercase text-black"
      >
        RECENT WORKS
      </h2>

      <!-- "design & development" decorative label -->
      <div
        :class="
          visible ? 'animate-slideDown [animation-delay:800ms]' : 'opacity-0'
        "
        class="absolute right-[360px] -top-[132px] rotate-[15deg] pointer-events-none"
      >
        <p
          class="font-['Gochi_Hand'] text-[34px] leading-normal text-primary-500 text-center whitespace-pre"
        >
          design <br />
          & <br />
          development
        </p>
      </div>

      <!-- Visit all projects -->
      <a
        href="#"
        :class="visible ? 'animate-slideDown' : 'opacity-0'"
        class="flex items-center gap-3 cursor-pointer"
      >
        <span
          class="font-['Gochi_Hand'] text-3xl leading-10 text-neutral-700 whitespace-nowrap"
          >Visit all projects</span
        >
        <img
          src="/images/works/visit-arrow.png"
          alt=""
          aria-hidden="true"
          class="h-[27px] w-[53px] object-cover"
        />
      </a>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-3 gap-x-10 gap-y-[2.26rem]">
      <!-- Rocket Flow -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:80ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-5 pb-[45.5px]">
          <div
            class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
          >
            <img
              src="/images/projects/rocketflow.svg"
              alt="Rocket Flow"
              class="max-h-16 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 project-img"
            />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p
              class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
            >
              Rocket Flow
            </p>
            <div class="flex flex-col gap-8">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
                <Badge variant="dev">FE Development</Badge>
              </div>
              <div class="flex items-center gap-5">
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VISIT SITE</Headline
                  >
                  <Icon
                    name="arrow-diagonal"
                    size="sm"
                    class="text-primary-500"
                  />
                </a>
                <div class="w-px h-[19px] bg-neutral-400" />
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VIEW PROJECT</Headline
                  >
                  <Icon name="arrow-right" size="md" class="text-primary-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- ProphetX -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:160ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-5 pb-[45.5px]">
          <div
            class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
          >
            <img
              src="/images/projects/prophetx.svg"
              alt="ProphetX"
              class="max-h-16 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 project-img"
            />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p
              class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
            >
              ProphetX
            </p>
            <div class="flex flex-col gap-8">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
                <Badge variant="dev">FE Development</Badge>
              </div>
              <div class="flex items-center gap-5">
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VISIT SITE</Headline
                  >
                  <Icon
                    name="arrow-diagonal"
                    size="sm"
                    class="text-primary-500"
                  />
                </a>
                <div class="w-px h-[19px] bg-neutral-400" />
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VIEW PROJECT</Headline
                  >
                  <Icon name="arrow-right" size="md" class="text-primary-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Coach Talk -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:240ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-5 pb-[45.5px]">
          <div
            class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
          >
            <img
              src="/images/projects/coachtalk.svg"
              alt="Coach Talk"
              class="max-h-[140px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 project-img"
            />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p
              class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
            >
              Coach Talk
            </p>
            <div class="flex flex-col gap-8">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
              </div>
              <div class="flex items-center gap-5">
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VISIT SITE</Headline
                  >
                  <Icon
                    name="arrow-diagonal"
                    size="sm"
                    class="text-primary-500"
                  />
                </a>
                <div class="w-px h-[19px] bg-neutral-400" />
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VIEW PROJECT</Headline
                  >
                  <Icon name="arrow-right" size="md" class="text-primary-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Vloer Offerte -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:320ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-5 pb-[45.5px]">
          <div
            class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
          >
            <img
              src="/images/projects/vloer.svg"
              alt="Vloer Offerte"
              class="max-h-16 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 project-img"
            />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p
              class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
            >
              Vloer Offerte
            </p>
            <div class="flex flex-col gap-8">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
              </div>
              <div class="flex items-center gap-5">
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VISIT SITE</Headline
                  >
                  <Icon
                    name="arrow-diagonal"
                    size="sm"
                    class="text-primary-500"
                  />
                </a>
                <div class="w-px h-[19px] bg-neutral-400" />
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VIEW PROJECT</Headline
                  >
                  <Icon name="arrow-right" size="md" class="text-primary-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Cloudmazing -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:400ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-5 pb-[45.5px]">
          <div
            class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
          >
            <img
              src="/images/projects/cloudmazing.svg"
              alt="Cloudmazing"
              class="max-h-[100px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 project-img"
            />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p
              class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
            >
              Cloudmazing
            </p>
            <div class="flex flex-col gap-8">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
                <Badge variant="dev">FE Development</Badge>
              </div>
              <div class="flex items-center gap-5">
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VISIT SITE</Headline
                  >
                  <Icon
                    name="arrow-diagonal"
                    size="sm"
                    class="text-primary-500"
                  />
                </a>
                <div class="w-px h-[19px] bg-neutral-400" />
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VIEW PROJECT</Headline
                  >
                  <Icon name="arrow-right" size="md" class="text-primary-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- 123declaratie -->
      <Card
        :class="
          visible ? 'animate-slideDown [animation-delay:480ms]' : 'opacity-0'
        "
      >
        <div class="flex flex-col gap-5 pb-[45.5px]">
          <div
            class="border-b border-neutral-300 h-[391px] w-full flex items-center justify-center"
          >
            <img
              src="/images/projects/123.svg"
              alt="123declaratie"
              class="max-h-16 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 project-img"
            />
          </div>
          <div class="flex flex-col gap-2 px-6">
            <p
              class="font-sans font-semibold text-2xl leading-10 capitalize text-black"
            >
              123declaratie
            </p>
            <div class="flex flex-col gap-8">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="brand">Logo</Badge>
                <Badge variant="ui">UI + UX</Badge>
              </div>
              <div class="flex items-center gap-5">
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VISIT SITE</Headline
                  >
                  <Icon
                    name="arrow-diagonal"
                    size="sm"
                    class="text-primary-500"
                  />
                </a>
                <div class="w-px h-[19px] bg-neutral-400" />
                <a href="#" class="flex items-center gap-2">
                  <Headline variant="h6" class="!text-neutral-600"
                    >VIEW PROJECT</Headline
                  >
                  <Icon name="arrow-right" size="md" class="text-primary-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { useInView } from "~/composables/useInView";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { sectionRef, visible } = useInView(0.3);
</script>

<style scoped>
.project-img {
  transform: scale(0.9) rotateY(180deg);
  filter: grayscale(1) blur(4px);
  opacity: 0.6;
}
.group:hover .project-img {
  transform: scale(1) rotateY(0deg);
  filter: grayscale(0) blur(0px);
  opacity: 1;
}
</style>
