<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router/auto'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ImgPb from '@/components/ImgPb.vue'
import { pb, IDusers } from '@/backend'

const route = useRoute('/activite/[id]')
const activite = ref<any>(null)
const utilisateur = ref<any>(null)

onMounted(async () => {
  try {
    console.log('id :', route.params.id)

    // Récupérer les données de l'activité
    activite.value = await IDusers(route.params.id)

    if (activite.value) {
      // Récupérer l'utilisateur associé à l'activité
      const userId = activite.value.userId // Assurez-vous que c'est le bon champ pour l'ID utilisateur
      utilisateur.value = await pb.collection('users').getOne(userId)
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error)
  }
})
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-8">{{ activite?.Nom }}</h1>
    

    <ImgPb v-if="activite" :record="activite" :filename="activite.Image" alt="" class="w-full rounded-3xl mb-8" />

    <h3 class="text-2xl font-bold">{{ activite?.Adresse }}</h3>
    <p class="mb-8 text-sm font-normal">{{ activite?.Description }}</p>

    <h2 class="text-2xl font-bold pb-1">Rythme</h2>
    <ul class="flex text-xs font-normal items-center justify-start gap-3 mb-8">
      <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">
        {{ activite?.Ryhtme[0] }}
      </li>
      <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">
        {{ activite?.Ryhtme[1] }}
      </li>
      <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">
        {{ activite?.Ryhtme[2]  }}
      </li>
    </ul>

    <RouterLink to="/carte">
      <div class="flex items-center justify-between mb-10">
        <h3 class="text-xl font-bold pb-1">Voir sur la carte l’activité</h3>
        <flecheIcon class="h-5 w-10 rotate-180" />
      </div>
    </RouterLink>

    <RouterLink to="/activite/contact">
      <h3 class="w-5/6 m-auto text-red-600 text-center border-2 border-red-600 rounded-3xl p-4 mb-12">
        PRENDRE CONTACT
      </h3>
    </RouterLink>
  </div>
</template>
