import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createRouter({
  history: createWebHistory()
  // the routes property is handled by the plugin
})

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      else return { top: 0 }
    }
  })
)

app.mount('#app')


