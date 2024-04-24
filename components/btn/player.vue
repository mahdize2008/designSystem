<template>
  <div
    @click.prevent="$emit('player')"
    class="p-2 rounded-full hover:bg-black/50 transition-all flex items-center justify-center z-30 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
  >
    <div
      class="video-player flex items-center text-white justify-center bg-dark/70 w-14 h-14 rounded-full"
    >
      <i class="icon-play text-lg"></i>
    </div>
  </div>
</template>