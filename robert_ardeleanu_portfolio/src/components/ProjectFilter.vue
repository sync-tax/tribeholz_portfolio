<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref("CODE");

const projects = ref([
  {
    categories: ["CODE", "TUTORIALS"],
    subTitle: "Fragment Shader",
    title: "PokéMorph",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#GLSL", "#Python", "#TouchDesigner"],
    info: "The idea was to create a custom evolution animation for Pokémons. Altough it was an absolute brainfuck at times, I really enjoyed exploring GLSL shaders.",
  },
  {
    categories: ["TUTORIALS"],
    subTitle: "TD Tutorial",
    title: "Spiral Banana",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TouchDesigner"],
    info: "This is a beginner friendly TouchDesigner tutorial, exploring the Feedback TOP and the strengths of channel operators.",
  },
  {
    categories: ["TUTORIALS"],
    subTitle: "TD Tutorial",
    title: "Funky Audiospectrum",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TouchDesigner"],
    info: "This is a beginner friendly TouchDesigner tutorial on how to build an audiospectrum visualizer in TouchDesigner.",
  },
  {
    categories: ["TUTORIALS"],
    subTitle: "TD Tutorial",
    title: "Displaced Instancing",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TouchDesigner"],
    info: "This is a beginner friendly TouchDesigner tutorial on how to use instancing and displacing the output using noise.",
  },
  {
    categories: ["TUTORIALS"],
    subTitle: "TD Tutorial",
    title: "Caching Caleidoscope",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TouchDesigner"],
    info: "This is a beginner friendly TouchDesigner tutorial on how to make a basic caleidoscopic effect and then tune by using a cached feedback loop.",
  },
  {
    categories: ["DESIGN", "CODE"],
    subTitle: "Web-Portfolio",
    title: "TRIBΞHOLZ",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Vue", "#THREE", "#SASS", "#Figma"],
    info: "In terms of the Hypermedia class at the university of applied sciences Hagenberg, I set myself the challenge to build a SPA portfolio-site using Vue.js.",
  },
  {
    categories: ["FUNSTUFF"],
    subTitle: "RetroPi",
    title: "PokéMulation",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#RaspberryPi", "#EmulationStation"],
    info: "I build my custom Raspi case and placed it inside a tiny suitcase to have a portable retro gamestation. Currently working on a custom UI theme.",
  },
  {
    categories: ["FUNSTUFF", "CODE"],
    subTitle: "Coded Sound",
    title: "ChaoticAlgorithms",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#SonicPi", "#Ableton"],
    info: "Writing code while composing soundtracks? Hell yeah, I instantly fell in love with SonicPi and love jamming with it eversince.",
  },
  {
    categories: ["DESIGN"],
    subTitle: "since 2019",
    title: "Screenprints",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Affinity", "#Adobe CC", "Procreate"],
    info: "Quality shirts with nice designs usually come with a hefty pricetag. Since I am chronically broke, I decided to make my own. Heck what a great idea that was.",
  },
  {
    categories: ["DESIGN"],
    subTitle: "Artist Collective",
    title: "808CLUB",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Affinity", "#Wordpress"],
    info: "Together with a friend I applied a facelift to our clubs design. Within the club I am part of the organization team and the main web & print designer.",
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
  <div class="projectNav">
    <li
      v-for="filter in ['CODE', 'DESIGN', 'TUTORIALS', 'FUNSTUFF']"
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
</template>
