<script setup>
let { color, design, icon, tagName ,href} = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  design: {
    type: String,
    default: "public",
  },
  icon: {
    type: String,
    default: "",
  },
  tagName: {
    type: String,
    default: "div",
  },
  href: {
    type: String,
    default: "div",
  },
});

function setDesign() {
  return `btn-${design}`;
}

function setIcon() {
  return `icon-${icon}`;
}

function setColor() {
  return `btn-${color}`;
}
</script>

<template>
  <component :is="tagName" class="btn" :class="[setColor(), setDesign()]">
    <slot />
    <i v-if="icon" :class="setIcon()"></i>
  </component>
</template>

<style scoped>
.btn{
    @apply cursor-pointer
}
.btn.btn-primary {
  @apply !bg-gradient-primary !text-white;
}
.btn.btn-white {
  @apply !bg-white !text-dark;
}
.btn.btn-public {
  @apply px-8 py-3 text-2xs font-medium rounded-2xl;
}
.btn.btn-swiper-right {
  @apply !w-10 !h-10 flex items-center justify-center rounded-full text-base !absolute z-50 top-1/2 -translate-y-1/2 right-0 font-bold;
}
.btn.btn-swiper-left {
  @apply !w-10 !h-10 flex items-center justify-center rounded-full text-base !absolute z-50 top-1/2 -translate-y-1/2 left-4 font-bold;
}
</style>