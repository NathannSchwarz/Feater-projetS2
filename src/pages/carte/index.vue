<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PocketBase from 'pocketbase'
import ImgPb from '@/components/ImgPb.vue'
// Initialiser PocketBase
const pb = new PocketBase('https://feater.schwarznathan.fr:443')

const map = ref(null)
const markers = ref([])
const activities = ref([])

const selectedActivity = ref(null)
const selectedMarker = ref(null)

const router = useRouter() // Initialiser le router

// Limites géographiques pour Montbéliard
const montbeliardBounds = [
  [47.4975, 6.7875], // Sud-Ouest
  [47.5185, 6.8105] // Nord-Est
]

const initializeMap = () => {
  map.value = L.map('map', {
    center: [47.503, 6.794], // Centre par défaut de Montbéliard
    zoom: 14
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value)

  // Définir les limites de la carte sans recentrage automatique
  map.value.setMaxBounds(montbeliardBounds)

  // Obtenir et afficher la localisation de l'utilisateur
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude
        const userLon = position.coords.longitude
        const userMarker = L.marker([userLat, userLon], {
          icon: L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        }).addTo(map.value)
        userMarker.bindPopup('Vous êtes ici').openPopup()
        map.value.setView([userLat, userLon], 14)
      },
      (error) => {
        console.error('Erreur lors de la récupération de la localisation:', error)
      }
    )
  } else {
    console.error("La géolocalisation n'est pas supportée par ce navigateur.")
  }
}

const fetchActivities = async () => {
  try {
    activities.value = await pb.collection('Activite').getFullList({
      sort: '-created'
    })
    activities.value.forEach((activity) => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(activity.Adresse)}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0]
            const marker = L.marker([lat, lon]).addTo(map.value)
            marker.on('click', () => {
              if (selectedMarker.value) {
                selectedMarker.value.setIcon(
                  L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                  })
                )
              }
              marker.setIcon(
                L.icon({
                  iconUrl:
                    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-red.png',
                  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41]
                })
              )
              selectedActivity.value = activity
              selectedMarker.value = marker
            })
            map.value.on('click', () => {
              if (selectedMarker.value) {
                selectedMarker.value.setIcon(
                  L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                  })
                )
                selectedMarker.value = null
                selectedActivity.value = null
              }
            })
            markers.value.push(marker)
          }
        })
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des données des activités:', error)
  }
}

const goToActivity = (activityId: string) => {
  router.push(`/activite/${activityId}`)
}

onMounted(() => {
  initializeMap()
  fetchActivities()
})
</script>

<template>

  <h1 class="font-bold text-3xl mb-5 px-6">Carte</h1>
  <div class="relative w-full h-full">
    <div id="map" class="w-full h-full"></div>

    <div
      v-if="selectedActivity"
      class="absolute inset-x-0 bottom-0 shadow-lg rounded-lg w-3/4 mx-auto mb-4 z-10"
    >
      <button
        @click="selectedActivity = null"
        class="absolute top-2 right-2 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center"
      >
        &times;
      </button>
      <ImgPb
        v-if="selectedActivity"
        :record="selectedActivity"
        :filename="selectedActivity.Image"
        alt="Image de l'activité"
        class="w-full h-20 object-cover rounded-t-2xl"
      />
      <div class="bg-red-600 text-white px-4 py-3 rounded-b-2xl flex justify-between">
        <div class="flex flex-col">
          <h2 class="text-md font-bold mb-1">{{ selectedActivity.Nom }}</h2>
          <p class="text-sm">{{ selectedActivity.Niveau }} - {{ selectedActivity.Ryhtme[0] }}</p>
        </div>

        
          <button
            @click="goToActivity(selectedActivity.id)"
            class=" px-2 py-2 bg-white text-red-600 mt-10 rounded-xl text-sm font-bold"
          >
            Ouvrir
          </button>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
#map {
  height: 500px;
  width: 100%;
  z-index: 0; /* Ajoutez un z-index inférieur pour la carte */
  position: relative; /* Position relative pour la carte */
}
</style>
