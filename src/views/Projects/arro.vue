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
        title="arro.at"
        text="My personal portfolio website, built with Vue.js"
      />

      <div class="mainProjectContent">
        <Image src="/project_images/d_websites_img2.png" alt="Website" />
        <p class="contentNote">made with ♡ and a whole lot of coffee^^</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          "arro" is a shorthand for my name - Ardeleanu Robert. This portfolio
          is a work in progress, and I’ll continue to expand it as I grow my
          skills and develop new projects.
        </p>

        <h4>Tech</h4>
        <p>
          - VS Code <br />
          - HTML / SCSS / Vue.js <br />
          - THREE <br />
          - Vite <br />
          - Netlify
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://github.com/sync-tax/tribeholz_portfolio"
            >→ Codebase on GitHub</a
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
