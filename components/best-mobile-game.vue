<script setup>
let { products } = defineProps({
  products: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <Swiper
    :modules="[SwiperNavigation]"
    :navigation="{
      prevEl: '.prev-best-mobile-game',
      nextEl: '.next-best-mobile-game',
    }"
    slides-per-view="auto"
    class="mt-2 !overflow-visible relative"
    :space-between="16"
  >
    <SwiperSlide
      class="!w-[345px]"
      v-for="product of products"
      :key="product.id"
    >
      <NuxtLink :to="'/games/' + id">
        <ImgCard :img="product.img" />
        <Card
          :title="product.title"
          :logo="product.logo"
          :point="product.point"
        />
      </NuxtLink>
    </SwiperSlide>
    <Btn class="prev-best-mobile-game" icon="left-arrow" color="white" design="swiper-left" />
    <Btn class="next-best-mobile-game" icon="right-arrow" color="white" design="swiper-right" />
  </Swiper>
</template>
<style>
h1 {
  @apply text-xl;
}
</style>