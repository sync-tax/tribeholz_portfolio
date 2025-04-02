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
        title="Coding Techno"
        text="This was the first series I created on coding with SonicPi. It focused
          on experimentation and developing a workflow."
      />

      <div class="mainProjectContent">
        <iframe
          width="600"
          height="337"
          src="https://www.youtube.com/embed/videoseries?si=cQ-cdKx3yKNn4xmz&amp;list=PLFLuAZh6tS3IfAgWplNl72bJkq3jWkxeA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p class="contentNote">Playlist - Coding Techno with SonicPi</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          I never intended to explore electronic music production, but that
          changed when I discovered SonicPi. Since then, I've developed a deep
          passion for creative coding. <br />
          <br />
          Today, SonicPi is one of my favorite hobbies — something I truly
          wouldn't want to miss out on."
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <a
          target="_blank"
          href="https://github.com/sync-tax/TechnoSession-1/blob/main/TechnoSession%231.rb"
          >Ruby file for the first jam</a
        >
      </Collapsible>

      <Collapsible title="Technology">
        <a class="refLinks" target="_blank" href="https://sonic-pi.net/"
          >SonicPi</a
        >
        <br />
        <a class="refLinks" target="_blank" href="https://www.ruby-lang.org/en/"
          >Ruby</a
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
