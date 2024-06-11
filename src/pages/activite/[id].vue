<script setup lang="ts">
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ImgPb from '@/components/ImgPb.vue'

import { IDusers } from '@/backend'
import { useRoute } from 'vue-router/auto'
import { ref } from 'vue'
const route = useRoute('/activite/[id]')
console.log('id :', route.params.id)
const activite = ref()
activite.value = await IDusers(route.params.id)

import type { ActiviteResponse } from '@/pocketbase-types'
const activites: ActiviteResponse<any> = await IDusers(route.params.id)
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-8">{{ activite.Nom }}</h1>

    <ImgPb :record="activites" :filename="activite.Image" alt="" class="w-full rounded-3xl mb-8" />

    <h2 class="text-2xl font-bold">{{ activite.Adresse }}</h2>
    <p class="mb-8 text-sm font-normal">{{ activite.Description }}</p>

    <h2 class="text-2xl font-bold pb-1">Personnalité</h2>
    <ul class="flex text-xs font-normal items-center justify-start gap-3 mb-8">
      <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">Sociable</li>
      <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">Motivé</li>
      <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">Déterminé</li>
    </ul>

    <Routerlink to="/carte">
      <div class="flex items-center justify-between mb-10">
        <h3 class="text-xl font-bold pb-1">Voir sur la carte l’activité</h3>
        <flecheIcon class="h-5 w-10 rotate-180" />
      </div>
    </Routerlink>

    <RouterLink to="/coaching/contact">
      <h3
        class="w-5/6 m-auto text-red-600 text-center border-2 border-red-600 rounded-3xl p-4 mb-12"
      >
        PRENDRE CONTACT
      </h3>
    </RouterLink>
  </div>
</template>
