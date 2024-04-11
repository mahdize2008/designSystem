
<template>
    <form class="flex justify-between flex-wrap items-start mb-4 last:mb-0">
        <VInput class="mb-6" />
        <VInput class="mb-6" disabled/>
        <VInput class="mb-6" icon/>
    </form>
    <form class="flex justify-between flex-wrap items-start mb-4 last:mb-0">
        <VTextarea class="mb-6" size="sm" />
        <VTextarea class="mb-6" size="sm" :textLength="false"/>
        <VTextarea class="mb-6" />
        <VTextarea class="mb-6" :textLength="false"/>
    </form>
    <form class="flex justify-between flex-wrap items-start mb-4 last:mb-0">
        <VCounter/>
        <VCounter disabled/>
    </form>
</template>