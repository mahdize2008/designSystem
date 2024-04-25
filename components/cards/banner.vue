<script setup>
import { defineEmits } from "vue";
const { imageSrc, name, description, brand, logo, subtitle } = defineProps({
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
});
</script>

<template>
  <router-link
    to="/"
    class="-m-3 p-3 block rounded-xl hover:bg-dark-beta/10"
  >
  <div class="flex h-[365px] bg-darker-beta rounded-xl overflow-hidden">
      <div class="w-1/2 flex flex-col p-8">
        <div class="grow flex flex-col justify-center">
          <h2 class="text-12xl text-white font-semibold">
            <slot />
          </h2>
          <p class="text-4xl text-white">
            {{ subtitle }}
          </p>
        </div>
        <div v-if="logo" class="flex items-center mt-1.5">
          <img :src="logo" class="w-16 h-16 rounded-xl mr-4" />
          <div class="">
            <h3 class="card-name">{{ name }}</h3>
            <div v-if="description" class="flex items-center">
              <span class="card-description"> {{ description }} </span>
              <span
                class="mx-2 block bg-white !w-[3px] !h-[3px] rounded-full"
              ></span>
              <img :src="brand" class="w-3.5 h-3.5" alt="" />
            </div>
          </div>
          <div class="ml-auto flex flex-col items-center">
            <Btn class="!bg-dark-alpha/50 hover:!bg-dark-alpha/70 !text-white"> install </Btn>
            <span class="block text-2xs font-semibold mt-1.5 text-white">
              In-app purchases
            </span>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img :src="imageSrc" class="h-full max-w-full" />
      </div>
  </div>
  </router-link>
</template>

<style scoped>
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
</style>