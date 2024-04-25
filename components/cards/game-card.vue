<script setup>
const { subtitle, star, img , logo , video } = defineProps({
  subtitle: {
    type: String,
    default: "",
  },
  star: {
    type: Number,
    default: 0,
  },
  logo:{
    type:String,
    default:''
  },
  img: {
    type: String,
    default: "",
  },
  video: {
    type: String,
    default: "",
  },
});
</script>

<template>
    <div class="w-full h-[228px] rounded-lg overflow-hidden flex items-center justify-center mb-3 relative">
      <BtnPlayer v-if="video" @player="$emit('videoPlayer',video)"/>
        <img :src="img" class="min-w-full min-h-full object-contain" alt="">
    </div>
  <div class="card-body">
    <img
      :src="logo"
      class="w-16 h-16 rounded-xl mr-3.5"
    />
    <div>
        <slot/>
        <p class="text-dark-alpha text-sm font-medium">
            {{ subtitle }}
        </p>
        <div class="flex items-center text-sm text-dark-alpha">
            {{ star }}
            <i class="icon-star text-3xs text-dark-alpha ml-1"></i>
        </div>
    </div>
  </div>
</template>

<style scoped>
.card-body{
    @apply flex items-center
}
</style>