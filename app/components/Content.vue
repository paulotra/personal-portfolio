<template>
  <section class="vertical-bg w-full bg-white rounded-5xl pb-10 pt-20 px-8 overflow-hidden">
    <div class="dotted-bg relative">
      <div class="max-w-[1365px] mx-auto py-[100px]">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.dotted-bg {
  background-image: url('/images/dotted.svg');
  background-size: auto;
  background-repeat: repeat-y;
  background-position: center top;
}

.vertical-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/vertical-lines.svg');
  background-size: auto;
  background-repeat: repeat-y;
  background-position: center top;
  pointer-events: none;
}
</style>
    