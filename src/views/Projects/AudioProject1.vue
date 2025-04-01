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
        <h2>Coding Techno</h2>
        <p>
          This was the first series I created on coding with SonicPi. It focused
          on experimentation and developing a workflow.
        </p>
      </div>
      <div class="mainProjectContent">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=cQ-cdKx3yKNn4xmz&amp;list=PLFLuAZh6tS3IfAgWplNl72bJkq3jWkxeA"
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
            I never intended to explore electronic music production, but that
            changed when I discovered SonicPi. Since then, I've developed a deep
            passion for creative coding. <br />
            <br />
            Today, SonicPi is one of my favorite hobbies — something I truly
            wouldn't want to miss out on.
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
            <a
              class="refLinks"
              target="_blank"
              href="https://www.ruby-lang.org/en/"
              >Ruby</a
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
