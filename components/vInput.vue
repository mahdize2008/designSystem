<script setup>
let { disabled, icon } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});
let error = ref(false);
let type = ref("text");
if (icon) {
  type.value = "password";
} else {
  type.value = "text";
}5
function setType(){
    type.value= type.value==='password' ? 'text' : 'password'
}
function checkError(e) {
  if (e.target.value.length >= 4) {
    error.value = false;
    return;
  }
  error.value = true;
}
</script>


<template>
  <div class="w-2/5">
    <div class="flex relative mb-1">
      <input
        minlength="4"
        maxlength="10"
        placeholder="Text"
        ref="input"
        :type="type"
        :disabled="disabled"
        :class="[{ invalid: error }]"
        class="w-full px-2.5 block focus:!border-purple [&.invalid]:border-Attention outline-none rounded-sm text-black placeholder:text-border border-spacer_light border h-[42px] invalid:border-Attention disabled:bg-disabled disabled:border-disabled"
        @blur="checkError"
        @keyup="checkError"
      />
      <a
        v-if="icon"
        @click="setType()"
        class="px-4 flex items-center justify-center absolute top-0 h-full right-0"
      >
        <i class="icon-show"></i>
      </a>
    </div>
    <span class="block w-fit text-Attention text-sm-plus ml-auto" v-if="error"
      >Error text</span
    >
  </div>
</template>
<style>
.input{}
</style>