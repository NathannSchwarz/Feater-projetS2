<script setup lang="ts">
import CardsActivitéFiltre from '@/components/Cards-ActiviteFiltre.vue'

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

    <div class="relative mb-14">
      <img class="rounded-3xl w-full h-36" src="/img/salledesport2.webp" alt="sport.imgAlt" />
      <div
        class="absolute top-0 w-full h-2/5 bg-black bg-opacity-90 rounded-t-3xl flex items-center justify-center"
      >
        <h1 class="text-white text-3xl font-bold text-center py-3">Salle de sport</h1>
      </div>
    </div>

    <!-- <CardsActivitéFiltre v-for="coach in 4"/> -->
  </nav>
</template>
