<script setup>
import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
import Image from "../../components/Image.vue";
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview
        title="Event Posters"
        text="Poster & Flyer Designs I made for the 808Club."
      />

      <div class="mainProjectContent">
        <div class="imageContainer">
          <Image src="/project_images/d_808_img2.jpg" alt="Flyer" />
          <Image src="/project_images/d_808_img3.jpg" alt="Flyer" />
        </div>

        <p style="text-align: center" class="contentNote">
          Flyer - House of Arts #1- Affinity & Procreate
        </p>

        <p style="text-align: center" class="contentNote">
          Flyer - Game of Skate #1- Affinity
        </p>

        <div class="imageContainer">
          <Image src="/project_images/d_808_img5.jpg" alt="Flyer" />
          <Image src="/project_images/d_808_img4.jpg" alt="Flyer" />
        </div>
        <p style="text-align: center" class="contentNote">
          Flyer - House of Arts #2- Photoshop | Event sadly canceled :(
        </p>

        <p style="text-align: center" class="contentNote">
          Flyer - Game of Skate #2- Affinity
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          The 808Club is an art and culture collective based in Linz. Together
          with a group of friends, we organize various events and creative
          projects.
        </p>
        <h4>Role</h4>
        <p>
          As a board member, I contribute to event organization, create designs,
          and manage the club’s web presence.
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a
            href="https://www.instagram.com/808club_linz/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Instagram @808club_linz</a
          >
          <br />
          <a
            href="https://808club.x-net.dev/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Website 808Club</a
          >
        </p>
      </Collapsible>
    </section>
  </div>
</template>

<style scoped>
.ease-in-enter-active,
.ease-in-leave-active {
  transition: opacity 0.2s ease-in;
  overflow: hidden;
}

.ease-in-enter-from,
.ease-in-leave-to {
  opacity: 0;
  max-height: fit-content;
}
</style>
