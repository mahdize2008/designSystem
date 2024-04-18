<template>
  <div class="flex items-center justify-between mb-8">
      <router-link
        class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
        to="/"
        >index</router-link
      >
    <router-link
      class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
      to="/buttons"
      >buttons</router-link
    >
    <router-link
      class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
      to="/notifications"
      >notifications</router-link
    >
    <router-link
      class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
      to="/inputs"
      >inputs</router-link
    >
    <router-link
      class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
      to="/tags"
      >tags</router-link
    >
    <router-link
      class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
      to="/tabs"
      >tabs</router-link
    >
    <router-link
      class="px-4 bg-purple py-2 text-sm-plus rounded-md text-white"
      to="/tables"
      >tables</router-link
    >
  </div>
  <slot />
</template>