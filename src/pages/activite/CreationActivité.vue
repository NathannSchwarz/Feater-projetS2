<script setup lang="ts">
import CardsActivité from '@/components/Cards-Activité.vue'
/* const sportFiltrées = sport.filter(sport => sport.id >= 1 && sport.id <= 4); */

import { allSport } from '@/backend'
import { ref } from 'vue'
import { RouterLink } from 'vue-router/auto';
const sports = ref()
sports.value = await allSport()

</script>

<template>

  <nav class="grille">
    <h1 class="font-bold text-3xl mb-10">Choisissez un Sport</h1>
      <RouterLink to="/activite/RDV">
        <div class="grid grid-cols-2 gap-6 mb-14">
            <CardsActivité v-bind="sport" v-for="sport in sports" :key="sport.id" />    
        </div>
      </RouterLink>
  </nav>
</template>

