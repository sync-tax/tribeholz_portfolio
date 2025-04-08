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
        title="Websites"
        text="Websites I built and designed in my free time."
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/d_websites_img1.png"
          alt="Website"
          width="100%"
        />
        <p class="contentNote">
          <a target="_blank" href="https://808club.x-net.dev/"
            >→ www.808club.at</a
          >
        </p>

        <img
          src="../../assets/images/d_websites_img2.png"
          alt="Website"
          width="100%"
        />
        <p class="contentNote">
          <a
            target="_blank"
            href="https://github.com/sync-tax/tribeholz_portfolio"
            >→ Codebase on GitHub</a
          >
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="808club.at">
        <h4>Overview</h4>
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

      <Collapsible title="arro.at">
        <h4>Overview</h4>
        <p>
          Short form for "Ardeleanu Robert". My portfolio website which will
          grow in size and quality over time.
        </p>

        <h4>Tools</h4>
        <p>
          - Vue <br />
          - SASS <br />
          - THREE <br />
          - Vite
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a
            href="https://808club.x-net.dev/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Website 808Club</a
          >
          <br />
          <a href="https://arro.at/" target="_blank" rel="noopener noreferrer"
            >→ Website ARRO</a
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
