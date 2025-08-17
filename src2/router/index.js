import { createRouter, createWebHistory } from 'vue-router'
import website from '@/config/website.json'
import HomeView from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'Home', component: HomeView },
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

router.beforeEach((to, from) => {
  document.title = website.Root.Title
})

export default router
