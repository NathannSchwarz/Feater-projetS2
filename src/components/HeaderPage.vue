<script setup lang="ts">
import LogoIcon from '@/components/icons/Iconlogored.vue'
import LogowhiteIcon from '@/components/icons/Iconlogowhite.vue'
import SearchIcon from '@/components/icons/Iconsearch.vue'
import SearchwhiteIcon from '@/components/icons/Iconsearchwhite.vue'
import VectorMenuIcon from '@/components/icons/Iconvectormenu.vue'


import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>

<template>

  <header class="sticky bg-white top-0 left-0 w-full  z-30 flex items-center justify-between text-white">
    <!-- Div pour le logo et les boutons -->
    <div :class="{'bg-red-600 z-10': activeMenu, }" class=" flex justify-between items-center w-full shadow-xl py-2 p-6">
      <div>

        <RouterLink to="/">
          <template v-if="activeMenu">
            <LogowhiteIcon />
          </template>
          <template v-else>
            <LogoIcon />
          </template>
        </RouterLink>
      </div>

      <div class="flex items-center gap-5">

        <button class="z-10">
          <template v-if="activeMenu">
            <SearchwhiteIcon />
          </template>
          <template v-else>
            <SearchIcon />
          </template>
        </button>

        <button
          class="relative z-10 flex h-5 w-6 flex-col justify-between *:h-[4px] *:w-full *:bg-black *:transition-all *:duration-300 *:ease lg:hidden"
          @click="activeMenu = !activeMenu">
          <div :class="{'translate-y-[8px] rotate-45 !bg-white': activeMenu}" class="rounded"></div>
          <div :class="{'opacity-0 !bg-white': activeMenu}" class="rounded"></div>
          <div :class="{'-translate-y-[8px] -rotate-45 !bg-white': activeMenu}" class="rounded"></div>
        </button>
      </div>
    </div>

    <div class="flex gap-6 lg:flex-row-reverse ">

            <nav
                class="invisible fixed inset-0  text-white bg-red-600 text-xl opacity-0 transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }"
                v-scroll-lock="activeMenu"
            >

            <ul class="mt-[25vh] mx-10 lg:m-0 lg:flex relative z-20">
            <li class="menu-item pb-6">
                <RouterLink class="menu-link" to="/#" @click="closeMenu"
                >Accueil</RouterLink
                >
            </li>
            <li class="menu-item pb-6">
                <RouterLink class="menu-link" to="/#" @click="closeMenu"
                >Activité</RouterLink
                >
            </li>
            <li class="menu-item pb-6">
                <RouterLink class="menu-link" to="/#" @click="closeMenu"
                >Coaching</RouterLink
                >
            </li>
            <li class="menu-item pb-6">
                <RouterLink class="menu-link" to="/#" @click="closeMenu">Message</RouterLink>
            </li>
            <li class="menu-item pb-6">
                <RouterLink class="menu-link" to="/#" @click="closeMenu">Carte</RouterLink>
            </li>
            <li class="menu-item pb-6">
                <RouterLink
                class="menu-link lg:bg-black lg:text-white lg:px-8"
                to="/#"
                @click="closeMenu"
                >Abonnement</RouterLink
                >
            </li>
            </ul>

            <RouterLink to="/">
                <VectorMenuIcon class="absolute top-2 scale-[100%]"/>
            </RouterLink>
        </nav>
    </div>
    
  </header>

  
</template>
