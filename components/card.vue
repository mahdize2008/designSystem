<script setup>
let { title, logo, point, design, size, mode } = defineProps({
    title: {
        type: String,
        default: ''
    },
    logo: {
        type: String,
        default: ''
    },
    point: {
        type: Number,
        default: 0
    },
    design: {
        type: String,
        default: 'row'
    },
    size: {
        type: String,
        default: 'small'
    },
    mode:{
        type: String,
        default: 'dark'
    }
})
function setDesign() {
    return `card-${design}`
}
function setSize() {
    return `card-${size}`
}
function setMode() {
    return `${mode}-mode`
}
</script>
<template>
    <div class="card" :class="[setDesign(), setSize(),setMode()]">
        <img :src="logo"
            class="w-10 h-10 rounded-2xl" alt="">
        <div class="card-body">
            <h3 class="text-xs font-semibold text-dark line-clamp-2">
                {{ title }}
            </h3>
            <div class="flex items-center text-xs-plus font-medium text-natural-alpha">
                <i class="icon-star text-2xs mr-1"></i>
                {{ point === 0 ? '-' : point }}
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    @apply flex items-center
}

.card.card-row img {
    @apply mr-2
}

.card.card-col img {
    @apply mb-2
}

.card.card-col {
    @apply flex-col items-start
}

.card.card-col img {
    @apply w-[112px] h-[112px]
}

.card.card-col .card-body {
    @apply flex flex-col justify-between h-[55px]
}

.card.light-mode *{
    @apply !text-white
}

.card.card-larg{
    @apply  items-stretch
}
.card.card-larg .card-body{
    @apply flex flex-col justify-between
}
.card.card-larg img{
    @apply w-14 h-14
}
</style>