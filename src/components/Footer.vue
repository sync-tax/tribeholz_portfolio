<script setup>
const showNyanButton = () => {
  const nyanButton = document.getElementById("nyan");

  nyanButton.style.opacity = "60%";
  nyanButton.style.width = "35px";
  nyanButton.style.height = "35px";
  nyanButton.style.pointerEvents = "all";
};

import { ref, onMounted } from "vue";

const htmlElement = document.documentElement;

const applyLightmode = () => {
  htmlElement.classList.add("lightmode");
  htmlElement.classList.remove("darkmode");
  localStorage.setItem("theme", "light");
};

const applyDarkmode = () => {
  htmlElement.classList.add("darkmode");
  htmlElement.classList.remove("lightmode");
  localStorage.setItem("theme", "dark");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("lightmode");
  } else {
    document.documentElement.classList.add("darkmode");
  }
});
</script>

<template>
  <div class="footer">
    <div class="footerWrapper">
      <div class="footerSocials">
        <h4>Socials</h4>
        <a href="https://www.youtube.com/@tribeholz23" target="_blank"
          >YouTube</a
        >
        <a href="https://www.instagram.com/_tribeholz/" target="_blank"
          >Instagram</a
        >
        <a href="https://github.com/sync-tax" target="_blank">GitHub</a>
      </div>
      <div class="footerContact">
        <h4>Contact</h4>
        <a
          href="https://www.linkedin.com/in/robert-arbeitsloser-7271a71b2/"
          target="_blank"
          >LinkedIn</a
        >
        <a href="mailto:robert.ardeleanu.0607@gmail.com" target="_blank"
          >E-Mail</a
        >
      </div>
      <div class="footerExtra">
        <div class="modeSwitchContainer">
          <img
            src="../assets/images/darkmode_icon.svg"
            alt="A moon icon - used to switch to darkmode."
            style="fill: white"
            class="modeSwitch dark"
            @click="applyDarkmode"
          />
          <img
            title="Wait. This is illegal."
            src="../assets/images/lightmode_icon.svg"
            alt="A sun icon - used to switch to lightmode."
            class="modeSwitch light"
            @click="applyLightmode"
          />
        </div>
        <p>made with ♡ and a whole lot of coffee^^</p>
        <p class="nyanUnlock" @click="showNyanButton">UNLOCK NYAN!</p>
      </div>
    </div>
    <div id="copyrightWrapper">
      <p>&copy; 2025 Ardeleanu Robert - All Rights Reserved</p>
    </div>
  </div>
</template>
