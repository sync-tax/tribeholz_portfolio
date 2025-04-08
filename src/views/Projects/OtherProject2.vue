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
        title="RetroPi Build"
        text="My personal RetroPi build using a Raspberry Pi"
      />

      <div class="mainProjectContent">
        <Image src="src/assets/images/o_retro_img2.png" alt="RetroPi" />
        <p style="text-align: center" class="contentNote">Case - Pokecenter</p>

        <Image src="src/assets/images/o_retro_img1.png" alt="SHINYY" />
        <p style="text-align: center" class="contentNote">Shiny Onyx - :3</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <h4>Overview</h4>
        <p>
          This was a fun little side project. I basically prepared a little
          suitcase with a screen and the Raspberry plus a Powerbank. <br />Not
          exeptionally beautiful, but it was fun. I play a lot Pokémon ROM hacks
          on that thing.
        </p>

        <h4>Tools</h4>
        <p>
          - Raspberry Pi <br />
          - RetroPi OS <br />
          - Filezilla <br />
          - Popsicle sticks & paint
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
