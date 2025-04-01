<script setup>
import { ref } from "vue";

const isTechnologyVisible = ref(false);
const isAboutVisible = ref(false);
</script>

<template>
  <div class="project">
    <section class="backOverview">
      <RouterLink to="/" class="backLink">
        <img
          src="../../assets/images/arrowicon.svg"
          alt="back_arrow"
          width="20px"
        />
        <p>Back</p>
      </RouterLink>
    </section>

    <section class="projectOverview">
      <div class="textProjectContent">
        <h2>Chaotic Algorithms</h2>
        <p>
          This is my second - ongoing - series on coded sound. The goal is to
          integrate the SonicPi workflow with Ableton and Touchdesigner.
        </p>
      </div>
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
      <div class="collapsibleWrapper">
        <div class="collapspreview" @click="isAboutVisible = !isAboutVisible">
          <h4>About</h4>
          <img
            src="../../assets/images/plus-icon.svg"
            alt="Icon to Open a collapse section"
            :class="{ rotated: isAboutVisible }"
          />
        </div>
        <transition name="ease-in">
          <p v-if="isAboutVisible">
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
            In the meantime, I’ve incorporated MIDI and multitrack recording
            into my workflow. I also experimented with Touchdesigner quite a
            bit.
            <br />
            <br />
            The "Chaotic Algorithms" project will be back on track soon.
          </p>
        </transition>
      </div>

      <div class="collapsibleWrapper">
        <div
          class="collapspreview"
          @click="isTechnologyVisible = !isTechnologyVisible"
        >
          <h4>Technology</h4>
          <img
            src="../../assets/images/plus-icon.svg"
            alt="Icon to Open a collapse section"
            :class="{ rotated: isTechnologyVisible }"
          />
        </div>
        <transition name="ease-in">
          <p v-if="isTechnologyVisible">
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
          </p>
        </transition>
      </div>
    </section>
  </div>
</template>

<style scoped>
.rotated {
  transform: rotate(45deg);
  transition: transform 0.5s ease;
}

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
