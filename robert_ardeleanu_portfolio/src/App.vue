<script setup>
import MainNavigation from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";
</script>

<template>
  <body>
    <MainNavigation />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="route">
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
/*
NOTE: Übergänge funktionieren aus irgendeinem Grund nicht bei jedem Seitensprung (??) 

.route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
*/
</style>
