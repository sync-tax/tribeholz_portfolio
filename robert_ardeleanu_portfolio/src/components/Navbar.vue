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
        <li id="lastNavLink">LINKTREE</li>
      </RouterLink>
      <img
        src="../assets/images/darkmode_icon_dark.png"
        alt="A moon icon; used to switch to darkmode."
        class="modeSwitch"
        id="activeMode"
      />
      <img
        src="../assets/images/lightmode_icon_dark.png"
        alt="A sun icon; used to switch to lightmode."
        class="modeSwitch"
        id="!activeMode"
      />
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;

  border-bottom: 1px solid white;
}

ul {
  display: flex;
  justify-content: space-between;
}

li {
  list-style: none;
  margin-right: 20px;
}

#lastNavLink {
  border-right: 2px solid white;
  padding-right: 20px;
}

img {
  cursor: pointer;

  color: white;
  opacity: 30%;

  margin-right: 20px;
  width: 25px;
  height: 25px;
}

img:hover {
  opacity: 100%;
}

#activeMode {
  opacity: 100%;
}

#logoImage {
  width: 35px;
  height: 35px;
  margin-left: 15px;

  opacity: 100%;
}

.navLink{
  text-decoration: none;
  color: white;
  opacity: 50%;
}

.router-link-active {
  opacity: 100%;
}

</style>
