import { createRouter, createWebHistory } from 'vue-router'
import website from '@/config/website.json'
import HomeView from '@/views/NotFound.vue'
import BiologicalView from '@/views/BiologicalView.vue'
import FriendsView from '@/views/FriendsView.vue'
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
      path: '/friends',
      name: 'friends',
      component: FriendsView
    },
    {
      path: '/talk',
      name: 'Talk',
      component: TalkView
    },
    {
      path: '/biological',
      name: 'Biological',
      component: BiologicalView
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/VideoView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = website.Root.Title
})

export default router
