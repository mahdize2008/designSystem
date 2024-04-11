<script setup>
    let {icon,type,outline}=defineProps({
        icon:{
            type:String,
            default:'warning'
        },
        type:{
            type:String,
            default:'warning'
        },
        outline:{
            type:Boolean,
            default:false
        }
    })
    function setIcon(){
        return `icon-${icon}`
    }
    function setType(){
        return `toast-${type}`
    }
</script>
<template>
    <div class="toast" :class="[setType(),{'toast-outline' : outline}]">
        <div class="toast-nav"></div>
        <div class="toast-body">
            <div class="toast-body-icon">
                <i :class="setIcon()"></i>
            </div>
            <slot/>
            <a class="toast-body-close" @click="$emit('closeToast')">
                <i class="icon-close text-white"></i>
            </a>
        </div>
    </div>
</template>

<style>
.toast{
    @apply flex rounded-lg overflow-hidden
}
.toast-warning .toast-body{
    @apply !bg-Error
}
.toast-warning .toast-body .toast-body-icon i{
    @apply !text-Error
}
.toast-warning .toast-nav{
    @apply !bg-Error/80
}
.toast-error .toast-body{
    @apply !bg-Attention !text-white 
}
.toast-error .toast-body .toast-body-icon i{
    @apply !text-Attention
}
.toast-error .toast-nav{
    @apply !bg-Attention/80 !text-white 
}
.toast-inform .toast-body{
    @apply !bg-purple
}
.toast-inform .toast-body .toast-body-icon i{
    @apply !text-purple
}
.toast-inform .toast-nav{
    @apply !bg-purple/80
}
.toast-success .toast-body{
    @apply !bg-Approval
}
.toast-success .toast-body .toast-body-icon i{
    @apply !text-Approval 
}
.toast-success .toast-nav{
    @apply !bg-Approval/80
}
.toast-outline .toast-body{
    @apply !border-2 !border-l-0 border-spacer_light !bg-transparent !text-black !items-start
}
.toast-outline .toast-body .toast-body-icon i{
    @apply text-3xl
}
.toast-outline .toast-body .toast-body-icon{
    @apply w-14 h-14
}
.toast-outline .toast-body .toast-body-close i{
    @apply !text-border text-base
}
.toast-body{
    @apply w-full p-3.5 flex items-center bg-Error rounded-r-lg
}
.toast-nav{
    @apply bg-Error/80 w-3
}
.toast-body-close{
    @apply py-1 px-1 block ml-auto
}
.toast-body-icon{
    @apply w-12 h-12 bg-bg_light_grey flex items-center justify-center rounded-full mr-4 shrink-0
}
.toast-body-icon i{
    @apply text-Error text-xl
}
</style>
