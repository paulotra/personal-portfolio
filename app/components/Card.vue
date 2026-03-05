<template>
  <div class="group relative border border-transparent hover:border-primary-500 transition-colors hover:bg-white">
    <div class="absolute bg-neutral-300 w-screen h-[1px] top-0 left-[-100%]"></div>
    <div class="absolute bg-neutral-300 w-screen h-[1px] bottom-0 left-[-100%]"></div>
    <!-- Corner decorations -->
    <img src="/images/corner-tl.svg" alt="" aria-hidden="true" class="absolute -top-[20px] -left-[20px] size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <img src="/images/corner-tr.svg" alt="" aria-hidden="true" class="absolute -top-[20px] -right-[20px] size-5 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
    <img src="/images/corner-br.svg" alt="" aria-hidden="true" class="absolute -bottom-[20px] -right-[20px] size-5 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
    <img src="/images/corner-bl.svg" alt="" aria-hidden="true" class="absolute -bottom-[20px] -left-[20px] size-5 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
    <slot />
  </div>
</template>
