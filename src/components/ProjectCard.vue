<script setup>
defineProps({
  projectTitle: String,
  projectTags: Array,
  currentProjectView: String,
  imagePath: String,
});
</script>

<template>
  <RouterLink :to="currentProjectView" class="project-list">
    <div
      class="projectContainer"
      :style="{ backgroundImage: `url(${imagePath})` }"
    >
      <div class="projectLeftSection">
        <h2>
          {{ projectTitle }}
        </h2>

        <div class="projectTags">
          <p v-for="tag in projectTags" :key="tag">{{ tag }}</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
