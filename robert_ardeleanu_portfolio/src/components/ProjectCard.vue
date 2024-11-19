<script setup>
defineProps({
  subTitle: String,
  projectTitle: String,
  projectTags: Array,
  projectInfo: String,
  currentProjectView: String,
  imagePath: String,
});
</script>

<template>
  <div class="projectContainer">
    <div class="projectLeftSection">
      <h4>{{ subTitle }}</h4>
      <h2>{{ projectTitle }}</h2>
      <div class="projectInfoContainer">
        <div class="projectTags">
          <p v-for="tag in projectTags" :key="tag">{{ tag }}</p>
        </div>
        <div class="projectInfo">
          <p>{{ projectInfo }}</p>
        </div>
      </div>
      <RouterLink :to="currentProjectView" class="projectRoute">
        <p class="projectLink">View Project</p>
      </RouterLink>
    </div>
    <div class="projectRightSection">
      <RouterLink :to="currentProjectView" class="projectRouteIMG">
        <img
          :src="imagePath"
          alt="Image of the current project card."
          width="500px"
        />
      </RouterLink>
    </div>
  </div>
</template>
