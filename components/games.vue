<script setup>
let { products } = defineProps({
    products: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <Swiper slides-per-view="auto" class="mt-2 !overflow-visible" :space-between="16">
        <SwiperSlide class="!w-[136px]" v-for="product of products" :key="product.id">
            <NuxtLink :to="'/games/'+id">
                <Card :title="product.title" size="larg" :logo="product.logo" :point="product.point"/>
            </NuxtLink>
        </SwiperSlide>
    </Swiper>
</template>
<style>
h1 {
    @apply text-xl
}
</style>