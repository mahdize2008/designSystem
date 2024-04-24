<template>
    <router-link class="btn-public" to="/">
        <slot/>
    </router-link>
</template>

<style scoped>
    .btn-public{
        @apply bg-dark/10 px-14 py-2.5 rounded-lg text-xs-plus text-dark-beta font-semibold hover:bg-dark/15 flex items-center justify-center
    }
</style>