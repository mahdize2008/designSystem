<script setup>
let { icon, to } = defineProps({
  icon: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "windows",
  },
});

function setIcon() {
  return `icon-${icon}`;
}
</script>

<template>
  <div
    class="text-sm cursor-pointer flex items-center capitalize border border-dark-alpha/30 px-4 rounded-full py-1 text-dark-alpha font-medium hover:bg-dark-alpha/10"
  >
    <i v-if="icon" class="mr-2 text-md" :class="setIcon()"></i>
    <slot />
  </div>
</template>

<style scoped>
a.router-link-active div {
  @apply !text-primary !bg-primary/10 !border-primary/10;
}

.tab-active div {
  @apply !text-primary !bg-primary/10 !border-primary/10;
}
</style>