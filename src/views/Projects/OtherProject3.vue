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
        title="Dead Internet"
        text="Tiny report on the Dead Internet Theory"
      />

      <div class="mainProjectContent">
        <img
          src="../../assets/images/o_dead_img1.png"
          alt="Data Visualisation"
          width="100%"
        />
        <p style="text-align: center" class="contentNote">
          Data Visualisation - Dead Internet - Illustrator
        </p>
      </div>
    </section>

    <section class="projectDetails">
      <Collapsible title="About">
        <h4>Overview</h4>
        <p>
          This was an assignment for the Media Studies class at FH Hagenberg.
          The question was wheter the internet is mostly populated by bots or
          not.
        </p>
        <h4>Tools</h4>
        <p>- Illustrator</p>
      </Collapsible>
      <Collapsible title="Resources">
        <p>
          <a
            href="https://drive.google.com/file/d/1zB3icas943Xb4lMJPKRSDnDA2B7Hmuwp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            >→ Report</a
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
