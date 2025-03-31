<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref("AUDIO");

const projects = ref([
  //AUDIO
  {
    categories: ["AUDIO"],
    title: "Live Jams",
    currentProjectView: "/AudioProject1",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#SonicPi", "#Supercollider", "#Ruby"],
  },
  {
    categories: ["AUDIO"],
    title: "Next Stop",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#SonicPi", "#Ruby", "#Ableton", "#Touchdesigner"],
  },
  {
    categories: ["AUDIO"],
    title: "Forest Trip",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#SonicPi", "#Ruby", "#Touchdesigner"],
  },
  //VISUAL
  {
    categories: ["VISUAL"],
    title: "TD Tutorials",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#YouTube", "#Touchdesigner", "#Davinci_Resolve"],
  },
  {
    categories: ["VISUAL"],
    title: "VJ-Setup v1.0",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Touchdesigner", "#Python", "#MIDI"],
  },
  //DESIGN
  {
    categories: ["DESIGN"],
    title: "TRIBΞHOLZ",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Touchdesigner", "#AdobeCC", "#Affinity"],
  },
  {
    categories: ["DESIGN"],
    title: "DURCH",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#AdobeCC", "#Affinity", "#Procreate"],
  },
  {
    categories: ["DESIGN"],
    title: "808CLUB",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#AdobeCC", "#Affinity", "#Procreate"],
  },
  //OTHER
  {
    categories: ["OTHER"],
    title: "arro.at",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Vue", "#THREE", "#Vite", "#SASS", "#Figma"],
  },
  {
    categories: ["OTHER"],
    title: "808club.at",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#Wordpress", "#Elementor"],
  },
  {
    categories: ["OTHER"],
    title: "RetroPi Build",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#RaspberryPi", "#EmulationStation", "#Linux"],
  },
  {
    categories: ["OTHER"],
    title: "Dead Internet",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/placeholderimg.jpg",
    tag: ["#AdobeCC", "#Excel"],
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

    <div class="shortDescriptionContainer">
      <p v-if="activeFilter === 'TRIBΞHOLZ'">
        ... various audio-visual and creative coding projects ツ
      </p>
      <p v-if="activeFilter === 'DURCH'">
        ... all sorts of projects from my printing workshop ツ
      </p>
      <p v-if="activeFilter === '808CLUB'">
        ... different events I helped organizing & more ツ
      </p>
      <p v-if="activeFilter === 'FH HAGENBERG'">
        ... what I did during my studies at FH Hagenberg ツ
      </p>
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
