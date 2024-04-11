<script setup>
let { disabled, size } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
    let counter=ref(null);
</script>
<template>
  <div class="counter flex border border-spacer_light rounded-sm active:border-purple text-purple" :class="{disabled : disabled}">
    <button class="h-11 w-11" @click.prevent="counter>=1 && !disabled ? counter-- : null">
      <i class="icon-minus"></i>
    </button>
    <input min="0" placeholder="0" type="text" class="w-11 bg-transparent text-center outline-none" v-model="counter"/>
    <button class="h-11 w-11" @click.prevent="!disabled ? counter++ : null">
      <i class="icon-Plus"></i>
    </button>
  </div>
</template>


<style>
    .counter.disabled{
        @apply bg-spacer_light text-border active:border-border
    }
</style>