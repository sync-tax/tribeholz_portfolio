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
        title="Screenprints"
        text="Printdesigns I made for our screenprinting collective. → DURCH"
      />

      <div class="mainProjectContent">
        <Image src="/project_images/d_durch_img3.jpg" alt="Printdesign" />
        <p class="contentNote">Printdesign - Big Brother - Procreate & TD</p>

        <Image src="/project_images/d_durch_img2.jpg" alt="Printdesign" />
        <p class="contentNote">Printdesign - Random Doodle - Procreate</p>

        <Image src="/project_images/d_durch_img4.jpg" alt="Printdesign" />
        <p class="contentNote">Printdesign - Bananana - TD</p>

        <Image src="/project_images/d_durch_img1.jpg" alt="Printdesign" />
        <p class="contentNote">
          Printdesign - Beeware - Ink Marker & Illustrator
        </p>

        <Image src="/project_images/d_durch_img5.jpg" alt="Printdesign" />
        <p class="contentNote">Printdesign - VOID - Touchdesigner</p>

        <Image src="/project_images/d_durch_img6.jpg" alt="Printdesign" />
        <p class="contentNote">
          Printdesign - Shroompa Mario - Inkpens & Procreate
        </p>

        <Image src="/project_images/d_durch_img7.jpg" alt="Printdesign" />
        <p class="contentNote">Printdesign - Wond - Procreate</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          A couple of friends and I started a small artist collective where we
          create print designs and screen print them in my home workshop.
        </p>

        <h4>Tools</h4>
        <p>
          - Screenprinting stuff <br />
          - Pens & Paper <br />
          - Designsoftware
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            href="https://www.instagram.com/durch.durch.durch/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Instagram @durch.durch.durch</a
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
