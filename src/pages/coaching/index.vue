<script setup lang="ts">
import CardsCoach from '@/components/CardsSportHabitude.vue'
import Carroussel2 from '@/components/Carroussel-2-coach.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'
import { onMounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router'

import type { ActiviteResponse } from '@/pocketbase-types';
import { allActivite } from '@/backend';
const coachs = ref<ActiviteResponse<any>[]>([]);
coachs.value = await allActivite();

const filteredCoach1 = computed(() => coachs.value.slice(0, 3)); // First 3 activities for first carousel
const filteredCoach2 = computed(() => coachs.value.slice(3, 6)); // Next 3 activities for second carousel

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};

onMounted(() => {
  updateTitle('Découvrez nos Coachs !');
});
</script>

<template>
  <nav class="">
    <h1 class="font-bold text-3xl pb-5 mx-6">Coaching</h1>
    <nav>
      <RouterLink to="/coaching/recherche">
        <div class="flex justify-center items-center">
          <button class="flex items-center justify-between gap-4 p-3 bg-red-600 rounded-3xl mb-12 w-full mx-6">
            <ShieldIcon class="w-20"/>
            <h2 class="font-bold text-xl text-white text-left">Trouvez le coach qu'il vous faut !</h2>
            <flecheIcon class="rotate-180 h-6 w-10 text-white"/>
          </button>
        </div>
      </RouterLink>
      <h3 class="pb-2 font-bold text-xl mx-6">Coachs près de chez vous</h3>
      <Carroussel2 v-bind="coach" v-for="coach in filteredCoach1" :key="coach.id" class="mb-10"/>


      <h3 class="pb-2 font-bold text-xl mx-6">En fonction de vos habitudes</h3>

      <div class="grid grid-cols-2 gap-6 mb-10 grille">
        <!-- <CardsCoach v-bind="coach" v-for="coach in filteredCoach1" :key="coach.id" /> -->
        <RouterLink to="#" class="col-start-2">
          <div class="flex justify-end ">
            <button class="bg-red-500  p-2 px-3 -mt-2 rounded-2xl text-xs font-bold text-white">Voir plus de Sports</button>
          </div>
        </RouterLink>
      </div>

      <h3 class="pb-2 font-bold text-xl mx-6">Coachs déjà rencontrés</h3>
      <Carroussel2 :v-bind="coach" v-for="coach in filteredCoach2" :key="coach.id" class="mb-12"/>
      <RouterLink to="/coaching/DevenirCoach">
        <div class="flex justify-center items-center">
          <button class="flex items-center justify-around p-3 w-4/5 mb-12 bg-red-600 rounded-3xl">
            <h2 class="font-bold text-xl text-white">Devenir Coach !</h2>
            <ShieldIcon class="h-14 w-14"/>
          </button>
        </div>
      </RouterLink>
    </nav>
  </nav>
</template>
