import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
// import websiteConfig from './config/website.json'

const app = createApp(App)

// app.config.globalProperties.$t = (isConfig) => {
//   if (isConfig) {
//     return websiteConfig
//   } else {
//     return websiteConfig
//   }
// }

app.use(router)

app.mount('#app')
