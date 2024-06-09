<script setup lang="ts">
import CardsActivité from '@/components/Cards-Activité.vue'
const sportFiltrées = sport.filter(sport => sport.id >= 1 && sport.id <= 4);
import { sport } from '@/data' 
</script>

<template>

  <nav class="grille">
    <h1 class="font-bold text-3xl mb-10">Choisissez un Sport</h1>
      <Routerlink to="/activité/RDV">
        <div class="grid grid-cols-2 gap-6 mb-14">
            <CardsActivité v-for="sport in sportFiltrées" :key="sport.id" :sport="sport" />
        </div>
      </Routerlink>
  </nav>
</template>

