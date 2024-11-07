<script setup></script>

<template>
  <section class="aboutGeneral">
    <img
      src="../assets/images/me_about.png"
      width="420px"
      alt="A picture of me (Robert Ardeleanu)"
      class="aboutPic"
    />
    <div class="aboutTextWrapper">
      <h5>actually my name is...</h5>
      <h2>ROBERT ARDELEANU</h2>
      <p>
        I currently study Mediatechnology & Design (BA) at the unviersity of
        applied sciences @ Campus Hagenberg. <br />
        <span>Linz, Upper Austria</span>
      </p>
      <a href="#CV">Download CV</a>
    </div>
  </section>

  <section class="aboutDetails">
    <div class="collapsibleWrapper">
      <div class="collapspreview">
        <h4>Background</h4>
        <img src="#" alt="Icon to Open a collapse section" />
      </div>
      <p>
        I was born in Romania, in a small city - also known as Hackerville. You could say I was destined to become a tech nerd... While that's a fun narrative, it's not entirely true. It actually took me quite a while to figure out my path. I've always had diverse interests and hobbies, and I'm glad I took my time exploring them.  Looking back, I can see how those passions led me to the perfect place - where creativity and technology intersect.
      </p>
    </div>
    <div class="collapsibleWrapper">
      <div class="collapspreview">
        <h4>Things I love</h4>
        <img src="#" alt="Icon to Open a collapse section" />
      </div>
      <p>
        I find joy and inspiration all around me — in nature, mathematics, relationships, and especially in my cats (who are essentially my children lol). While I'm a sociable person, I also enjoy having time for myself, which allows me to delve into various subjects that facinate me. My hobbies are:  <br> <br>

        - Exploring creative algorithms: Generating visual art with TouchDesigner and algorithmic sounds with Sonic Pi. <br>
        - Sharing tech knowledge: Creating YouTube videos about tech topics. <br>
        - Creating graphics: Drawing, screenprinting, and designing. <br>
        - Gaming and grooving: Immersing myself into fantasy worlds and dancing to bouncy techno music. <br>
      </p>
    </div>
    <div class="collapsibleWrapper">
      <div class="collapspreview">
        <h4>Nyan Nyan Nyan...</h4>
        <img src="#" alt="Icon to Open a collapse section" />
      </div>
      <p>
        In a world that often seems to lack empathy, I believe it's crucial to be respectful and compassionate towards others. While I don't necessarily believe in karma in a religious sense, I do think that cultivating a positive and kind attitude creates a mindset that attracts good things and well-being, rather than negativity and frustration.
      </p>
    </div>
  </section>
</template>

<style scoped>
.aboutGeneral{
  display: flex;
  justify-content: space-around;

  width: 90%;
  margin: 0 auto;

  padding-top: 5vh;
}

.aboutTextWrapper{
  margin: auto 0;
  padding-right: 30px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

h2{
  font-family: "Anek Devanagari", sans-serif;
        font-weight: 800;
        font-size: 3rem;
        font-variation-settings:
        "wdth" 125;
}

h5{
  font-family: "Anek Devanagari", sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        font-variation-settings:
        "wdth" 100;

  opacity: 40%;
}

span{
  opacity: 40%;
}

p{
  font-family: "Anek Devanagari", sans-serif;
        font-weight: 300;
        font-size: 1.1rem;
        font-variation-settings:
        "wdth" 87.5;
}

a{
        font-family: "Anek Devanagari", sans-serif;
        font-style: expanded;
        font-weight: 600;
        font-size: larger;
        font-variation-settings:
        "wdth" 125;

        border: 1px solid white;
        border-radius: 15px;

        padding: 10px 25px 8px 25px;
        width: 200px;

        margin-top:  40px;
        text-align:  center;
        text-decoration: none;
        color:  white;
    }

a:hover{
  background-color: white;
  color: black;
}    
</style>
