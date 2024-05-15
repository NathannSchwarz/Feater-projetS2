import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'


const router = createRouter({
  history: createWebHistory()
  // the routes property is handled by the plugin
})

const app = createApp(App)

app.use(
    createRouter({
        history: createWebHistory()
    })
)


app.mount('#app')
