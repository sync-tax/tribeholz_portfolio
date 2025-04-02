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
        title="TRIBΞHOLZ"
        text="Designs I made for my algorithmic tekno project."
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/d_tribeholz_img1.png"
          alt="SoundCloud Banner"
          width="100%"
        />
        <p class="contentNote">Soundcloud - Banner</p>
        <img
          src="../../assets/images/d_tribeholz_img2.png"
          alt="Logo"
          width="100%"
        />
        <p class="contentNote">Logo - Lettering</p>
        <img
          src="../../assets/images/d_tribeholz_img4.png"
          alt="Printdesign"
          width="100%"
        />
        <p class="contentNote">Printdesign - Soundwall</p>
        <img
          src="../../assets/images/d_tribeholz_img3.png"
          alt="Thumbnails"
          width="100%"
        />
        <p class="contentNote">YouTube - Thumbnails</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          This is my personal project where I mostly do random visuals with TD
          and sound with SonicPi.
          <br />
          <br />
          In the future I will focus more on audio-visual installments like
          music videos and realtime interaction between those two.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          href="https://www.youtube.com/@tribeholz23"
          target="_blank"
          rel="noopener noreferrer"
          >YouTube</a
        >
        <br />
        <a
          href="https://soundcloud.com/tribeholz808"
          target="_blank"
          rel="noopener noreferrer"
          >Soundcloud</a
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
