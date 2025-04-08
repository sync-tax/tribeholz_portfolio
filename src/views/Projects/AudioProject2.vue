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
        title="Chaotic Algorithms"
        text="This is my second - ongoing - series on coded sound. The goal is to
          integrate the SonicPi workflow with Ableton and Touchdesigner."
      />

      <div class="mainProjectContent">
        <iframe
          width="600"
          height="337"
          src="https://www.youtube.com/embed/videoseries?si=TgvwDJsjbmOgdroc&amp;list=PLFLuAZh6tS3LOBqjGSkGZ7ALP3DXZvhIU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p class="contentNote">Playlist - Chaotic Algorhithms</p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <h4>Overview</h4>
        <p>
          The "Chaotic Algorithms" is an ongoing project. However I stopped
          uploading after the second video because I felt stuck in the mindset
          of forcing myself to post on YouTube. So, I decided to step back and
          focus on simply creating.
          <br />
          → After almost 1 year of refining I'm ready to get back to it.
        </p>

        <h4>Tools</h4>
        <p>
          - SonicPi <br />
          - Ruby <br />
          - Touchdesigner
        </p>
      </Collapsible>

      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://github.com/sync-tax/next_stop/blob/main/next_stop/next_stop.rb"
            >→ Next Stop - Ruby File</a
          >
          <br />
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=RvjkTeZztT4&list=PLFLuAZh6tS3LOBqjGSkGZ7ALP3DXZvhIU"
            >→ Playlist | YouTube</a
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
