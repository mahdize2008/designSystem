<script setup>
import { defineEmits } from "vue";
const {
  light,
  type,
  imageSrc,
  name,
  description,
  brand,
  logo,
  subtitle,
  gradient,
  video,
} = defineProps({
  light: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "Now available",
  },
  imageSrc: {
    type: String,
    default: "~/assets/img/p-1.webp",
  },
  name: {
    type: String,
    default: "AFK Journey",
  },
  description: {
    type: String,
    default: "FARLIGHT",
  },
  brand: {
    type: String,
    default: "~/assets/img/picture-1.webp",
  },
  logo: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  gradient: {
    type: String,
    default: "secondary",
  },
  video: {
    type: String,
    default: "",
  },
});

let show = ref(true);

function setGradient() {
  return `gradient-${gradient}`;
}
function setTheme() {
  return light ? "card-light" : "card-dark";
}
</script>

<template>
  <router-link to="/" class="p-3 block rounded-xl hover:bg-dark-beta/10">
    <div
      class="w-[526px] h-[390px] rounded-xl flex flex-col justify-end overflow-hidden relative"
      :class="setTheme()"
    >
      <div class="relative grow" >
        <BtnPlayer v-if="video" @player="$emit('videoPlayer',video)"/>

        <div class="card-type">
          {{ type }}
        </div>
        <img
          :src="imageSrc"
          class="w-full h-[296px] object-contain absolute top-0 right-0"
          alt=""
        />
      </div>

      <div class="card-body" :class="setGradient()">
        <h2 class="card-title">
          <slot />
        </h2>
        <p v-if="subtitle" class="card-subtitle">
          {{ subtitle }}
        </p>
        <div v-if="logo" class="flex items-center mt-1.5">
          <img :src="logo" class="w-12 h-12 rounded-xl mr-4" />
          <div class="">
            <h3 class="card-name">{{ name }}</h3>
            <div v-if="description" class="flex items-center">
              <span class="card-description"> {{ description }} </span>
              <span
                class="mx-2 block bg-black !w-[3px] !h-[3px] rounded-full"
              ></span>
              <img :src="brand" class="w-3.5 h-3.5" alt="" />
            </div>
          </div>
          <div class="ml-auto flex flex-col items-center">
            <Btn> install </Btn>
            <span class="block text-2xs font-semibold mt-1.5 text-dark">
              In-app purchases
            </span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card-body {
  @apply relative z-10 p-6 !pt-0 bg-secondary min-h-[96px] flex flex-col justify-end;
}
.card-body:after {
  @apply content-[''] absolute w-full h-28 top-0 -translate-y-full right-0;
  background: linear-gradient(180deg, #ffffff05 0%, #98d4e9 100%);
}
.card-body.gradient-secondary {
  @apply bg-secondary;
}
.card-body.gradient-brown {
  @apply bg-brown;
}
.card-body.gradient-dark {
  @apply bg-dark-tetha;
}
.card-body.gradient-darker {
  @apply bg-darker;
}
.card-body.gradient-secondary:after {
  background: linear-gradient(180deg, #ffffff05 0%, #98d4e9 100%) !important;
}
.card-body.gradient-brown:after {
  background: linear-gradient(180deg, #ffffff05 0%, #c8968f 100%) !important;
}
.card-body.gradient-dark:after {
  background: linear-gradient(180deg, #ffffff05 0%, #3c4043 100%) !important;
}
.card-body.gradient-darker:after {
  background: linear-gradient(180deg, #ffffff05 0%, #17212f 100%) !important;
}
.card-type {
  @apply absolute top-0 left-0 capitalize px-3 text-white bg-dark/60 font-medium py-1 z-20 rounded-br-lg;
}
.card-light .card-type {
  @apply bg-white/60 text-dark;
}
.card-title {
  @apply text-2xl text-white font-semibold relative z-10 mb-1 line-clamp-2 leading-7;
}
.card-subtitle {
  @apply text-md text-white;
}
.card-name {
  @apply text-md text-white;
}
.card-description {
  @apply text-sm-plus text-white;
}

.card-light .card-title,
.card-light .card-subtitle,
.card-light .card-name,
.card-light .card-description {
  @apply !text-black;
}
</style>