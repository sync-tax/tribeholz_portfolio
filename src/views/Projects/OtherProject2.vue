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
        title="RetroPi Build"
        text="My personal RetroPi build using a Raspberry Pi"
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/o_retro_img2.png"
          alt="RetroPi"
          width="70%"
        />
        <p style="text-align: center" class="contentNote">Case - Pokecenter</p>
        <img
          src="../../assets/images/o_retro_img1.png"
          alt="RetroPi"
          width="70%"
        />
        <p style="text-align: center" class="contentNote">Shiny Onyx - :3</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          This was a fun little side project. I basically prepared a little
          suitcase with a screen and the Raspberry plus a Powerbank. <br />Not
          exeptionally beautiful, but it was fun. I play a lot Pokémon ROM hacks
          on that thing.
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          href="https://retropie.org.uk/docs/"
          target="_blank"
          rel="noopener noreferrer"
          >RetroPi</a
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
