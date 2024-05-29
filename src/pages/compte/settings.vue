<script setup lang="ts">

import Settings from '@/components/Settings.vue'
import { settings } from '@/data'
import { onMounted, ref } from 'vue';
import Pocketbase from 'pocketbase'

let pb = null
let currentuser = ref()

onMounted(async () => {
    pb = new Pocketbase("http://127.0.0.1:8090")
    currentuser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const settingsFiltrées2 = settings.filter(settings => settings.id >= 5 && settings.id <= 8);

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('Votre compte / Vos Paramètres');
});

const doLogout = async () => {
    pb.authStore.clear()
    currentuser.value = null
    window.location.href = '/connexion'
}
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
        <Settings :activités="settingsFiltrées2" />
    </div>
        
        
    <div class="flex items-center justify-center">
        <button class="flex items-center justify-around p-3 w-2/3 mb-10 bg-red-600 rounded-3xl">
            <button @click="doLogout" class="font-bold text-xl text-white">Déconnexion</button>
        </button>
    </div>
        
    
        

</template>
