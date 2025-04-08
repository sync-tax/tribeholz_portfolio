<script setup>
import Collapsible from "../../components/Collapsibles.vue";
import Back from "../../components/ProjectBack.vue";
import Overview from "../../components/ProjectOverview.vue";
</script>

<template>
  <div class="project">
    <Back />

    <section class="projectOverview">
      <Overview title="808CLUB" text="Designs I made for the 808Club." />

      <div class="mainProjectContent">
        <img src="../../assets/images/d_808_img1.png" alt="Stuff" width="80%" />
        <p style="text-align: center" class="contentNote">
          Beachflags & Sticker | The Logo was created in collaboration with a
          friend who provided the "808" lettering. I refined it using
          Illustrator and designed stickers and such.
        </p>
        <div class="imageContainer">
          <img
            src="../../assets/images/d_808_img2.png"
            alt="Flyer"
            width="40%"
          />
          <img
            src="../../assets/images/d_808_img3.png"
            alt="Flyer"
            width="50%"
          />
        </div>

        <p style="text-align: center" class="contentNote">
          Flyer - House of Arts #1- Affinity & Procreate
        </p>

        <p style="text-align: center" class="contentNote">
          Flyer - Game of Skate #1- Affinity
        </p>

        <div class="imageContainer">
          <img
            src="../../assets/images/d_808_img5.png"
            alt="Flyer"
            width="40%"
          />
          <img
            src="../../assets/images/d_808_img4.png"
            alt="Flyer"
            width="50%"
          />
        </div>
        <p style="text-align: center" class="contentNote">
          Flyer - House of Arts #2- Photoshop | Event sadly canceled :(
        </p>

        <p style="text-align: center" class="contentNote">
          Flyer - Game of Skate #2- Affinity
        </p>
      </div>

      <Overview
        style="margin-top: 60px"
        title="TRIBΞHOLZ"
        text="Designs I made for my algorithmic sound project."
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/d_tribeholz_img1.png"
          alt="Flyer"
          width="40%"
        />
        <p style="text-align: center" class="contentNote">
          Banner - Soundcloud- Procreate & Illustrator
        </p>

        <img
          src="../../assets/images/d_tribeholz_img2.png"
          alt="Flyer"
          width="40%"
        />
        <p style="text-align: center" class="contentNote">
          Lettring Logo - YouTube - Ballpoint & Illustrator
        </p>
        <img
          src="../../assets/images/d_tribeholz_img3.png"
          alt="Flyer"
          width="40%"
        />
        <p style="text-align: center" class="contentNote">
          Thumbnails - YouTube - Affinity <br />
          <a href=""></a>
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="808Club">
        <h4>Overview</h4>
        <p>
          The 808Club is an art & culture organisation based in Linz. Together
          with some friend, we organize different events and such.
        </p>
        <h4>Role</h4>
        <p>
          As part of the board I help with event organisation. Also I frequently
          make designs & handle the webstuff.
        </p>
      </Collapsible>

      <Collapsible title="TRIBΞHOLZ">
        <h4>Overview</h4>
        <p>
          A personal project where it is all about creative coding. I sometimes
          post stuff on YouTube.
        </p>

        <h4>Tools</h4>
        <p>
          - Touchdesigner <br />
          - SonicPi <br />
          - DaVinci <br />
          - Adobe CC
        </p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            href="https://www.instagram.com/808club_linz/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Instagram @808club_linz</a
          >
          <br />
          <a
            href="https://808club.x-net.dev/"
            target="_blank"
            rel="noopener noreferrer"
            >→ Website 808Club</a
          >
          <br />
          <a
            href="https://www.youtube.com/@tribeholz23"
            target="_blank"
            rel="noopener noreferrer"
            >→ YouTube TRIBΞHOLZ</a
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
