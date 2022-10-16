import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Gaul from '../components/Gaul.vue'
import Dayak from '../components/Dayak.vue'
import IndonesianWords from '../components/IndonesianWords.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gaul',
      name: 'gaul',
      component: Gaul
    },
    {
      path: '/dayak',
      name: 'dayak',
      component: Dayak
    },
    {
      path: '/indonesianWords',
      name: 'indonesianWords',
      component: IndonesianWords
    }
  ]
})

export default router
