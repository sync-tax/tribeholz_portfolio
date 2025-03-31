<script setup>
import { ref } from "vue";

const isTechnologyVisible = ref(false);
const isDetailsVisible = ref(false);
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
        <p>Back to project overview</p>
      </RouterLink>
    </section>

    <section class="projectOverview">
      <div class="textProjectContent">
        <h2>TD Tutorials</h2>
        <p>A collection of tutorials I did on Touchdesigner.</p>
      </div>
      <div class="mainProjectContent">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=j6YFQKJqrHeB2jE3&amp;list=PLFLuAZh6tS3Lu9dsZ10a__zXhkrIHYXhE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="projectDetails">
      <div class="collapsibleWrapper">
        <div
          class="collapspreview"
          @click="isDetailsVisible = !isDetailsVisible"
        >
          <h4>Details</h4>
          <img
            src="../../assets/images/plus-icon.svg"
            alt="Icon to Open a collapse section"
            :class="{ rotated: isDetailsVisible }"
          />
        </div>
        <transition name="ease-in">
          <p v-if="isDetailsVisible">
            After discovering SonicPi, I was eager to find a similar environment
            for visuals—something that would take me to the next level and allow
            me to create true audio-visual art.
            <br />
            <br />
            That search led me to TouchDesigner, which not only introduced me to
            procedural visuals but also to node-based programming — a workflow I
            quickly grew to love.
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
            <a class="refLinks" target="_blank" href="https://derivative.ca/"
              >Touchdesigner</a
            >
            <br />
            <a class="refLinks" target="_blank" href="https://www.python.org/"
              >Python</a
            >
            <br />
            <a class="refLinks" target="_blank" href="https://docs.gl/sl4/all"
              >GLSL</a
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
