<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref("procedural_art");

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
    <li id="listTitle">Project Filter:</li>
    <li
      v-for="filter in [
        'procedural_art',
        'coded_sound',
        'tech_tutorials',
        'web_development',
        'different_designs',
        'random_stuff',
      ]"
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

<script>
export default {
  data() {
    return {
      projects: [
        {
          subTitle: "procedural_art",
          title: "Project1",
          currentProjectView: "/TestProject",
          imagePath: "/src/assets/images/chicken.png",
          tag: "procedural_art",
          info: "This is a test Project",
        },
        {
          subTitle: "project1 sub",
          title: "Project2",
          currentProjectView: "/TestProject",
          imagePath: "/src/assets/images/chicken.png",
          tag: "coded_sound",
          info: "This is another test Project",
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (!this.activeFilter) return this.projects;
      return this.projects.filter(
        (project) => project.tag === this.activeFilter
      );
    },
  },
};
</script>
