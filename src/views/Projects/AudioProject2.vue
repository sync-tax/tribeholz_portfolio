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
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=TgvwDJsjbmOgdroc&amp;list=PLFLuAZh6tS3LOBqjGSkGZ7ALP3DXZvhIU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <p>
          The series started with the track "Next Stop". <br />
          All files available on
          <a
            target="_blank"
            href="https://github.com/sync-tax/next_stop/blob/main/next_stop/next_stop.rb"
            >GitHub</a
          >.
          <br />
          <br />
          However I stopped uploading after the second video because I felt
          stuck in the mindset of forcing myself to post on YouTube. So, I
          decided to step back and focus on simply creating.
          <br />
          <br />
          In the meantime, I’ve incorporated MIDI and multitrack recording into
          my workflow. I also experimented with Touchdesigner quite a bit.
          <br />
          <br />
          The "Chaotic Algorithms" project will be back on track soon.
        </p>
      </Collapsible>

      <Collapsible title="Technology">
        <a class="refLinks" target="_blank" href="https://sonic-pi.net/"
          >SonicPi</a
        >
        <br />
        <a class="refLinks" target="_blank" href="https://www.ableton.com/"
          >Ableton</a
        >
        <br />
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
