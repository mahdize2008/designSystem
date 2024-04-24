<script setup>
const { subtitle, star, img ,number } = defineProps({
  subtitle: {
    type: String,
    default: "",
  },
  star: {
    type: Number,
    default: 4.5,
  },
  img: {
    type: String,
    default: "",
  },
  number: {
    type: Number,
    default: 1,
  },
  
});
const num=ref(1)
if (number<100) {
    num.value=number
}
</script>

<template>
  <div
    class="card"
  >
    <span class="block px-2 mr-3 text-dark-alpha text-md">
        {{number < 100 ? number : 1}}
    </span>
    <img
      :src="img"
      class="w-16 h-16 rounded-xl mr-3.5"
    />
    <div>
        <slot/>
        <p class="text-dark-alpha text-sm font-medium">
            {{ subtitle }}
        </p>
        <div class="flex items-center text-sm text-dark-alpha">
            {{ star }}
            <i class="icon-star text-3xs text-dark-alpha ml-1"></i>
        </div>
    </div>
  </div>
</template>

<style scoped>
.card{
    @apply flex items-center
}
</style>