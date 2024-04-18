<script setup>
let {value,active,type}=defineProps({
  value:{
    type:String,
    default:'tab'
  },
  active:{
    type:String,
    default:'tab 1'
  },
  type:{
    type:String,
    default:'row'
  },
})
function setType(){
  return `tab-${type}`
}
  // }
</script>


<template>
    <div class="tab" :class="[{'tab-active' : active===value},setType()]" @click="$emit('checkActive')" >
      {{value}}
    </div>
</template>

<style>
.tab {
  @apply px-6 capitalize text-lg flex items-center justify-center h-full border-b-4 border-spacer_light cursor-pointer;
}
.tab-col .tab {
  @apply px-0 w-36 py-6 !border-b-0 border-l-4;
}
.tab.tab-active {
  @apply border-purple;
}
</style>