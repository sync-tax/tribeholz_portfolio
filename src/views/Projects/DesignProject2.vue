<script setup>
import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview
        title="DURCH"
        text="Printdesigns I made for our screenprinting collective."
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/d_durch_img3.png"
          alt="Printdesign"
          width="100%"
        />
        <p class="contentNote">Printdesign - Big Brother - Procreate & TD</p>
        <img
          src="../../assets/images/d_durch_img2.png"
          alt="Printdesign"
          width="100%"
        />
        <p class="contentNote">Printdesign - Random Doodle - Procreate</p>
        <img
          src="../../assets/images/d_durch_img4.png"
          alt="Printdesign"
          width="100%"
        />
        <p class="contentNote">Printdesign - Bananana - TD</p>
        <img
          src="../../assets/images/d_durch_img1.png"
          alt="Printdesign"
          width="100%"
        />
        <p class="contentNote">
          Printdesign - Beeware - Ink Marker & Illustrator
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          Together with a couple of friends we started a screenprint collective.
          We design and print all this stuff on our own.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          href="https://www.instagram.com/durch.durch.durch/"
          target="_blank"
          rel="noopener noreferrer"
          >Instagram</a
        >
        <br />
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
