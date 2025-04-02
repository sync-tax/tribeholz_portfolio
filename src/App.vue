<script setup>
import MainNavigation from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";
</script>

<template>
  <body>
    <MainNavigation />
    <main>
      <transition name="route">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
    <FooterSection />
  </body>
</template>

<style scoped>
.route-enter-active,
.route-leave-active {
  scroll-behavior: smooth;
  transition: opacity 0.5s ease, transform 0.3s ease; /* Add transform */
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
