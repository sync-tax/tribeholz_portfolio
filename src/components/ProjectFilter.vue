<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref(localStorage.getItem("activeFilter") || "AUDIO");

const projects = ref([
  //AUDIO
  {
    categories: ["AUDIO"],
    title: "Coding Techno",
    currentProjectView: "/AudioProject1",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#CodingTechno", "#SonicPi", "#Ruby"],
  },
  {
    categories: ["AUDIO"],
    title: "Chaotic Algorithms",
    currentProjectView: "/AudioProject2",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#MusicVideo", "#SonicPi", "#Ableton", "#Touchdesigner"],
  },
  {
    categories: ["AUDIO"],
    title: "MIDI Boilerplate",
    currentProjectView: "/AudioProject3",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Tool", "#SonicPi", "#Ruby"],
  },
  //VISUAL

  {
    categories: ["VISUAL"],
    title: "Spotlight",
    currentProjectView: "/VisualProject1",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Performance", "#DeepSpace", "#Touchdesigner", "#MIDI"],
  },
  {
    categories: ["VISUAL"],
    title: "PokéMorph",
    currentProjectView: "/VisualProject2",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Education", "#YouTube", "#Touchdesigner"],
  },
  {
    categories: ["VISUAL"],
    title: "Bananana",
    currentProjectView: "/VisualProject3",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Education", "#YouTube", "#Touchdesigner"],
  },
  //DESIGN
  {
    categories: ["DESIGN"],
    title: "TRIBEHOLZ",
    currentProjectView: "/DesignProject1",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#AdobeCC", "#Affinity", "#Procreate"],
  },
  {
    categories: ["DESIGN"],
    title: "DURCH",
    currentProjectView: "/DesignProject2",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Touchdesigner", "#AdobeCC", "#Affinity"],
  },
  {
    categories: ["DESIGN"],
    title: "808CLUB",
    currentProjectView: "/DesignProject3",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#AdobeCC", "#Affinity", "#Procreate"],
  },

  //OTHER
  {
    categories: ["OTHER"],
    title: "808club.at",
    currentProjectView: "/OtherProject1",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Wordpress", "#Elementor"],
  },
  {
    categories: ["OTHER"],
    title: "RetroPi Build",
    currentProjectView: "/OtherProject2",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#RaspberryPi", "#EmulationStation", "#Linux"],
  },
  {
    categories: ["OTHER"],
    title: "Dead Internet",
    currentProjectView: "/OtherProject3",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Vue", "#THREE", "#Vite", "#SASS", "#Figma"],
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
    localStorage.setItem("activeFilter", filter);
  }
}
</script>

<template>
  <div class="projectsWrapper">
    <div class="projectNav">
      <li
        v-for="filter in ['AUDIO', 'VISUAL', 'DESIGN', 'OTHER']"
        :key="filter"
        :id="activeFilter === filter ? 'activeFilter' : ''"
        @click="updateActiveFilter(filter)"
      >
        {{ filter }}
      </li>
    </div>

    <div class="projectListContainer">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :subTitle="project.subTitle"
        :projectTitle="project.title"
        :currentProjectView="project.currentProjectView"
        :imagePath="project.imagePath"
        :projectTags="project.tag"
        :projectInfo="project.info"
      />
    </div>
  </div>
</template>
