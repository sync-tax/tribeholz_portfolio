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
        title="808Spotlight"
        text="A concert we organized at Ars Electronica Deep Space. | Video on YouTube soon →"
      />

      <div class="mainProjectContent">
        <Image src="/project_images/o_events_img5.jpg" alt="Spotlight" />
        <p class="contentNote">Intro Visual | 808</p>

        <Image src="/project_images/o_events_img1.jpg" alt="Spotlight" />
        <p class="contentNote">Visual | Luzius P</p>

        <Image src="/project_images/o_events_img2.jpg" alt="Spotlight" />
        <p class="contentNote">Visual | Blue</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          This project aimed to create an interactive realtime visual experience
          for the 808Spotlight concert.
        </p>

        <h4>Role</h4>
        <p>
          I designed and built the visual system and integrated it with a MIDI
          controller to trigger and manipulate procedural visuals in real-time.
          I also performed the visualisation during the concert.
        </p>

        <h4>Tools</h4>
        <p>
          - Touchdesigner <br />
          - Python <br />
          - MIDI Controller
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a target="_blank" href="https://808club.x-net.dev/808-spotlight/"
            >→ Website Entry</a
          >
          <br />
          <a target="_blank" href="https://www.instagram.com/p/DG5g0ggN2Oq/"
            >→ Promo Reel</a
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
