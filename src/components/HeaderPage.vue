<script setup lang="ts">
import LogoIcon from '@/components/icons/Iconlogored.vue'
import SearchIcon from '@/components/icons/Iconsearch.vue'


import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>

<template>
  <header class="px-10 py-16 bg-white fixed z-10 w-full flex items-stretch justify-between lg:py-0">
    <div class="flex items-center">
        <RouterLink to="/">
            <LogoIcon class="w-36 h-36" />
        </RouterLink>
    </div>

    <div class="flex items-center gap-6 lg:flex-row-reverse">
      <button>
        <SearchIcon />
      </button>

      <button
        class="relative z-10 flex h-6 w-8 flex-col justify-between *:h-[4px]  *:w-full *:bg-black *:transition-all *:duration-300 *:ease lg:hidden"
        @click="activeMenu = !activeMenu">
        
        <div :class="{ 'translate-y-[10px] rotate-45': activeMenu }" class="rounded "></div>
        <div :class="{ 'opacity-0': activeMenu }" class="rounded "></div>
        <div :class="{ '-translate-y-[10px] -rotate-45': activeMenu }" class="rounded "></div>
      </button>

      <nav
        class="invisible fixed inset-0 bg-red-600 text-white text-3xl opacity-0 transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }"
        v-scroll-lock="activeMenu"
      >
        <ul class="mt-[25vh] mx-16 lg:m-0 lg:flex">
          <li class="menu-item">
            <RouterLink class="menu-link" to="/conservatoire" @click="closeMenu"
              >Accueil</RouterLink
            >
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/conservatoire" @click="closeMenu"
              >Activité</RouterLink
            >
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/enseignements" @click="closeMenu"
              >Coaching</RouterLink
            >
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/events" @click="closeMenu">Message</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/contact" @click="closeMenu">Carte</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink
              class="menu-link lg:bg-black lg:text-white lg:px-8"
              to="/inscription"
              @click="closeMenu"
              >Abonnement</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
