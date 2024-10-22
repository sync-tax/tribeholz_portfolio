<script setup>
//Implement Icon Logic (switch between dark & lightmode css on click)
//Implemet Vue Routing
</script>

<template>
  <nav>
    <div class="logoContainer">
      <img src="#" alt="A monochrome logo resembling tree rings." />
    </div>
    <div class="navLinksContainer">
      <RouterLink to="/" style="text-decoration: none">
        <li>PROJECTS</li>
      </RouterLink>
      <RouterLink to="/About" style="text-decoration: none">
        <li>ABOUT</li>
      </RouterLink>
      <RouterLink to="/LinkTree" style="text-decoration: none">
        <li>LINKTREE</li>
      </RouterLink>
      
    
    </div>
    <div class="modeSwitchContainer">
      <img src="#" alt="A moon icon; used to switch to darkmode." id="active" />
      <img
        src="#"
        alt="A sun icon; used to switch to lightmode. "
        id="!active"
      />
    </div>
  </nav>
</template>

<style scoped></style>
