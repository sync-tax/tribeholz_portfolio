<script setup>
import Collapsible from "../components/Collapsibles.vue";
import Image from "../components/Image.vue";
</script>

<template>
  <div class="aboutSite">
    <section class="aboutGeneral">
      <Image src="/project_images/me_about.png" alt="Me" />

      <div class="aboutTextWrapper">
        <h5>hi, my name is...</h5>
        <h2>ROBERT ARDELEANU</h2>
        <p>
          I am a creative coding enthusiast and currently study MtD (BA) at the
          unviersity of applied sciences @ Campus Hagenberg. <br />
          <span>Linz, Upper Austria</span>
        </p>
      </div>
    </section>

    <section class="aboutDetails">
      <Collapsible title="Things I love">
        <h4>Creative Coding</h4>
        <p>generative visuals with TD & algorithmic sound with SP</p>

        <h4>Prints</h4>
        <p>screenprinted shirts, stickers and all that good stuff</p>

        <h4>Pokémon</h4>
        <p>pure nostalgia - the ROM-hacks are the best tho</p>

        <h4>Cats</h4>
        <p>I have two cats - basically my children</p>

        <h4>Techno</h4>
        <p>best spirit - even better sound</p>
      </Collapsible>

      <Collapsible title="Technologies">
        <h4>Programming</h4>
        <p>Javascript(Vue), Java, Python, Ruby, GLSL</p>

        <h4>Realtime-Graphics</h4>
        <p>Touchdesigner</p>

        <h4>2D-Graphics</h4>
        <p>Photoshop, Illustrator, Procreate</p>

        <h4>3D-Graphics</h4>
        <p>Blender</p>

        <h4>Video</h4>
        <p>DaVinci Resolve, OBS, Premiere</p>

        <h4>Audio</h4>
        <p>SonicPi, Ableton</p>

        <h4>UX/UI-Design</h4>
        <p>Xd, Figma</p>
      </Collapsible>

      <Collapsible title="Portfolio">
        <h4>Web Portfolio</h4>
        <p>
          This Portfolio was built using HTML, SCSS and JS | Vue. I used Vite
          for developement and build process. <br />
          <a
            target="_blank"
            href="https://github.com/sync-tax/tribeholz_portfolio"
            >→ Codebase on GitHub</a
          >
        </p>

        <br />
        <h4>Print Portfolio</h4>
        <p>
          <a
            href="https://drive.google.com/file/d/18GAOEvxXWaD3Pvr4apUIzXjAwTwsZfBV/view?usp=sharing"
            target="_blank"
            >→ Portfolio (PDF) - Download</a
          >
        </p>
      </Collapsible>
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
