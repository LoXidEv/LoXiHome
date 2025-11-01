import { createRouter, createWebHistory } from 'vue-router'
import website from '@/config/website.json'
import Home from '@/views/Home.vue'
import OC from '@/views/OC.vue'
import SAR from '@/views/SAR.vue'
import NotFound from '@/views/NotFound.vue'
import Contact from '@/views/Contact.vue'
import MessageBoard from '@/views/MessageBoard.vue'
import Friends from '@/views/Friends.vue'
import Article from '@/views/Article.vue'
// import Gallery from '@/views/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/oc',
      name: 'oc',
      component: OC
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/sar',
      name: 'sar',
      component: SAR
    },
    {
      path: '/messageboard',
      name: 'messageboard',
      component: MessageBoard
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    // {
    //   path: '/gallery',
    //   name: 'gallery',
    //   component: Gallery
    // },
  ]
})

router.beforeEach((to, from) => {
  document.title = website.Root.Title
})

export default router
