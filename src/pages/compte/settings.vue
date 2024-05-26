<script setup lang="ts">

import Settings from '@/components/Settings.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'

import { onMounted, onBeforeUnmount } from 'vue';


const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('Votre compte / Vos Paramètres');
});
</script>


<template>


    <h1 class="font-bold text-3xl pb-5 px-6">Paramètres</h1>
    <div class="flex flex-col items-center ">
        <img class="rounded-full w-20 mb-1 shadow-2xl shadow-red-400" src="/img/course.webp" alt="Course à pied" />
        <h2 class="text-3xl font-extrabold">Fabian Dufour</h2>
        <p class="text-sm mb-4">Membre ID : HDHAD7421</p>
        <p class="bg-red-600 p-2 rounded-3xl text-sm font-bold text-white w-40 text-center mb-8">Membre Premium</p>
    </div>
        

    <div class="border-b border-black mb-10">
        <Settings v-for="coach in 4" />
    </div>
        
        
    <div class="flex items-center justify-center">
        <button class="flex items-center justify-around p-3 w-2/3 mb-10 bg-red-600 rounded-3xl">
            <RouterLink to="/">
            <h2 class="font-bold text-xl text-white">Deconnexion</h2>
            </RouterLink>
        </button>
    </div>
        
    
        

</template>
