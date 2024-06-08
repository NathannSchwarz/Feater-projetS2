<script setup lang="ts">
import CardsActivitéGroupe from '@/components/Cards-ActiviteGroupe.vue'

import { sport } from '@/data'
import { onMounted } from 'vue'
const sportFiltrées = sport.filter((sport) => sport.id >= 1 && sport.id <= 4)

const updateTitle = (newTitle: string) => {
  document.title = newTitle
}

onMounted(() => {
  updateTitle('Découvrez nos Activités !')
})
</script>

<template>
  <title>Découvrez nos Activités</title>

  <nav class="grille">
    <h2 class="mb-5 text-3xl font-bold">Montbé' VTT</h2>  
    
    <div class="relative mb-5">
      <img class="rounded-3xl w-full h-32" src="/img/salledesport2.webp" alt="sport.imgAlt" />
      <div class="absolute top-0 w-full h-full bg-black bg-opacity-80 rounded-3xl "> 
        <div class="flex flex-col p-4 items-end">
          <h1 class="text-white mb-1 text-3xl font-bold">15 Mars 2024</h1>
          <h2 class="text-white mb-1 text-lg font-semibold">Montbéliard - 14h</h2>
          <h3 class=" text-white mb-10 text-base font-medium ">Parc du Près-la-Rose </h3>

        </div>
        
      </div>
    </div>
  
    <h4 class="text-xl font-bold mb-4">Déjà inscrit au prochain RDV </h4>
    <CardsActivitéGroupe v-for="coach in 4"/>
  </nav>
</template>
