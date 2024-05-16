<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Footer from './components/FooterPage.vue'
import Menu from './components/Menu.vue'

</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
  
    <Menu />
  <Footer />
  
</template>
