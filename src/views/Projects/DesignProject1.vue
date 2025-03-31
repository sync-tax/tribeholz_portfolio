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
        <h2>VJ-Setup v1.0</h2>
        <p>This is the first version of my MIDI VJing in Touchdesigner.</p>
      </div>
      <div class="mainProjectContent"></div>
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
            <pre><code class="language-ruby">
            def greet
            puts "Hello, world!"
            end
            </code></pre>
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
