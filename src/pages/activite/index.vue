<template>
  <div>
    <title>Découvrez nos Activités</title>

    <nav class="grille">
      <h1 class="font-bold text-3xl pb-5">Activité</h1>

      <div class="grid grid-cols-2 gap-5 pb-7">
        <RouterLink to="/activite/CreationActivité">
          <button class="bg-red-600 text-white font-bold text-sm p-2 w-full rounded-3xl">
            Créer une Activité
          </button>
        </RouterLink>
        <RouterLink to="/activite/CreationGroupe">
          <button class="bg-red-600 text-white font-bold text-sm p-2 w-full rounded-3xl">
            Créer un Groupe
          </button>
        </RouterLink>
      </div>

      <h3 class="pb-2 font-bold text-2xl">Sélection du jour</h3>

      <button class="w-full">
        <div class="grid grid-cols-12 grid-rows-2 bg-red-700 p-4 rounded-3xl text-white text-lg mb-10">
          <img class="col-span-5 row-span-2 rounded-3xl" src="/img/course.webp" alt="Course à pied"/>
          <div class="text-left col-span-7 row-span-1 pl-5">
            <h3 class="pb-1 font-bold">Course à pied</h3>
            <p class="text-sm">Montbéliard - 1h</p>
            <p class="text-sm">Marie Louise</p>
          </div>
          <h3 class="col-start-7 col-end-13 row-span-1 self-end text-right">12 mars 2024</h3>
        </div>
      </button>

      <h3 class="pb-4 font-bold text-xl">Parcourir par Sport</h3>

      <transition-group name="list" tag="div" class="grid grid-cols-2 gap-6">
        <div
          v-for="sport in displayedSports"
          :key="sport.id"
          @click="goToSportActivities(sport.id)"
          class="cursor-pointer"
        >
          <CardsActivité v-bind="sport" />
        </div>
      </transition-group>

      <div class="flex justify-end">
        <button v-if="displayedSports.length < sports.length" @click="showMoreSports" class="bg-red-600 flex justify-end p-1 px-3 mt-3 mb-14 rounded-2xl text-sm font-bold text-white">
          Voir plus de Sports
        </button>
        <button v-else @click="collapseSports" class="bg-red-600 flex justify-end p-1 px-3 mt-3 mb-14 rounded-2xl text-sm font-bold text-white">
          Réduire
        </button>
      </div>

      <h3 class="pb-4 font-bold text-xl">Parcourir par Groupes</h3>

      <div class="grid grid-cols-2 gap-6">
        <CardsActivitéGroupe v-bind="groupe" v-for="groupe in groupes" :key="groupe.id"/>
      </div>

      <RouterLink to="#">
        <div class="flex justify-end">
          <button class="bg-red-600 flex justify-end p-1 px-3 mt-3 mb-14 rounded-2xl text-sm font-bold text-white">
            Voir plus de Groupes
          </button>
        </div>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SearchwhiteIcon from '@/components/icons/Iconsearchwhite.vue';
import CardsActivité from '@/components/Cards-Activité.vue';
import CardsActivitéGroupe from '@/components/Cards-Activité-Groupe.vue';
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { allSport, allGroupe } from '@/backend';

const sports = ref<any[]>([]);
const groupes = ref<any[]>([]);
const displayedSports = ref([]);
const initialCount = 4;
const incrementCount = 4;
const router = useRouter();

onMounted(async () => {
  sports.value = await allSport();
  groupes.value = await allGroupe();
  displayedSports.value = sports.value.slice(0, initialCount);
  updateTitle('Découvrez nos Activités !');
});

const showMoreSports = () => {
  const nextCount = displayedSports.value.length + incrementCount;
  displayedSports.value = sports.value.slice(0, nextCount);
};

const collapseSports = () => {
  displayedSports.value = sports.value.slice(0, initialCount);
};

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};

const goToSportActivities = (sportId: string) => {
  router.push({ name: 'SportsActivities', params: { sportId } });
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
