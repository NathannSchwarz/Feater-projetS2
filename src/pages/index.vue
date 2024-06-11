<script setup lang="ts">
import Carrousselchallenge from '@/components/Carroussel-challenge.vue';
import Carroussel2 from '@/components/Carroussel-2.vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import Pocketbase from 'pocketbase';


import type { ActiviteResponse } from '@/pocketbase-types';
import { allActivite } from '@/backend';
const activites = ref<ActiviteResponse<any>[]>([]);
activites.value = await allActivite();


let pb = null;
let currentuser = ref();


onMounted(async () => {
  pb = new Pocketbase('http://127.0.0.1:8090');
  currentuser.value = pb.authStore.isValid ? pb.authStore.model : null;
});


const filteredActivites1 = computed(() => activites.value.slice(0, 3)); // First 3 activities for first carousel
const filteredActivites2 = computed(() => activites.value.slice(3, 6)); // Next 3 activities for second carousel

</script>

<template>
  <div>
    <div v-if="currentuser" class="bg-red-600 p-2.5 pt-4 pb-4 rounded-xl mx-6">
      <h1 class="text-white pb-1">Content de te revoir, {{ currentuser.Prenom }}</h1>
      <p class="text-xs font-normal text-white">Tu as déjà fait la rencontre de <span class="font-bold">1 personnes</span> , continue comme ça, tu es sur la bonne voie !</p>
    </div>

    <h2 class="text-center mt-10">Nouveaux Challenges du jour !</h2>
    <Carrousselchallenge/>

    <h3 class="pb-2 font-bold text-xl mx-6">Activités faites pour vous</h3>
    <Carroussel2 v-bind="activite" v-for="activite in filteredActivites2" :key="activite.id" class="mb-12" />

    <h3 class="pb-2 font-bold text-xl mx-6">En fonction de vos habitudes</h3>
    <Carroussel2 v-bind="activite" v-for="activite in filteredActivites2" :key="activite.id" class="mb-12" />

    <h3 class="pb-2 font-bold text-xl mx-6">Voici ce qu'on vous propose</h3>
    <nav class="pb-2 mx-6">
      <RouterLink to="/activité">
        <button class="relative">
          <img class="rounded-xl" src="/img/courreur.webp" alt="activités">
          <div class="absolute bottom-0 w-full h-20 text-white text-left bg-black bg-opacity-80 p-4 rounded-b-xl">
            <h3 class="font-bold text-xl pb-1">Trouvez un coéquipier</h3>
            <p class="text-xs font-extralight">Trouvez la ou les personnes qui vous accompagneront</p>
          </div>
        </button>
      </RouterLink>
    </nav>

    <div class="grid grid-cols-2 gap-4 mx-6">
      <nav class="pb-10 w-full object-cover">
        <RouterLink to="/coaching">
          <button class="relative w-full">
            <img class="rounded-xl h-28 w-full" src="/img/coach.webp" alt="coaching">
            <div class="absolute bottom-0 w-full h-12 text-white text-left bg-black bg-opacity-80 p-2 px-3 rounded-b-xl">
              <h4 class="font-bold text-xl pb-1">Coaching</h4>
            </div>
          </button>
        </RouterLink>
      </nav>

      <nav class="pb-12 w-full object-cover">
        <RouterLink to="/carte">
          <button class="relative w-full">
            <img class="rounded-xl h-28 w-full" src="/img/cartemontbéliard.webp" alt="carte">
            <div class="absolute bottom-0 w-full h-12 text-white text-left bg-black bg-opacity-80 p-2 px-3 rounded-b-xl">
              <h4 class="font-bold text-xl pb-1">Carte</h4>
            </div>
          </button>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
