<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref(localStorage.getItem("activeFilter") || "OTHER");

const projects = ref([
  //AUDIO
  {
    categories: ["AUDIO"],
    title: "Coding Techno",
    currentProjectView: "/AudioProject1",
    imagePath: "/bg_images/a_1.png",
    tag: ["#LiveSession", "#SonicPi"],
  },
  {
    categories: ["AUDIO"],
    title: "Chaotic Algorithms",
    currentProjectView: "/AudioProject2",
    imagePath: "/bg_images/a_2.png",
    tag: ["#MusicVideo", "#SP", "#TD"],
  },
  {
    categories: ["AUDIO"],
    title: "MIDI Boilerplate",
    currentProjectView: "/AudioProject3",
    imagePath: "/bg_images/a_3.png",
    tag: ["#Code", "#Ruby"],
  },
  //VISUAL

  {
    categories: ["VISUAL"],
    title: "VJ-Setup v1.0",
    currentProjectView: "/VisualProject1",
    imagePath: "/bg_images/v_1.png",
    tag: ["#TD", "#VJ", "#MIDI"],
  },
  {
    categories: ["VISUAL"],
    title: "PokéMorph",
    currentProjectView: "/VisualProject2",
    imagePath: "/bg_images/v_2.png",
    tag: ["#Tutorial", "#GLSL", "#TD"],
  },
  {
    categories: ["VISUAL"],
    title: "Bananana",
    currentProjectView: "/VisualProject3",
    imagePath: "/bg_images/v_3.png",
    tag: ["#Tutorial", "#TD"],
  },
  //DESIGN
  {
    categories: ["DESIGN"],
    title: "Websites",
    currentProjectView: "/DesignProject1",
    imagePath: "/bg_images/d_1.png",
    tag: ["#Webdesign", "#Frontend", "#CMS"],
  },
  {
    categories: ["DESIGN"],
    title: "Screenprints",
    currentProjectView: "/DesignProject2",
    imagePath: "/bg_images/d_2.png",
    tag: ["#Screenprint", "#Art"],
  },
  {
    categories: ["DESIGN"],
    title: "Branding",
    currentProjectView: "/DesignProject3",
    imagePath: "/bg_images/d_3.png",
    tag: ["#Different", "#Stuff"],
  },

  //OTHER
  {
    categories: ["OTHER"],
    title: "Events",
    currentProjectView: "/OtherProject1",
    imagePath: "/bg_images/o_1.png",
    tag: ["#HoA", "#GoS", "#SL"],
  },
  {
    categories: ["OTHER"],
    title: "RetroPi Build",
    currentProjectView: "/OtherProject2",
    imagePath: "/bg_images/o_2.png",
    tag: ["#RasPi", "#Emulation", "#Linux"],
  },
  {
    categories: ["OTHER"],
    title: "Dead Internet",
    currentProjectView: "/OtherProject3",
    imagePath: "/bg_images/o_3.png",
    tag: ["#DataVisualisation", "#MediaStudies"],
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
      <TransitionGroup name="project" tag="div" class="project-list">
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
      </TransitionGroup>
    </div>
  </div>
</template>
