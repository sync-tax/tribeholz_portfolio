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
    <div class="projectLeftSection">
      <div class="projectLeftSectionSeparator">
        <h2>
          {{ projectTitle }}
        </h2>
        <div class="projectInfoContainer">
          <div class="projectTags">
            <p v-for="tag in projectTags" :key="tag">{{ tag }}</p>
          </div>
        </div>
      </div>
      <RouterLink :to="currentProjectView" class="projectRoute">
        <p class="projectLink">View Project</p>
      </RouterLink>
    </div>
  </div>
</template>
