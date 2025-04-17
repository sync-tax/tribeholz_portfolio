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
        title="PDF Portfolio"
        text="Find more designs in my PDF Portfolio!"
      />

      <div class="mainProjectContent">
        <Image src="/project_images/d_portfolio_img1.jpg" alt="Spotlight" />
        <p class="contentNote">
          This portfolio wasn’t meant to be taken too seriously — but have fun
          flipping through it!

          <a
            href="https://drive.google.com/file/d/18GAOEvxXWaD3Pvr4apUIzXjAwTwsZfBV/view?usp=sharing"
            target="_blank"
            >→ Portfolio (PDF)</a
          >
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          I put this PDF portfolio together in my 2D Design class at FH
          Hagenberg. While it doesn’t include every creative project I’ve ever
          made, you’ll find a few more of my designs there.
        </p>

        <h4>Tech</h4>
        <p>
          - Adobe CC <br />
          - Touchdesigner <br />
          - Many more...
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            href="https://drive.google.com/file/d/18GAOEvxXWaD3Pvr4apUIzXjAwTwsZfBV/view?usp=sharing"
            target="_blank"
            >→ Portfolio (PDF) - Download</a
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
