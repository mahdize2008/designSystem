<script setup>
const { data: bestMobileProducts } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/best-mobile-games.json");
const { data: topDownoadProducts } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/top-download.json");
const { data: games } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/games.json");
const { data: apps } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/apps.json");
const { data: cantStopGames } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/cant-stop-games.json");
const { data: mustHave } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/must-have.json");
const { data: trending } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/trending.json");
const { data: editorials } = await useFetch("https://aptoide-b09c5-default-rtdb.firebaseio.com/editorials.json");
</script>
<template>
    <div class="container mb-between-section">
        <HeaderSection title="Find the best mobile games and apps in Aptoide, your favorite app store!" />
        <LazyBestMobileGame :products="bestMobileProducts" />
    </div>
    <div class="container mb-between-section">
        <div class="bg-gradient-primary px-6 py-4 rounded-3xl">
            <HeaderSection mode="light" title="Top Downloads" icon="trophy" />
            <LazyTopDownload :products="topDownoadProducts" />
        </div>
    </div>
    <div class="container mb-between-section">
        <Banners />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center justify-between">
            <HeaderSection title="Games" icon="game" />
            <NuxtLink class="text-primary text-2xs font-medium block">
                MORE
            </NuxtLink>
        </div>
        <LazyGames :products="games" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center justify-between">
            <HeaderSection title="apps" icon="apps" />
            <NuxtLink class="text-primary text-2xs font-medium block">
                MORE
            </NuxtLink>
        </div>
        <LazyApps :products="apps" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center justify-between">
            <HeaderSection title="Can't Stop Playing"/>
            <NuxtLink class="text-primary text-2xs font-medium block">
                MORE
            </NuxtLink>
        </div>
        <LazyCantStopPlaying :products="cantStopGames" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center justify-between">
            <HeaderSection title="Must Have"/>
            <NuxtLink class="text-primary text-2xs font-medium block">
                MORE
            </NuxtLink>
        </div>
        <LazyMustHave :products="mustHave" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center justify-between">
            <HeaderSection title="Editorials"/>
            <NuxtLink class="text-primary text-2xs font-medium block">
                MORE
            </NuxtLink>
        </div>
        <LazyEditorials :products="editorials" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center justify-between">
            <HeaderSection title="Trending"/>
            <NuxtLink class="text-primary text-2xs font-medium block">
                MORE
            </NuxtLink>
        </div>
        <LazyTrending :products="trending" />
    </div>
</template>
<style>
h1 {
    @apply text-3xl
}
</style>