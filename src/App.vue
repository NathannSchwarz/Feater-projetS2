<script setup lang="ts">

import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/HeaderPage.vue'
import Footer from './components/FooterPage.vue'
import Menu from './components/AppMenu.vue'

import { onMounted, ref } from 'vue'
import Pocketbase from 'pocketbase'

let pb = null
let currentuser = ref()

onMounted(async () => {
  pb = new Pocketbase('https://feater.schwarznathan.fr:443')
  currentuser.value = pb.authStore.isValid ? pb.authStore.model : null

  if (!currentuser.value && window.location.pathname !== '/connexion') {
    window.location.href = '/connexion'
  } else if (
    (currentuser.value && window.location.pathname === '/connexion') ||
    window.location.pathname === '/register'
  ) {
    window.location.href = '/'
  }
})

const route = useRoute()
const showHeader = computed(() => route.path !== '/connexion')
</script>


<template>
  <Header v-if="showHeader"/>

  <main>
    <RouterView />
  </main>

  <Menu v-if="showHeader" />
  <Footer  v-if="showHeader" />
</template>
