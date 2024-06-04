<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { updateProfile } from '@/backend'
import Pocketbase from 'pocketbase'

import LogoIcon from '@/components/icons/Iconlogored.vue'

let currentuser = ref()
let pb: Pocketbase | null = null
const sports_choisis = ref<string[]>([])

onMounted(async () => {
    pb = new Pocketbase('http://127.0.0.1:8090')

    currentuser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const listes_sports = ['Badminton', 'Salle de sport', 'Football', 'Handball', 'Natation', 'Vélo', 'Randonnée', 'Course à Pied', 'Tennis', 'Rugby' ]

const toggleSelection = (sport: string) => {
  const index = sports_choisis.value.indexOf(sport);
  if (index === -1) {
    if (sports_choisis.value.length < 3) {
      sports_choisis.value.push(sport);
    } else {
      alert('Vous ne pouvez sélectionner que 3 sports maximum.');
    }
  } else {
    sports_choisis.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="grille">
    <div class="flex-grow flex justify-center">
      <LogoIcon class="w-24 h-24 mb-5 mt-4" />
    </div>

    <h1 class="text-3xl mb-4">Bienvenue sur Feater !</h1>

    <h2 class="text-xl mb-5">Choississez vos sports préférés</h2>

    <div class="grid grid-cols-2 gap-2 w-full px-8 text-sm">
      <div v-for="sport in listes_sports" :key="sport" class="relative cursor-pointer" @click="toggleSelection(sport)">
        <input v-model="sports_choisis" type="checkbox" :value="sport" class="hidden">
        <div :class="[
          'p-1.5 border rounded-3xl transition-colors duration-300 flex items-center justify-center',
          sports_choisis.includes(sport) ? 'bg-red-600 text-white border-red-600' : 'bg-white  border-zinc-200'
        ]">
          {{ sport }}
        </div>
      </div>
    </div>

    <RouterLink to="/">
      <button class="p-2 mt-10 rounded-3xl w-3/4 m-auto flex justify-center bg-red-600 text-white font-bold" 
        @click="updateProfile(currentuser.id, { sport: sports_choisis })">
        Envoyer
      </button>
    </RouterLink>
  </div>
</template>
