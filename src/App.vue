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
  pb = new Pocketbase('http://127.0.0.1:8090')
  currentuser.value = pb.authStore.isValid ? pb.authStore.model : null

  if (!currentuser.value && window.location.pathname !== '/connexion') {
    window.location.href = '/connexion'
  } else if (
    (currentuser.value && window.location.pathname === '/connexion') ||
    window.location.pathname === '/inscription'
  ) {
    window.location.href = '/'
  }
})

const route = useRoute()
  const showHeader = computed(() => {
    return route.path !== '/connexion' && route.path !== '/SeConnecter' && route.path !== '/inscription' && route.path !== '/inscription/config';
  });
</script>


<template>
  <Header v-if="showHeader"/>
  <Suspense>
  <main>
    <RouterView />
  </main>
  </Suspense>
  <Menu v-if="showHeader" />
  <Footer  v-if="showHeader" />
</template>
