import { createRouter, createWebHistory } from "vue-router";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import LinkTree from "./views/LinkTree.vue";

import AudioProject1 from "./views/Projects/AudioProject1.vue";
import AudioProject2 from "./views/Projects/AudioProject2.vue";
import AudioProject3 from "./views/Projects/AudioProject3.vue";

import VisualProject1 from "./views/Projects/VisualProject1.vue";
import VisualProject2 from "./views/Projects/VisualProject2.vue";
import VisualProject3 from "./views/Projects/VisualProject3.vue";

import DesignProject1 from "./views/Projects/DesignProject1.vue";
import DesignProject2 from "./views/Projects/DesignProject2.vue";
import DesignProject3 from "./views/Projects/DesignProject3.vue";

import OtherProject1 from "./views/Projects/OtherProject1.vue";
import OtherProject2 from "./views/Projects/OtherProject2.vue";
import OtherProject3 from "./views/Projects/OtherProject3.vue";

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
  {
    path: "/AudioProject2",
    name: "AudioProject2",
    component: AudioProject2,
  },
  {
    path: "/AudioProject3",
    name: "AudioProject3",
    component: AudioProject3,
  },
  {
    path: "/VisualProject1",
    name: "VisualProject1",
    component: VisualProject1,
  },
  {
    path: "/VisualProject2",
    name: "VisualProject2",
    component: VisualProject2,
  },
  {
    path: "/VisualProject3",
    name: "VisualProject3",
    component: VisualProject3,
  },
  {
    path: "/DesignProject1",
    name: "DesignProject1",
    component: DesignProject1,
  },
  {
    path: "/DesignProject2",
    name: "DesignProject2",
    component: DesignProject2,
  },
  {
    path: "/DesignProject3",
    name: "DesignProject3",
    component: DesignProject3,
  },
  {
    path: "/OtherProject1",
    name: "OtherProject1",
    component: OtherProject1,
  },
  {
    path: "/OtherProject2",
    name: "OtherProject2",
    component: OtherProject2,
  },
  {
    path: "/OtherProject3",
    name: "OtherProject3",
    component: OtherProject3,
  },
];

const projectRoutes = [
  "/AudioProject1",
  "/AudioProject2",
  "/AudioProject3",
  "/VisualProject1",
  "/VisualProject2",
  "/VisualProject3",
  "/DesignProject1",
  "/DesignProject2",
  "/DesignProject3",
  "/OtherProject1",
  "/OtherProject2",
  "/OtherProject3",
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.path === "/" && projectRoutes.includes(from.path)) {
      return { top: 510 };
    }

    return { top: 0 };
  },
});

export default router;
