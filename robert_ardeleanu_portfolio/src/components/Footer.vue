<script setup></script>

<template>
  <footer>
    <div id="footerWrapper">
      <img src="../assets/images/logo_dark.png" alt="Logo" id="logoImage" />
      <div class="footerSocials">
        <h4>Socials</h4>
        <a href="https://www.youtube.com/@tribeholz23" target="_blank">YouTube</a>
        <a href="https://www.instagram.com/_tribeholz/" target="_blank">Instagram</a>
        <a href="https://github.com/sync-tax" target="_blank">GitHub</a>
      </div>
      <div class="footerContact">
        <h4>Contact</h4>
        <a href="mailto:robert.ardeleanu.0607@gmail.com" target="_blank">E-Mail</a>
        <a href="https://www.linkedin.com/in/robert-arbeitsloser-7271a71b2/" target="_blank">LinkedIn</a>
      </div>
      <div class="footerExtra">
        <div class="modeSwitchContainer">
          <img
            src="../assets/images/darkmode_icon_dark.png"
            alt="A moon icon; used to switch to darkmode."
            id="activeMode"
          />
          <img
            src="../assets/images/lightmode_icon_dark.png"
            alt="A sun icon; used to switch to lightmode. "
            id="!activeMode"
          />
        </div>
        <p>made with ♡ and a whole lot of coffee^^</p>
        <a href="">NYAN!</a>
      </div>
    </div>
    <div id="copyrightWrapper">
        <RouterLink to="/Tetris" class="navLink" id="tetrisEasteregg">
            <img src="../assets/images/tetris_icon_dark.png" alt="Entry to an easteregg" style="opacity: 100%;">
        </RouterLink>
        <p>&copy; 2024 Robert Ardeleanu - All Rights Reserved</p>
        <RouterLink to="/Tetris" class="navLink" id="tetrisEasteregg">
            <img src="../assets/images/tetris_icon_dark.png" alt="Entry to an easteregg" style="opacity: 100%;">
        </RouterLink>
    </div>
  </footer>
</template>

<style scoped>
#footerWrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;

  border-top: 1px solid white;
}

#logoImage{
    margin-left: 15px;

    width: 35px;
    height: 35px;

    opacity: 100%;
}

img {
  cursor: pointer;

  color: white;
  opacity: 30%;

  width: 25px;
  height: 25px;
  margin-right: 15px;
}

img:hover {
  opacity: 100%;
}

#activeMode {
  opacity: 100%;
}

.footerSocials, .footerContact {
  display: flex;
  flex-direction: column;
}

.footerExtra {
  margin-right: 20px;
}

a{
    text-decoration: none;
    color: white;
    opacity: 50%;
  }

  a:hover{
    opacity: 100%;
  }

#copyrightWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    color: black;
    font-size: 16px;

    margin-top: 20px;
    padding-left: 10px;
}

#tetrisEasteregg{
    opacity: 100%;
}
</style>
