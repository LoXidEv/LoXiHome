import { createRouter, createWebHistory } from 'vue-router'
import website from '@/config/website.json'
import HomeView from '@/views/HomeView.vue'
// import ProjectView from '@/views/ProjectView.vue'
import DrawView from '@/views/DrawView.vue'
import TalkView from '@/views/TalkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'Home', component: HomeView },
    {
      path: '/draw',
      name: 'Draw',
      component: DrawView
    },
    {
      path: '/talk',
      name: 'Talk',
      component: TalkView
    }
    // {
    //   path: '/projects',
    //   name: 'Project',
    //   component: ProjectView
    // }
  ]
})

router.beforeEach((to, from) => {
  document.title = website.Root.Title
})

export default router
