<script setup>
import { ref } from "vue";

const isBackgroundVisible = ref(false);
const isThingsVisible = ref(false);
const isTechVisible = ref(false);
</script>

<template>
  <section class="aboutGeneral">
    <img
      src="../assets/images/me_about.png"
      width="420px"
      alt="A picture of me (Robert Ardeleanu)"
      class="aboutPic"
    />
    <div class="aboutTextWrapper">
      <h5>hi, my name is...</h5>
      <h2>ROBERT ARDELEANU</h2>
      <p>
        I currently study Mediatechnology & Design (BA) at the unviersity of
        applied sciences @ Campus Hagenberg. <br />
        <span>Linz, Upper Austria</span>
      </p>
      <a href="#CV">Portfolio (PDF)</a>
    </div>
  </section>

  <section class="aboutDetails">
    <div class="collapsibleWrapper">
      <div
        class="collapspreview"
        @click="isBackgroundVisible = !isBackgroundVisible"
      >
        <h4>Background</h4>
        <img
          src="../assets/images/plus-icon.svg"
          alt="Icon to Open a collapse section"
          :class="{ rotated: isBackgroundVisible }"
        />
      </div>
      <transition name="ease-in">
        <p v-if="isBackgroundVisible">
          I was born in Romania, in a small city - also known as Hackerville. So
          you could say I was destined to become a tech nerd*lol* ... well,
          nope.
          <br />
          <br />
          Actually it took me quite a while to figure out my path but I'm glad I
          took my time to explore different hobbies. Looking back, I can see how
          those passions led me to the perfect place - where creativity and
          technology intersect.
        </p>
      </transition>
    </div>
    <div class="collapsibleWrapper">
      <div class="collapspreview" @click="isThingsVisible = !isThingsVisible">
        <h4>Things I love</h4>
        <img
          src="../assets/images/plus-icon.svg"
          alt="Icon to Open a collapse section"
          :class="{ rotated: isThingsVisible }"
        />
      </div>
      <transition name="ease-in">
        <p v-if="isThingsVisible">
          I find joy and inspiration all around me — in nature, mathematics,
          relationships, and especially in my cats (who are essentially my
          children lol).
          <br />
          <br />

          - Making visual art with TouchDesigner and other Tech. <br />
          - Composing algorithmic sound with SonicPi. <br />
          - Creating YouTube videos about nerdy stuff. <br />
          - Drawing, screenprinting, and designing. <br />
          - Dancing to bouncy tekno music. <br />
          - Playing good games.
        </p>
      </transition>
    </div>
    <div class="collapsibleWrapper">
      <div class="collapspreview" @click="isTechVisible = !isTechVisible">
        <h4>Technologies</h4>
        <img
          src="../assets/images/plus-icon.svg"
          alt="Icon to Open a collapse section"
          :class="{ rotated: isTechVisible }"
        />
      </div>
      <transition name="ease-in">
        <p v-if="isTechVisible">
          - Audio: SonicPi, Ableton, Audacity <br />
          - Visual: TouchDesigner, Blender, Affinity Suite, Figma<br />
          - Coding: JS, Python, Ruby, Java<br />
        </p>
      </transition>
    </div>
  </section>
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
