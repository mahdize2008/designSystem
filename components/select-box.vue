<script setup>
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
const selected=ref('English')
const show=ref(false);
</script>
<template>
    <div class="relative">
        <div class="relative z-10 bg-white px-4 rounded-2xl flex items-center border w-44 h-11 text-dark text-sm border-dark cursor-pointer" @click="show=!show">
            {{selected}}
            <i class="icon-down text-primary text-xs ml-auto"></i>
        </div>
        <ul v-show="show" class="max-h-[228px] overflow-y-auto absolute pt-14 z-0 top-0 w-44 rounded-2xl bg-white shadow-lighter-alpha">
            <li v-for="item of items">
                <a href="" class="py-1.5 block hover:bg-lighter px-4 text-sm-plus text-darker">
                    {{ item }}
                </a>
            </li>
        </ul>
    </div>
</template>