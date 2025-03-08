import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import NotFound from '../views/404.vue'
// import SuperOC from '../views/SuperOC.vue'
// import InfoView from '../views/InfoView.vue'
// import GalleryView from '../views/Gallery.vue'
// import GalleryViewView from '../views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'Home', component: HomeView },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/super-oc',
    //   name: 'super-oc',
    //   component: SuperOC
    // },
    // {
    //   path: '/info',
    //   name: 'info',
    //   component: InfoView
    // },
    // {
    //   path: '/gallery',
    //   name: 'gallery',
    //   component: GalleryView
    // },
    // {
    //   path: '/gallery/:id',
    //   name: 'galleryview',
    //   component: GalleryViewView
    // },
  ]
})

export default router
