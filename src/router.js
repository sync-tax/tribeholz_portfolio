import { createRouter, createWebHistory } from "vue-router";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import LinkTree from "./views/LinkTree.vue";
import Tetris from "./views/Tetris.vue";

import TestProject from "./views/Projects/TestProject.vue";
import AudioProject1 from "./views/Projects/AudioProject1.vue";

const routes = [
  //Main Routes
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/LinkTree",
    name: "LinkTree",
    component: LinkTree,
  },

  //Project Routes
  {
    path: "/AudioProject1",
    name: "AudioProject1",
    component: AudioProject1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});

export default router;
