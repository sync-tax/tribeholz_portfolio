<script setup>
import { ref, onMounted } from "vue";

const nyanCat = ref(null);

onMounted(() => {
  const nyanButton = document.getElementById("nyan");
  if (nyanButton) {
    nyanButton.addEventListener("click", () => {
      if (nyanCat.value) {
        nyanCat.value.classList.add("flyAnim");
        // Optionally remove the class after the animation completes
        nyanCat.value.addEventListener(
          "animationend",
          () => {
            nyanCat.value.classList.remove("flyAnim");
          },
          { once: true }
        ); // Use { once: true } to remove the listener after one execution
      }
    });
  }
});
</script>

<template>
  <nav class="mainNavigation">
    <div class="flyingCat" style="z-index: 5000" ref="nyanCat">
      <img
        src="../assets/images/flying_nyan.gif"
        alt="Nyan Cat flying over screen"
        width="270px"
      />
    </div>

    <img
      src="../assets/images/logo_dark.png"
      alt="A monochrome logo resembling tree rings."
      id="logoImage"
    />

    <ul>
      <RouterLink to="/" class="navLink">
        <li>PROJECTS</li>
      </RouterLink>
      <RouterLink to="/About" class="navLink">
        <li>ABOUT</li>
      </RouterLink>
      <RouterLink to="/LinkTree" class="navLink">
        <li id="lastNavLink">LINK.TREE</li>
      </RouterLink>
      <img
        src="../assets/images/nyan_button.png"
        alt="A moon icon - used to switch to darkmode."
        id="nyan"
      />
      <!-- <img
        src="../assets/images/darkmode_icon.svg"
        alt="A moon icon - used to switch to darkmode."
        style="fill: white"
        class="modeSwitch"
        id="activeMode"
      />
      <img
        title="Wait. This is illegal."
        src="../assets/images/lightmode_icon.svg"
        alt="A sun icon - used to switch to lightmode."
        class="modeSwitch"
        id="notactiveMode"
      /> -->
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  opacity: 100%;
}
</style>
