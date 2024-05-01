<template>
    <header class="pt-3 h-[84px] pr-6">
        <Header/>
    </header>


    <div class="flex overflow-hidden w-full relative h-[calc(100vh-84px)]">

        <Sidebar/>
        <div class="!w-[calc(100%-214px)] overflow-y-auto overflow-x-hidden pr-6">
            <slot/>
            <footer class="py-10">
                <Footer/>
            </footer>
        </div>
    
    </div>


</template>

<style>
.menu-link{
    @apply [&.router-link-active]:bg-primary [&.router-link-active]:text-white text-natural-alpha bg-white flex items-center justify-start pl-12 text-md py-[18px] w-full rounded-r-3xl
}
.menu-link i{
    @apply mr-4 text-xl
}
</style>