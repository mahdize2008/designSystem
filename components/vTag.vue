<script setup>
const {size}=defineProps({
    size:{
        type:String,
        default:'md'
    },
    closeTag:{
        type:Boolean,
        default:false
    },
    icon:{
        type:Boolean,
        default:false
    },

})

function setSize(){
    return `tag-${size}`
}
</script>

<template>
  <div class="flex items-center">
    <div class="tag tag-sm" :class="setSize()">
        <i class="icon-Vector-3 text-2xs mr-1.5 text-border" v-if="icon"></i>
        <slot/>
    </div>
    <button class="ml-2" v-if="closeTag">
        <i class="icon-close text-xs"></i>
    </button>
  </div>
</template>

<style>
.tag {
  @apply p-1.5 capitalize rounded text-sm bg-bg_light_grey font-light flex items-center;
}
.tag.tag-sm {
  @apply px-1.5 text-sm;
}
.tag.tag-md {
  @apply px-2.5 text-base;
}
.tag.tag-lg {
  @apply px-3.5 text-md;
}
</style>