<script setup>
let { title, subtitle, views, mode } = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    mode: {
        type: String,
        default: 'dark'
    },
    views: {
        type: String,
        default: '0'
    }
})
function setMode() {
    return `${mode}-mode`
}
</script>
<template>
    <div class="card" :class="setMode()">
        <h2 class="text-base font-medium text-dark line-clamp-1">
            {{ title }}
        </h2>
        <div class="h-[50px] flex flex-col justify-between">
            <p class="text-3xs text-dark line-clamp-2 text-justify">
                {{ subtitle }}
            </p>
            <div class="flex items-center text-2xs text-natural-alpha">
                <i class="icon-view text-sm"></i>
                <span class="px-1 text-3xs">
                    {{ views }}
                </span>
                Views
            </div>
        </div>
    </div>
</template>
<style scoped>
.card.light-mode * {
    @apply !text-white
}
</style>