<script setup>
import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview title="808club.at" text="Website I made for our club" />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/o_808_img1.png"
          alt="Website"
          width="100%"
        />
        <p class="contentNote">Website - 808Club - Wordpress</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          I made this website using Wordpress and Elementor - so basically a
          drag and drop builder.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
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
