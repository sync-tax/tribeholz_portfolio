<script setup>
import { onMounted, nextTick } from "vue";
import Prism from "prismjs";

import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
import Image from "../../components/Image.vue";

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
        title="TD Tutorials"
        text="Various Touchdesigner Tutorials I did on YouTube."
      />
      <div class="mainProjectContent">
        <iframe
          width="600"
          height="337"
          src="https://www.youtube.com/embed/videoseries?si=XO8NCGPKKnPCw6Fk&amp;list=PLFLuAZh6tS3Lu9dsZ10a__zXhkrIHYXhE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p class="contentNote">
          Tuchdesigner tutorials on
          <a target="_blank" href="https://www.youtube.com/@tribeholz23"
            >→ YouTube</a
          >
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="Overview">
        <h4>About</h4>
        <p>
          While I’m not a TouchDesigner pro, they say you learn best when you
          try to teach — and that’s what these tutorials are all about. I’m also
          happy if I can help a few people along the way.
        </p>

        <h4>Tools</h4>
        <p>
          - Touchdesigner <br />
          - Python <br />
          - GLSL <br />
          - OBS | Recording <br />
          - Davinci Resolve | Cutting
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1Hxd5kI1gWZXB3dU15D3aQc7badd6mQHl?usp=sharing"
            >→ Tutorial Files + Assets</a
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
