<script setup lang="ts">
import CardsCoach from '@/components/Cards-Coach.vue'
import Carroussel2coach from '@/components/Carroussel-2-coach.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'
import { coach, coachhabitude } from '@/data' 
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'

const coachsFiltrées = coach.filter(coach => coach.id >= 1 && coach.id <= 3);
const coachsFiltrées2 = coach.filter(coach => coach.id >= 4 && coach.id <= 6);
const coachsFiltrées3 = coachhabitude.filter(coach => coach.id >= 1 && coach.id <= 4);

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
      <Carroussel2coach :coaches="coachsFiltrées" class="mb-10"/>


      <h3 class="pb-2 font-bold text-xl mx-6">En fonction de vos habitudes</h3>

      <div class="grid grid-cols-2 gap-6 mb-10 grille">
        <CardsCoach v-for="coach in coachsFiltrées3" :key="coach.id" :coachhabitude="coach" />
        <RouterLink to="#" class="col-start-2">
                <div class="flex justify-end ">
                <button class="bg-red-500  p-2 px-3 -mt-2 rounded-2xl text-xs font-bold text-white">Voir plus de Sports</button>
                </div>
        </RouterLink>
      </div>

      <h3 class="pb-2 font-bold text-xl mx-6">Coachs déjà rencontrés</h3>
      <Carroussel2coach :coaches="coachsFiltrées2" class="mb-12"/>
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
