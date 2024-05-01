<template>
    <div class=" flex items-center">
        <div class="w-[214px] flex px-6">
            <img src="~/assets/img/logo.svg" class="max-w-[127px]" alt="">
        </div>
        <form class="flex border border-lighter overflow-hidden max-w-[330px] w-max rounded-2xl h-10">
            <input type="text" placeholder="search here"
                class="px-5 text-base outline-none placeholder:text-dark-beta w-[330px] h-full">
            <a class="flex px-5 items-center justify-center text-md text-natural-alpha">
                <i class="icon-search"></i>
            </a>
        </form>
        <div class="flex items-center ml-auto">
            <img src="~/assets/img/logo-small.svg" class="mr-4" alt="">
            <HeaderSection title="Aptoide App" subtitle="Free and unrestricted apps!" />
            <Btn tagName="a" class="ml-8">
                DOWNLOAD
            </Btn>
        </div>
    </div>
</template>