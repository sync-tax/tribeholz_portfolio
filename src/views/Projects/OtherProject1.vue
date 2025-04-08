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
        title="Spotlight"
        text="Tiny-desk like concert at the AEC Deep Space."
      />

      <div class="mainProjectContent">
        <Image src="/project_images/o_events_img5.png" alt="Spotlight" />
        <p class="contentNote">Testing - SL</p>
      </div>

      <Overview
        style="margin-top: 60px"
        title="House of Arts"
        text="Art gallery event for all kinds of local artists."
      />

      <div class="mainProjectContent">
        <Image src="/project_images/o_events_img1.png" alt="HoA" />
        <p class="contentNote">Concert - HoA</p>

        <Image src="/project_images/o_events_img3.png" alt="HoA" />
        <p class="contentNote">Exhibition - HoA</p>
      </div>

      <Overview
        style="margin-top: 60px"
        title="Game of Skate"
        text="Skate contest for the skating community."
      />

      <div class="mainProjectContent">
        <Image src="/project_images/o_events_img4.png" alt="GoS" />
        <p class="contentNote">Skate Challenge - GoS</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Spotlight">
        <p>
          For this event, I took care of the visual setup and live visuals
          during the concert. I also helped out by cutting reels and other
          media. <br />
          <br />

          The YouTube video of the concert will be online soon!
        </p>
      </Collapsible>
      <Collapsible title="House of Arts">
        <p>
          I was in charge of various design tasks like creating flyers and also
          organizing equipment. <br />
          <br />
          Alongside a friend, I also handled all the tech-related gear—both in
          the concert room and in the darkroom, which was equipped with three
          projectors.
        </p>
      </Collapsible>

      <Collapsible title="Game of Skate">
        <p>
          Even though I’m not a skater, I designed most of the flyers for the
          event. I also helped out at the bar and cruised around taking photos
          throughout the day.
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a
            href="https://www.instagram.com/p/DG5g0ggN2Oq/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Reel Spotlight</a
          >
          <br />
          <a
            href="https://808club.x-net.dev/bildergalerie/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Bildergalerie 808Club</a
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
