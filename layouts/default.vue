<template>
  <div class="mb-10 -mx-4">
      <router-link
        class="px-8 bg-purple py-2.5 rounded-md mx-4 text-white"
        to="/"
        >index</router-link
      >
    <router-link
      class="px-8 bg-purple py-2.5 rounded-md mx-4 text-white"
      to="/buttons"
      >buttons</router-link
    >
    <router-link
      class="px-8 bg-purple py-2.5 rounded-md mx-4 text-white"
      to="/notifications"
      >notifications</router-link
    >
    <router-link
      class="px-8 bg-purple py-2.5 rounded-md mx-4 text-white"
      to="/inputs"
      >inputs</router-link
    >
  </div>
  <slot />
</template>