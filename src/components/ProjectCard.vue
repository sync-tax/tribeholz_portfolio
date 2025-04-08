<script setup>
defineProps({
  projectTitle: String,
  projectTags: Array,
  currentProjectView: String,
  imagePath: String,
});
</script>

<template>
  <div
    class="projectContainer"
    :style="{ backgroundImage: `url(${imagePath})` }"
  >
    <RouterLink :to="currentProjectView" class="project-list">
      <div class="projectLeftSection">
        <h2>
          {{ projectTitle }}
        </h2>

        <div class="projectTags">
          <p v-for="tag in projectTags" :key="tag">{{ tag }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
