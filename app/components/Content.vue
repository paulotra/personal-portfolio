<template>
  <section
    class="vertical-bg w-full bg-white rounded-5xl pb-10 pt-12 px-8 overflow-hidden shadow-soft-y]"
  >
    <div class="relative dotted-bg">
      <div
        class="max-w-[1365px] mx-auto absolute top-[-50px] bottom-[-50px] left-0 right-0"
      >
        <LaserStroke class="left-0" />
        <LaserStroke
          class="left-[428px]"
          direction="up"
          style="animation-delay: 3s"
        />
        <LaserStroke class="left-[468px]" style="animation-delay: 4s" />
        <LaserStroke
          class="right-0"
          direction="up"
          style="animation-delay: 1s"
        />
        <LaserStroke class="right-[428px]" style="animation-delay: 2s" />
        <LaserStroke
          class="right-[468px]"
          direction="up"
          style="animation-delay: 5s"
        />
      </div>
      <div class="max-w-[1365px] mx-auto pt-[100px] pb-[200px]">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.dotted-bg {
  background-image: url("/images/dotted.svg");
  background-size: auto;
  background-repeat: repeat;
  background-position: calc(50% - 19.5px) 6.5px;
}

.vertical-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/images/vertical-lines.svg");
  background-size: auto;
  background-repeat: repeat-y;
  background-position: center top;
  pointer-events: none;
}
</style>
