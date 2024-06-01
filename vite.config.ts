import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  plugins: [vue(), VueDevTools(), VueRouter({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js' // Alias pour le bundle Vue ESM
    }
  },
  build: {
    rollupOptions: {
      external: ['vue'] // Ajout de Vue comme module externe
    }
  }
})
