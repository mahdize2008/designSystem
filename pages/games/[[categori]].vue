<script setup>
import { ref, onMounted } from "vue";
const { data: products } = await useFetch(
  "https://vue-test-6d740-default-rtdb.firebaseio.com/products.json"
);
const { data: gamesData } = await useFetch(
  "https://vue-test-6d740-default-rtdb.firebaseio.com/games.json"
);
const { data: games } = await useFetch(
  "https://vue-test-6d740-default-rtdb.firebaseio.com/games-1.json"
);

let categoriLink = ["Top-free", "Top-grossing", "Top-paid"];
let filterTabActive = ref("Top-free");
let smallCardGames = ref([]);

async function filterGames() {
  if (gamesData._rawValue) {
    smallCardGames.value = gamesData._rawValue.filter((data) => {
      return data.filter.find((res) => res === filterTabActive.value);
    });
  }
}



onMounted(() => {
  filterGames();
});

function filter(e) {
  let filter = e.target.parentElement.dataset.filter;
  filterTabActive.value = filter;
  filterGames();
  number.value=0
}

let showVideo = ref(false);
let videoSrc = ref("");
function videoPlayer(src) {
  showVideo.value = !showVideo.value;
  videoSrc.value = src;
}
const number=ref(1)
</script>

<template>
  <cardsVideoPopop
    :video="videoSrc"
    @removeVideo="videoPlayer"
    v-if="showVideo"
  />
  <div class="container mb-between-section">
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.modern-games-prev-btn',
        nextEl: '.modern-games-next-btn',
      }"
      slides-per-view="auto"
      class="swipers !-m-3 relative"
    >
      <SwiperSlide v-for="product in products" class="!w-fit">
        <LazyCardsCardModern
          :light="product.light"
          :type="product.type"
          :gradient="product.gradient"
          :imageSrc="product.imageSrc"
          :title="product.title"
          :subtitle="product.subtitle"
          :brand="product.brand"
          :logo="product.logo"
          :video="product.video"
          @videoPlayer="videoPlayer"
        >
          {{ product.title }}
        </LazyCardsCardModern>
      </SwiperSlide>
      <div class="modern-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="modern-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>

  <div class="container mb-between-section">
    <HeaderSection>
      Top charts
      <template #link>
        <ul class="flex items-center -mx-1.5 mt-5">
          <li
            class="px-1.5"
            @click="filter"
            v-for="link in categoriLink"
            :data-filter="link"
            :class="{ 'tab-active': filterTabActive === link }"
          >
            <HeaderLink> {{ link }} </HeaderLink>
          </li>
        </ul>
      </template>
    </HeaderSection>
    <Swiper
      :modules="[SwiperGrid, SwiperNavigation]"
      :slides-per-view="3"
      :navigation="{
        prevEl: '.top-charts-games-prev-btn',
        nextEl: '.top-charts-games-next-btn',
      }"
      :grid="{
        rows: 3,
        fill: 'row',
      }"
      class="swipers !-m-3.5 relative"
    >
      <SwiperSlide
        v-for="game in smallCardGames"
        class="game"
        :class="game.filter"
      >
      <!-- {{ game }} -->
        <router-link
          to="/"
          class="p-3.5 block rounded-xl hover:bg-dark-beta/10"
        >
          <LazyCardsSmallCard
            :img="game.img"
            :subtitle="game.subtitle"
            class="text-base font-medium text-dark"
            :number="number++"
          >
            <h2 class="line-clamp-1">
              {{ game.title }}
            </h2>
          </LazyCardsSmallCard>
        </router-link>
      </SwiperSlide>
      <div class="top-charts-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="top-charts-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>

  <div class="container mb-between-section">
    <HeaderSection> Based on your recent activity </HeaderSection>
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

  <div class="container mb-between-section overflow-visible">
    <HeaderSection> Offline games </HeaderSection>
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
    <HeaderSection> Recommended for you </HeaderSection>
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.recommended-games-prev-btn',
        nextEl: '.recommended-games-next-btn',
      }"
      class="swipers !-m-3 relative"
      :slides-per-view="3"
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
      <div class="recommended-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="recommended-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>

  <div class="container mb-between-section">
    <HeaderSection> Multiplayer games </HeaderSection>
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.multiplayer-games-prev-btn',
        nextEl: '.multiplayer-games-next-btn',
      }"
      class="swipers !-m-3 relative"
      :slides-per-view="3"
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
      <div class="multiplayer-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="multiplayer-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>

  <div class="container mb-between-section">
    <HeaderSection> Casual games </HeaderSection>
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.casual-games-prev-btn',
        nextEl: '.casual-games-next-btn',
      }"
      class="swipers !-m-3 relative"
      :slides-per-view="3"
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
      <div class="casual-games-prev-btn btn-navigation prev-btn">
        <i class="icon-left"></i>
      </div>
      <div class="casual-games-next-btn btn-navigation next-btn">
        <i class="icon-right"></i>
      </div>
    </Swiper>
  </div>
</template>
<style>
h1 {
  @apply text-xl;
}
</style>



<!-- function filter(e){
    let filter=e.target.parentElement.dataset.filter;
    filterTabActive.value=filter
    let games=document.getElementsByClassName('game')
    for (const game of games) {
        if(game.classList.contains(filter)){
            game.style.display = 'block'
        }
        else{
            game.style.display = 'none'
        }
    }
} -->