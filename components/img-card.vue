<script setup>
let { img , tag} = defineProps({
    img: {
        type: String,
        default: ''
    },
    tag:{
        type:String,
        default:''
    }
})
</script>
<template>
    <div class="w-full h-[168px] rounded-2xl overflow-hidden mb-2">
        <div v-if="tag" class="absolute top-1.5 text-white text-2xs uppercase bg-dark left-1.5 rounded-full py-1 px-3">
            {{tag}}
        </div>
        <img :src="img" class="w-full h-full" alt="">
    </div>
</template>
<style>
h1 {
    @apply text-xl
}
</style>