<script setup>
let categoriLink=[
  {
    title:'windows',
    icon:'youtube',
  },
  {
    title:'phone',
    icon:'youtube',
  },
  {
    title:'tablet',
    icon:'youtube',
  },
  {
    title:'tv',
    icon:'youtube',
  },
  {
    title:'chromebook',
    icon:'youtube',
  },
  {
    title:'watch',
    icon:'youtube',
  },
]

function backdropTap(e){
  e.target.style.display="none"
}
</script>


<template>

<div id="backdrop" @click="backdropTap" style="display: none;"></div>
  <!--START-HEADER-->
  <header class="mb-14">
    <div class="flex items-center px-8 -mx-3 mb-6">
      <div class="flex mr-auto px-3">
        <a href="#" class="mr-6 flex items-center">
          <img src="~/assets/img/logo.png" class="h-8" alt="" />
        </a>
        <ul class="header-navbar flex items-center justify-center -mx-4">
          <li class="px-4">
            <router-link
              to="/games"
              class="text-sm capitalize py-5 block text-dark-alpha font-medium hover:text-dark"
            >
              games
            </router-link>
          </li>

          <li class="px-4">
            <router-link
              to="/apps"
              class="text-sm capitalize py-5 block text-dark-alpha font-medium hover:text-dark"
            >
              apps
            </router-link>
          </li>
          <li class="px-4">
            <router-link
              to="/movies"
              class="text-sm capitalize py-5 block text-dark-alpha font-medium hover:text-dark"
            >
              movies & TV
            </router-link>
          </li>
          <li class="px-4">
            <router-link
              to="/books"
              class="text-sm capitalize py-5 block text-dark-alpha font-medium hover:text-dark"
            >
              books
            </router-link>
          </li>
          <li class="px-4">
            <router-link
              to="/kids"
              class="text-sm capitalize py-5 block text-dark-alpha font-medium hover:text-dark"
            >
              kids
            </router-link>
          </li>
        </ul>
      </div>
      <a
        href="#"
        class="px-3 text-lg font-semibold text-dark-alpha hover:text-dark py-1"
      >
        <i class="icon-search"></i>
      </a>
      <a
        href="#"
        class="px-3 text-lg font-semibold text-dark-alpha hover:text-dark py-1"
      >
        <i class="icon-earth"></i>
      </a>
    </div>
    <nav class="header-categori-navbar container">
      <ul class="flex items-center -mx-1.5">
        <li class="px-1.5" v-for="link in categoriLink">
          <router-link :to="'/games/'+link.title" class="block">
            <HeaderLink :icon="link.icon"> {{link.title}} </HeaderLink>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <!--END-HEADER-->
  <slot />
</template>

<style>
.header-navbar a.router-link-active {
  @apply !text-primary border-b-3 border-primary;
}
#backdrop{
  @apply bg-black/80 absolute top-0 right-0 w-full h-full z-40
}
</style>