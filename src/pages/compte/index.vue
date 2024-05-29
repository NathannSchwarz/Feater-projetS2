<script setup lang="ts">

import Settings from '@/components/Settings.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'
import { settings } from '@/data'
const settingsFiltrées = settings.filter(setting => setting.id >= 1 && setting.id <= 4);

import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import Pocketbase from 'pocketbase'


const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};

let pb = null
let currentuser = ref()

onMounted(async () => {
    pb = new Pocketbase("http://127.0.0.1:8090")
    currentuser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const avatarUrl = ref<string>('')

watch(currentuser, (val) => {
    if (val) {
        avatarUrl.value = pb.getFileUrl(val, val.avatar, { thumb: '100x100'})
    }
})

onMounted(() => {
  updateTitle('Votre compte / Vos Paramètres');
});
</script>


<template>


        <h1 class="font-bold text-3xl pb-5 px-6">Compte</h1>
        <div v-if="currentuser" class="flex flex-col items-center ">
            <img class="rounded-full w-32 mb-1 shadow-2xl shadow-red-400" :src="avatarUrl" alt="Course à pied" />
            <h2 class="text-3xl font-extrabold">{{ currentuser.prenom }} {{ currentuser.nom }}</h2>
            <p class="text-sm mb-4">Membre ID : {{currentuser.id}}</p>
            <p class="bg-red-600 p-2 rounded-3xl text-sm font-bold text-white w-40 text-center mb-8">Membre Premium</p>
        </div>
        

        <div class="border-b border-black mb-10">
            <Settings :activités="settingsFiltrées" />
        </div>
        
        
            <div class="flex items-center justify-center">
                <button class="flex items-center justify-around p-3 w-5/6 mb-10 bg-red-600 rounded-3xl">
                    <h2 class="font-bold text-xl text-white">Devenir Coach !</h2>
                    <ShieldIcon class="h-14 w-14" />
                </button>
            </div>
        
        
        
    
    

</template>
