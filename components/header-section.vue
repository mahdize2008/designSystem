<template>
  <div class="mb-8">
    <h2 class="text-xl text-dark font-semibold">
        <slot/>
    </h2>
    <p class="text-xs text-dark-alpha font-medium">
        <slot name="subtitle"/>
    </p>
    <slot name="link"/>
  </div>
</template>
