<script setup>
import MainNavigation from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";
import StarBG from "./components/StarBG.vue"
</script>

<template>
  <body>
    <StarBG/>
    <MainNavigation />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="default">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>

    <FooterSection />
  </body>

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
