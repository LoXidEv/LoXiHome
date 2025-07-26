import { createRouter, createWebHistory } from 'vue-router'
import website from '@/config/website.json'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'Home', component: HomeView },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
        {
      path: '/about_me',
      name: 'about',
      component: AboutView
    },
  ]
})

router.beforeEach((to, from) => {
  document.title = website.Root.Title
})

export default router
