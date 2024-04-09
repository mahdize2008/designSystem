<template>
        <button class="w-fit rounded h-[48px] flex items-center justify-center cursor-pointer mb-4 last:mb-0 box-border" :class="['text-'+size,px,height,type+'-'+color,textColor,{border : type==='border'}]">
            <i v-if="icon" class="icon-file mr-1.5"></i>
            Button
            <i v-if="icon" class="icon-file ml-1.5"></i>
        </button>
</template>
<script setup>
let {size,color,type,icon}=defineProps(['size','color','type','icon'])
let textColor='text-white'
if (type==='text') {
    textColor=`text-${color}`
}
else if (type==='border') {
    textColor=`text-${color}`
}
else {
    textColor=`text-white`
}
let px='px-14';
let height='h-[48px]';
    if(size==='lg' || !size){
        px='px-14'
        height='h-[48px]'
    }
    else if(size==='md'){
        px='px-7'
        height='h-[40px]'
    }
    else if(size==='sm'){
        px='px-4'
        height='h-[32px]'
    }
    else{
        px='px-14'
        height='h-[48px]'
    }
</script>



