<script setup lang="ts">
import LogoIcon from '@/components/icons/Iconlogored.vue'
import LogowhiteIcon from '@/components/icons/Iconlogowhite.vue'
import VectorMenuIcon from '@/components/icons/Iconvectormenu.vue'
import NotifIcon from '@/components/icons/Iconnotif.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'


import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}

import { useRouter } from 'vue-router';
const router = useRouter();

function goBack() {
  router.go(-1); // Cette ligne permet de revenir à la page précédente
}


</script>

<template>

  <header class="sticky bg-white top-0 left-0 w-full  z-30 flex items-center justify-between text-white mb-8">

    <div :class="{'bg-red-600 z-10': activeMenu, }" class=" flex justify-between items-center w-full border-b border-zinc-200  py-2 p-6">

      
      <template v-if="$route.path === '/Notification' || $route.path ==='/compte/settings' || $route.path ==='/compte/langue' || $route.path ==='/compte/donnéespersonnelles' || $route.path ==='/compte/abonnement' || $route.path ==='/compte/personnesrencontrées' || $route.path ==='/compte/paiement' || $route.path ==='/compte/conditionsgenerales' || $route.path ==='/compte/politiquesconfidentialité' || $route.path ==='/connexion'">
        <button @click="goBack">
          <flecheIcon class="w-10 h-6 my-3" :class="{ 'text-white': activeMenu, 'text-black': !activeMenu }"/>
        </button>
      </template>
      <template v-else-if="!activeMenu"  >
        <RouterLink to="/" @click="closeMenu">
          <LogoIcon />
        </RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/" @click="closeMenu">
          <LogowhiteIcon />
        </RouterLink>
      </template>
  
      

      <div class="flex items-center gap-3">

        <RouterLink to="/Notification" @click="closeMenu">
              <NotifIcon :class="{ 'text-white stroke-white': activeMenu, 'text-black': !activeMenu }"/>
        </RouterLink>

        <button class="z-10">
          
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
            <li class="menu-item ">
                <RouterLink class="menu-link" to="/" @click="closeMenu"
                >Accueil</RouterLink
                >
            </li>
            <li class="menu-item ">
                <RouterLink class="menu-link" to="/activité" @click="closeMenu"
                >Activité</RouterLink
                >
            </li>
            <li class="menu-item ">
                <RouterLink class="menu-link" to="/coaching" @click="closeMenu"
                >Coaching</RouterLink
                >
            </li>
            <li class="menu-item ">
                <RouterLink class="menu-link" to="/message" @click="closeMenu">Message</RouterLink>
            </li>
            <li class="menu-item ">
                <RouterLink class="menu-link" to="/carte" @click="closeMenu">Carte</RouterLink>
            </li>
            <li class="menu-item ">
                <RouterLink
                class="menu-link lg:bg-black lg:text-white lg:px-8"
                to="/compte/abonnement"
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
