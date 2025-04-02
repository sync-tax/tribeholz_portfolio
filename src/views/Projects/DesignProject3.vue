<script setup>
import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview title="808CLUB" text="Designs I made for the 808Club Linz" />

      <div class="mainProjectContent">
        <img src="../../assets/images/d_808_img1.png" alt="Stuff" width="80%" />
        <p style="text-align: center" class="contentNote">
          Beachflags - Sticker - Illustrator
        </p>
        <img src="../../assets/images/d_808_img2.png" alt="Flyer" width="50%" />
        <p style="text-align: center" class="contentNote">
          Flyer - House of Arts #1- Photoshop & Procreate
        </p>
        <img src="../../assets/images/d_808_img5.png" alt="Flyer" width="50%" />
        <p style="text-align: center" class="contentNote">
          Flyer - House of Arts #2- Photoshop
        </p>
        <img src="../../assets/images/d_808_img3.png" alt="Flyer" width="50%" />
        <p style="text-align: center" class="contentNote">
          Flyer - Game of Skate #1- Affinity Photo
        </p>
        <img src="../../assets/images/d_808_img4.png" alt="Flyer" width="50%" />
        <p style="text-align: center" class="contentNote">
          Flyer - Game of Skate #2- Affinity Photo
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          The 808Club is an art & culture organisation based in Linz. Together
          with some friend, we organize different events and such.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          href="https://www.instagram.com/808club_linz/"
          target="_blank"
          rel="noopener noreferrer"
          >Instagram</a
        >
        <br />
        <a href="https://808club.at/" target="_blank" rel="noopener noreferrer"
          >Website</a
        >
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
