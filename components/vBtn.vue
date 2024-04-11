<template>
  <button class="btn" :class="[setColor(),setSize(),setBtnType()]"
  >
    <i v-if="icon.length && iconPlace==='left' || iconPlace===true" :class="'icon-'+icon" class="mr-1.5"></i>
    Button
    <i v-if="icon.length && iconPlace==='right' || iconPlace===true" :class="'icon-'+icon" class="ml-1.5"></i>
  </button>
</template>
<script setup>
let { size, color, type, icon ,iconPlace} = defineProps({
  size:{
    type:String,
    default:'base'
  },
  color:{
    type:String,
    default:'purple',
  },
  type:{
    type:String,
    default:'bg'
  },
  icon:{
    type:String,
    default:''
  },
  'iconPlace':{
    type:[String,Boolean],
    default:'right'
  }
});
function setColor(){
  return `btn-${color}`
}
function setSize(){
  return `btn-${size}`
}
function setBtnType(){
  return `btn-${type}`
}
console.log(icon,iconPlace);
</script>
<style>
.btn{
  @apply w-fit rounded h-[40px] flex items-center justify-center cursor-pointer mb-4 last:mb-0 box-border text-white px-8
}
.btn-outline{
  @apply !bg-transparent
}
.btn-text{
  @apply !bg-transparent !border-none
}
.btn-lg{
  @apply h-[48px] px-12
}
.btn-sm{
  @apply h-[32px] px-4
}
.btn-purple{
  @apply bg-purple border-2 border-purple
}
.btn-hint_text{
  @apply bg-hint_text border-2 border-hint_text
}
.btn-border{
  @apply bg-border border-2 border-border
}
.btn-disabled{
  @apply bg-disabled border-2 border-disabled
}
.btn-outline.btn-purple,.btn-text.btn-purple{
  @apply !text-purple
}
.btn-outline.btn-hint_text,.btn-text.btn-hint_text{
  @apply !text-hint_text
}
.btn-outline.btn-border,.btn-text.btn-border{
  @apply !text-border
}
.btn-outline.btn-disabled,.btn-text.btn-disabled{
  @apply !text-disabled
}
</style>


