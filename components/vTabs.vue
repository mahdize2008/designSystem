<script setup>
const {type,values}=defineProps({
    type:{
        type:String,
        default:'row'
    },
    values:{
        type:Array,
        default:[]
    },
})
let active=ref('tab 1')
function setActive(val){
  active.value=val
}
function setType(){
  return `tab-${type}`
}
</script>

<template>
  <ul class="w-fit px-4 -mx-4 flex justify-around h-20 bg-spacer_light rounded-md" :class="setType()">
    <li v-for="value of values" class="px-4">
      <VTab :value="value" :active="active" @checkActive="setActive(value)" :type="type"/>
    </li>
  </ul>
</template>
<style>
.tab-col{
  @apply flex-col h-fit w-fit py-5 !px-0
}
.tab-col li{
  @apply !px-0
}
</style>