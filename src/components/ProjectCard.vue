<script setup>
defineProps({
  projectTitle: String,
  projectTags: Array,
  currentProjectView: String,
  imagePath: String,
});
</script>

<template>
  <TransitionGroup name="project" tag="div" class="project-list">
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
  </TransitionGroup>
</template>

<style scoped>
.project-enter-active,
.project-leave-active {
  transition: opacity 0.1s ease;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
}

.project-enter-to,
.project-leave-from {
  opacity: 1;
}
</style>
