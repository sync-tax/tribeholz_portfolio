import { createRouter, createWebHistory } from 'vue-router'
import Projects from './views/Projects.vue'
import About from './views/About.vue' 
import LinkTree from './views/LinkTree.vue'
import Tetris from './views/Tetris.vue'  


const routes = [
  //Main Routes
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/LinkTree',
    name: 'LinkTree',
    component: LinkTree
  },
  {
    path: '/Tetris',
    name: 'Tetris',
    component: Tetris
  },

  //Project Routes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router