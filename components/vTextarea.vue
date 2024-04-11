<script setup>
let { disabled, size,textLength } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "base",
  },
  textLength:{
    type: Boolean,
    default: true,
  }
});
let error = ref(false);
let textarea = ref('');
function checkError(e) {
  if (e.target.value.length >= 4) {
    error.value = false;
    return;
  }
  error.value = true;
}
function setSize(e) {
  return `textarea-${size}`;
}
</script>


<template>
  <div class="w-2/5 flex flex-wrap items-start justify-between">
    <textarea
      minlength="4"
      maxlength="100"
      placeholder="Text"
      ref="input"
      :disabled="disabled"
      :class="[{ invalid: error }, setSize()]"
      class="textarea"
      @blur="checkError"
      @keyup="checkError"
      cols="1"
      v-model="textarea"
    />
    <span class="block w-fit text-Attention text-sm-plus" v-if="error"
      >Error text</span
    >
    <span class="text-sm text-border ml-auto" v-if="textLength"> {{ textarea.length }}/100 </span>
  </div>
</template>

<style>
.textarea {
  @apply w-full px-2.5 mb-1 py-2 flex items-center justify-center focus:!border-purple [&.invalid]:border-Attention outline-none rounded-sm text-black placeholder:text-border border-spacer_light border h-[90px] invalid:border-Attention disabled:bg-disabled disabled:border-disabled;
}
.textarea.textarea-sm {
  @apply h-[42px];
}
</style>