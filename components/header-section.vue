<script setup>
let { title , subtitle , icon , mode } = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    mode:{
        type: String,
        default: 'dark'
    }
})
function setMode(){
    return `${mode}-mode`
}
</script>

<template>
    <div class="header-section" :class="setMode()">
        <div class="mb-1.5 flex items-center">
            <i v-if="icon" class="mr-2 text-lg" :class="'icon-'+icon"></i>
            <h2 class="text-base font-medium leading-none ">
                {{ title }}
            </h2>
        </div>
        <p v-if="subtitle" class="text-xs-plus leading-none">
            {{ subtitle }}
        </p>
    </div>
</template>

<style scoped>
.header-section.dark-mode{
    @apply !text-dark
}
.header-section.light-mode{
    @apply !text-white
}
</style>