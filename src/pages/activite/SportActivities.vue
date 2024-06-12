<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router/auto'
import { pb } from '@/backend';
import ImgPb from '@/components/ImgPb.vue'

const route = useRoute()
const sport = ref<any>(null)
const activities = ref<any[]>([])

onMounted(async () => {
  try {
    const sportId = route.params.sportId
    if (sportId) {
      // Récupérer les données du sport
      sport.value = await pb.collection('sports').getOne(sportId)
      // Récupérer les activités associées à ce sport
      activities.value = await pb.collection('activities').getFullList({ filter: `Sport="${sportId}"` })
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error)
  }
})
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-8">{{ sport?.Nom }}</h1>
    <ImgPb v-if="sport" :record="sport" :filename="sport.Image" alt="" class="w-full rounded-3xl mb-8" />
    <h3 class="text-2xl font-bold mb-4">Activités liées</h3>
    <div class="grid grid-cols-1 gap-4">
      <div v-for="activity in activities" :key="activity.id" class="p-4 border rounded-lg">
        <h4 class="font-bold">{{ activity.Nom }}</h4>
        <p>{{ activity.Description }}</p>
        <RouterLink :to="`/activite/${activity.id}`" class="text-red-600">Voir plus</RouterLink>
      </div>
    </div>
  </div>
</template>
