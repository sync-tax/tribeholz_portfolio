<script setup>
import { ref } from "vue";

defineProps({
  src: String,
  alt: String,
});

const isLoaded = ref(false);
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="{ loaded: isLoaded }"
    @load="isLoaded = true"
    class="smooth-img"
    loading="lazy"
  />
</template>

<style scoped>
.smooth-img {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.smooth-img.loaded {
  opacity: 1;
}
</style>
