<script setup></script>

<template>
  <nav>
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
        src="../assets/images/darkmode_icon.svg"
        alt="A moon icon; used to switch to darkmode."
        style="fill: white"
        class="modeSwitch"
        id="activeMode"
      />
      <img
        src="../assets/images/lightmode_icon.svg"
        alt="A sun icon; used to switch to lightmode."
        class="modeSwitch"
        id="notactiveMode"
      />
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  opacity: 100%;
}
</style>
