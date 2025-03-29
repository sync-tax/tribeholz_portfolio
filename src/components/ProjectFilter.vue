<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref("TRIBΞHOLZ");

const projects = ref([
  //TRIBΞHOLZ
  {
    categories: ["TRIBΞHOLZ"],
    subTitle: "tutorials",
    title: "Touchdesigner",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TD", "#DaVinci"],
    info: "A collection of TD tutorials I uploaded on YouTube.",
  },
  {
    categories: ["TRIBΞHOLZ"],
    subTitle: "designs",
    title: "Procedural Printdesigns",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TD", "#Illustrator"],
    info: "Printdesigns I made using procedural methods with TD.",
  },
  {
    categories: ["TRIBΞHOLZ"],
    subTitle: "coded sound",
    title: "Chaotic Algorhithms",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#SonicPi", "#Ruby", "#Ableton"],
    info: "Mostly Techno jams I did using SonicPi. Not exactly clean sound, but getting better.",
  },
  {
    categories: ["TRIBΞHOLZ"],
    subTitle: "tool",
    title: "VJ Setup v1.0",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TD", "#Python", "#MIDI"],
    info: "I started building my TD VJ-Setup for a gig in the Ars Electronica Deep Space.",
  },
  {
    categories: ["TRIBΞHOLZ"],
    subTitle: "emulation station",
    title: "RetroPi Build",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#RasPi", "#Linux", "#Filezilla"],
    info: "I built my own - somewhat - portable Pokémon themed retro gaming console. ",
  },
  //--------------------------------------------------------------------------------
  //DURCH
  {
    categories: ["DURCH"],
    subTitle: "branding",
    title: "DURCH",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#AdobeCC"],
    info: "The DURCH Designs where made by a friend and myself. I mostly focused on digitalizing and refining stuff.",
  },
  {
    categories: ["DURCH"],
    subTitle: "analog",
    title: "Printdesigns",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Procreate", "#AdobeCC", "#Screenprint"],
    info: "Various print designs I drew by hand. While I made most sketches using pen and paper, I had to digitalize them using software.",
  },
  {
    categories: ["DURCH"],
    subTitle: "procedural",
    title: "Printdesigns",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TD", "#AdobeCC"],
    info: "Various print designs I made using Touchdesigner. I picked specific frames of moving visuals.",
  },
  //--------------------------------------------------------------------------------
  //808Club
  {
    categories: ["808CLUB"],
    subTitle: "branding",
    title: "808Club",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#AdobeCC"],
    info: "The designs where made together with a friend. I refined and digitalized it to use for stickers, beachflags and more.",
  },
  {
    categories: ["808CLUB"],
    subTitle: "website",
    title: "808club.at",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Wordpress", "#Elementor"],
    info: "Designed and developed the 808Club website using the Wordpress CMS.",
  },
  {
    categories: ["808CLUB"],
    subTitle: "event",
    title: "House of Arts",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Organisation"],
    info: "As a part of the organisation team I was responsible for design, marketing and media technology.",
  },
  {
    categories: ["808CLUB"],
    subTitle: "event",
    title: "Game of Skate",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#AdobeCC"],
    info: "I am not a skater but I help with flyer designs and such where I can.",
  },
  {
    categories: ["808CLUB"],
    subTitle: "event",
    title: "808Spotlight",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#TD", "#AdobeCC", "#DaVinci"],
    info: "I was responsible for the visuals and also helped with marketing.",
  },
  //--------------------------------------------------------------------------------
  //FHHGB
  {
    categories: ["FH HAGENBERG"],
    subTitle: "portfolio website",
    title: "arro.at",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Vue", "#THREE", "#Figma"],
    info: "During the Hypermedia class I had the oportunity to develop this portfolio website.",
  },
  {
    categories: ["FH HAGENBERG"],
    subTitle: "data visualisation",
    title: "Dead Internet Report",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Excel", "#AdobeCC"],
    info: "During the Media Studies class we were prompted to do research on a specific topic and visualize the results in an info sheet.",
  },
  {
    categories: ["FH HAGENBERG"],
    subTitle: "things",
    title: "Other Stuff",
    currentProjectView: "/TestProject",
    imagePath: "/src/assets/images/chicken.png",
    tag: ["#Photography", "#Blender", "&More"],
    info: "This is just a collection of smaller yet still interesting assignments. It contains, 2D&3D Design, Photography and more.",
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
        v-for="filter in ['TRIBΞHOLZ', 'DURCH', '808CLUB', 'FH HAGENBERG']"
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
