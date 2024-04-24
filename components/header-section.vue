<script setup>

</script>
<template>
  <div class="mb-8">
    <h2 class="text-xl text-dark font-semibold">
        <slot/>
    </h2>
    <slot name="subtitle"/>
    <slot name="link"/>
  </div>
</template>
