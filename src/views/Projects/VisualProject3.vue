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
        title="Bananana"
        text="Just about applying a spiral-like appeal to all sorts of stuff."
      />

      <div class="mainProjectContent">
        <iframe
          width="600"
          height="337"
          src="https://www.youtube.com/embed/093l7at3phA?si=ZN2Z0kvI5Tzvf4Xa"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p class="contentNote">Easy Feedback technique tutorial</p>

        <img src="../../assets/images/chicken.png" alt="Chicken" width="100%" />
        <p class="contentNote">Don't look at this chicken</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>I like spirals</p>
      </Collapsible>
      <Collapsible title="Resources">
        <a
          href="https://drive.google.com/drive/folders/1Mo06E5bS4IUPuELJgVocbKGODV_-2vMJ?usp=drive_link"
          target="_blank"
          >.TOX-File</a
        >
      </Collapsible>
      <Collapsible title="Technology">
        <a class="refLinks" target="_blank" href="https://derivative.ca/"
          >Touchdesigner</a
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
