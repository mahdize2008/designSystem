<script setup>
const {video} = defineProps({
  video: {
    type: String,
    default: "https://play.google.com/video/lava/web/player/yt:movie:WeeTSkP0L-E?autoplay=1&amp;authuser=0&amp;embed=play",
  },
})
</script>
<template>
    <div class="w-full h-full fixed top-0 right-0 z-50 bg-black/80" @click="$emit('removeVideo')">
        <iframe class="absolute !top-1/2 !-translate-y-1/2 !right-1/2 !translate-x-1/2 w-[853px] h-[480px] bg-black rounded overflow-hidden" :src="video"></iframe>
    </div>
</template>