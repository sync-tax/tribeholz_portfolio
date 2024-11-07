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
        style= "fill: white;"
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
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;

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

  margin-right: 20px;
  width: 25px;
  height: 25px;
}



img:hover {
  opacity: 100%;
}

#activeMode {
  opacity: 100%;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(100%) contrast(100%);
}

#notactiveMode {
  opacity: 30%;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(100%) contrast(100%);
}

#notactiveMode:hover {
  opacity: 100%;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(100%) contrast(100%);
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
  opacity: 40%;
}

.navLink:hover{
  opacity: 100%;
}

.router-link-active {
  opacity: 100%;
}

</style>
