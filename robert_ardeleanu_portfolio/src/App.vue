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
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
  </body>
</template>

<style scoped>
.route-enter-active,
.route-leave-active {
  scroll-behavior: smooth;
  transition: opacity 0.3s ease, transform 0.3s ease; /* Add transform */
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Add initial offset */
}
</style>
