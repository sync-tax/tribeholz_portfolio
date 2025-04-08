<script setup>
import { onMounted, nextTick } from "vue";
import Prism from "prismjs";

import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview
        title="PokéMorph"
        text="Alternative evolution animation for Pokémon sprites."
      />
      <div class="mainProjectContent">
        <video autoplay loop muted playsinline style="border-radius: 15px">
          <source src="../../assets/images/pokemorph.webM" type="video/mp4" />
        </video>

        <p class="contentNote" style="text-align: center">Eevee - Evolution</p>

        <iframe
          width="600"
          height="337"
          src="https://www.youtube.com/embed/l1wTkWRXGMg?start=36"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p class="contentNote">Tutorial on YouTube</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <h4>Overview</h4>
        As a huge Pokémon fan I thought that morphing through the entire Gen1
        Pokédex would be a fun freetime activity. <br />
        <p>
          It was not only a great experience but also my first attempt with GLSL
          shaders. It took me a while to get the hang of it - not gonna lie.
        </p>

        <h4>Tools</h4>
        <p>
          - Touchdesigner <br />
          - Python <br />
          - GLSL
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1AwBtOMceYr7AxiBmPK-23IB7UJHPs7WG?usp=sharing"
            >→ .TOX File + Assets</a
          >
          <br />
          <a
            target="_blank"
            href="https://github.com/sync-tax/poke_morph_TD/blob/main/poke_morph.glsl"
            >→ GLSL Code | Github</a
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
