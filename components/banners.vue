<script setup>

</script>

<template>
    <ul class="flex -mx-2">
        <li class="px-2">
            <NuxtLink class="rounded-3xl bg-secondary w-[345px] px-6 flex items-center h-full py-2">
                <img src="~/assets/img/trophy.svg" class="h-[65px] mr-2" alt="">
                <HeaderSection title="Earn Money" subtitle="Beat other players with e-Skills" />
                <i class="icon-right text-dark text-xs-plus ml-auto"></i>
            </NuxtLink>
        </li>
        <li class="px-2">
            <NuxtLink class="rounded-3xl bg-white shadow-lighter w-[345px] px-6 flex items-center h-full py-2">
                <img src="~/assets/img/appc.svg" class="h-[65px] mr-2" alt="">
                <HeaderSection title="A Bonus in Every Purchase" subtitle="Discover everything about AppCoins" />
                <i class="icon-right text-dark text-xs-plus ml-auto"></i>
            </NuxtLink>
        </li>
        <li class="px-2">
            <NuxtLink class="rounded-3xl bg-white overflow-hidden w-[345px] px-6 flex items-center h-full py-2 relative">
                <img src="~/assets/img/banner-background.svg" class="absolute top-0 right-0 w-full h-full" alt="">
                <div class="relative z-10 flex items-center justify-end w-full">
                    <HeaderSection title="Spin & Play" subtitle="Try your luck and discover new games." />
                <i class="icon-right text-dark text-xs-plus ml-2"></i>
                </div>
            </NuxtLink>
        </li>
    </ul>
</template>
