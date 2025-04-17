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
        title="808club.at"
        text="A website I created for our Arts & Culture club."
      />

      <div class="mainProjectContent">
        <Image src="/project_images/d_websites_img1.jpg" alt="Website" />

        <p class="contentNote">www.808club.at</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          I made this website for our club to post upcoming events on and a
          bunch of other stuff.<br />
        </p>
        <h4>Tools</h4>
        <p>
          - Wordpress <br />
          - Elementor <br />
          - Other Plugins
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a href="https://808club.at" target="_blank" rel="noopener noreferrer"
            >→ Website 808Club</a
          >
          <br />
          <a
            href="https://www.instagram.com/808club_linz/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Instagram @808club_linz</a
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
