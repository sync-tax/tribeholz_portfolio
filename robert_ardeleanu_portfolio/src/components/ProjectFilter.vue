<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref("Code");

const projects = ref([
  {
    categories: ["Design", "Code"],
    subTitle: "Design, Development",
    title: "Project1",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: "procedural_art",
    info: "This is a test Project",
  },
  {
    categories: "Design",
    subTitle: "Design",
    title: "Project2",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: "coded_sound",
    info: "This is another test Project",
  },
]);

const filteredProjects = computed(() => {
  if (!activeFilter.value) return projects.value;
  return projects.value.filter((project) =>
    project.categories.includes(activeFilter.value)
  );
});

function updateActiveFilter(filter) {
  if (activeFilter.value === filter) {
    activeFilter.value = null;
  } else {
    activeFilter.value = filter;
  }
}
</script>

<template>
  <nav class="projectNav">
    <li id="listTitle">Filter:</li>
    <li
      v-for="filter in ['Code', 'Design', 'Tutorials']"
      :key="filter"
      :id="activeFilter === filter ? 'activeFilter' : ''"
      @click="updateActiveFilter(filter)"
    >
      {{ filter }}
    </li>
  </nav>
  <div class="projectListContainer">
    <ProjectCard
      v-for="project in filteredProjects"
      :key="project.title"
      :subTitle="project.subTitle"
      :projectTitle="project.title"
      :currentProjectView="project.currentProjectView"
      :imagePath="project.imagePath"
      :projectTag="project.tag"
      :projectInfo="project.info"
    />
  </div>
</template>
