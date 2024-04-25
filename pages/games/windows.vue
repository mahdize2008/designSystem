<script setup>
const { data: games } = await useFetch(
  "https://vue-test-6d740-default-rtdb.firebaseio.com/games-1.json"
);
const { data: banners } = await useFetch(
  "https://vue-test-6d740-default-rtdb.firebaseio.com/banner.json"
);

let showVideo = ref(false);
let videoSrc = ref("");
function videoPlayer(src) {
  showVideo.value = !showVideo.value;
  videoSrc.value = src;
}
</script>

<template>
  <cardsVideoPopop
    :video="videoSrc"
    @removeVideo="videoPlayer"
    v-if="showVideo"
  />

  <div class="container mb-between-section">
    <HeaderSection>
      Play your favorites on the big screen
      <template #subtitle> Google Play Games on PC </template>
    </HeaderSection>
    <Swiper
      :slides-per-view="3"
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.offline-games-prev-btn',
        nextEl: '.offline-games-next-btn',
      }"
      class="swipers !-m-3 relative"
    >
      <SwiperSlide v-for="game in games">
        <router-link to="/" class="p-3 block rounded-xl hover:bg-dark-beta/10">
          <LazyCardsGameCard
            @videoPlayer="videoPlayer"
            :img="game.img"
            :subtitle="game.subtitle"
            :video="game.video"
            :logo="game.logo"
            class="text-base font-medium text-dark"
          >
            <h2 class="line-clamp-1">
              {{ game.title }}
            </h2>
          </LazyCardsGameCard>
        </router-link>
      </SwiperSlide>
      <div class="offline-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="offline-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>

  <div class="container mb-between-section">
    <HeaderSection>
      New releases
      <template #subtitle> Google Play Games on PC </template>
    </HeaderSection>
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.based-games-prev-btn',
        nextEl: '.based-games-next-btn',
      }"
      :slides-per-view="3"
      class="swipers !-m-3 relative"
    >
      <SwiperSlide v-for="game in games">
        <router-link to="/" class="p-3 block rounded-xl hover:bg-dark-beta/10">
          <LazyCardsGameCard
            @videoPlayer="videoPlayer"
            :img="game.img"
            :subtitle="game.subtitle"
            :video="game.video"
            :logo="game.logo"
            class="text-base font-medium text-dark"
          >
            <h2 class="line-clamp-1">
              {{ game.title }}
            </h2>
          </LazyCardsGameCard>
        </router-link>
      </SwiperSlide>
      <div class="based-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="based-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>

  <div class="container mb-between-section" v-for="banner in banners">
    <LazyCardsBanner
      :imageSrc="banner.imageSrc"
      :subtitle="banner.subtitle"
      :logo="banner.logo"
      :name="banner.name"
      :description="banner.description"
      class="text-base font-medium text-dark"
    >
      <h2>
        {{ banner.title }}
      </h2>
    </LazyCardsBanner>
  </div>
</template>
<style>
h1 {
  @apply text-xl;
}
</style>