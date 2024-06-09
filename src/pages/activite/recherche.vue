<script setup lang="ts">
import SearchIcon from '@/components/icons/Iconsearch.vue'
import CardRechercheActivité from '@/components/CardsRechercheActivite.vue'
import { ref } from 'vue'
import { coach, coachhabitude } from '@/data'

const coachsFiltrées3 = coachhabitude.filter((coach) => coach.id >= 1 && coach.id <= 4)
const searchQuery = ref('')
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl pb-2">Activité</h1>

    <div class="w-full flex justify-center mt-5 mb-8">
      <div class="relative w-full max-w-screen-lg">
        <input
          type="text"
          v-model="searchQuery"
          class="w-full pl-10 p-2 border rounded-3xl shadow-sm focus:outline-none border-gray-400 text-black"
          placeholder="Trouvez un sport..."
        />
        <SearchIcon
          class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        />
      </div>
    </div>

    <h2 class="mb-7">Recherches récentes</h2>

    <!-- <CardRechercheActivité
      v-for="coach in coachsFiltrées3"
      :key="coach.id"
      :coachhabitude="coach"
    /> -->
  </div>
</template>
