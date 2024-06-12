<template>
  <div class="grille">
    <div class="flex-grow flex justify-center">
      <LogoIcon class="w-24 h-24 mb-5 mt-4" />
    </div>

    <h1 class="text-3xl mb-4">Bienvenue sur Feater !</h1>

    <h2 class="text-xl mb-5">Choisissez vos sports préférés</h2>

    <div class="grid grid-cols-2 gap-2 w-full px-8 text-sm">
      <div v-for="sport in listes_sports" :key="sport.id" class="relative cursor-pointer" @click="toggleSelection(sport.id)">
        <input v-model="sports_choisis" type="checkbox" :value="sport.id" class="hidden">
        <div :class="[
          'p-1.5 border rounded-3xl transition-colors duration-300 flex items-center justify-center',
          sports_choisis.includes(sport.id) ? 'bg-red-600 text-white border-red-600' : 'bg-white  border-zinc-200'
        ]">
          {{ sport.Nom }}
        </div>
      </div>
    </div>

    <RouterLink to="/">
      <button class="p-2 mt-10 rounded-3xl w-3/4 m-auto flex justify-center bg-red-600 text-white font-bold" 
        @click="updateProfile(currentuser.value?.id, { sport: sports_choisis.value })">
        Envoyer
      </button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';

import LogoIcon from '@/components/icons/Iconlogored.vue';

let currentuser = ref<any>(null);
let pb: PocketBase | null = null;
const sports_choisis = ref<string[]>([]);

const listes_sports = ref<{ id: string, Nom: string }[]>([]);

onMounted(async () => {
  pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

  currentuser.value = pb.authStore.isValid ? pb.authStore.model : null;

  try {
    const sports = await pb.collection('Sport').getFullList();
    listes_sports.value = sports.map((sport: any) => ({
      id: sport.id,
      Nom: sport.Nom,
    }));
  } catch (error) {
    console.error('Error fetching sports:', error);
  }
});

const toggleSelection = (sportId: string) => {
  const index = sports_choisis.value.indexOf(sportId);
  if (index === -1) {
    if (sports_choisis.value.length < 3) {
      sports_choisis.value.push(sportId);
    } else {
      alert('Vous ne pouvez sélectionner que 3 sports maximum.');
    }
  } else {
    sports_choisis.value.splice(index, 1);
  }
};

const updateProfile = async (userId: string, data: { sport: string[] }) => {
  if (pb && userId) {
    try {
      await pb.collection('users').update(userId, { sport: data.sport });
      alert('Profil mis à jour avec succès!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Erreur lors de la mise à jour du profil.');
    }
  }
};
</script>
