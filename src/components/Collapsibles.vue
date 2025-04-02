<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  text: String,
});

const isVisible = ref(false);
</script>

<template>
  <div class="collapsibleWrapper">
    <div class="collapspreview" @click="isVisible = !isVisible">
      <h4>{{ title }}</h4>
      <img
        src="../assets/images/plus-icon.svg"
        alt="Icon to Open a collapse section"
        :class="{ rotated: isVisible }"
      />
    </div>
    <transition name="ease-in">
      <div v-if="isVisible" class="collapsibleContent">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.rotated {
  transform: rotate(45deg);
  transition: transform 0.5s ease;
}

.ease-in-enter-active,
.ease-in-leave-active {
  transition: opacity 0.2s ease-in;
  overflow: hidden;
}

.ease-in-enter-from,
.ease-in-leave-to {
  opacity: 0;
  max-height: fit-content;
}
</style>
