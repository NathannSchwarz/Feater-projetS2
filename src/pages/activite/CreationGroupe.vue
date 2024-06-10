<script setup lang="ts">
import CardsActivité from '@/components/Cards-Activité.vue'

import { allSport } from '@/backend'
import { ref } from 'vue'
const sports = ref()
sports.value = await allSport()

</script>

<template>

  <nav class="grille">
    <h1 class="font-bold text-3xl mb-10">Choisissez un Sport</h1>
    <Routerlink to="">
        <div class="grid grid-cols-2 gap-6 mb-14">
            <CardsActivité v-bind="sport" v-for="sport in sports" :key="sport.id" />
        </div>
    </Routerlink>
  </nav>
</template>

