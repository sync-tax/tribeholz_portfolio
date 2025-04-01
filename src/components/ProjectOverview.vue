<script setup>
const props = defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <div class="textProjectContent">
    <h2>{{ title }}</h2>
    <p>
      {{ text }}
    </p>
  </div>
</template>
