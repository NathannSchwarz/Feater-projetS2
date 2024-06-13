<script setup lang="ts">
import Carrousselchallenge from '@/components/Carroussel-challenge.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed, onUnmounted, defineProps } from 'vue'
import Pocketbase from 'pocketbase'

import type { ActiviteResponse } from '@/pocketbase-types'
import { allActivite } from '@/backend'
const activites = ref<ActiviteResponse<any>[]>([])

let pb = null
let currentuser = ref(null) // Assurez-vous de définir currentuser

onMounted(async () => {
  const allActivities = await allActivite()
  activites.value = allActivities // Ne limitez pas les données ici
  console.log(activites.value)

  pb = new Pocketbase('http://127.0.0.1:8090')
  currentuser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const filteredActivites1 = computed(() => activites.value.slice(0, 4)) // First 3 activities for first carousel
const filteredActivites2 = computed(() => activites.value.slice(4, 9)) // All remaining activities for second carousel

import ImgPb from '@/components/ImgPb.vue'
const props = defineProps<ActiviteResponse<any>>()

const currentIndex1 = ref(0)
const carouselRef1 = ref<HTMLElement | null>(null)

const currentIndex2 = ref(0)
const carouselRef2 = ref<HTMLElement | null>(null)

const next = (currentIndex: Ref<number>, activites: Ref<ActiviteResponse<any>[]>) => {
  if (currentIndex.value < activites.value.length - 1) {
    currentIndex.value += 1
  }
}

const prev = (currentIndex: Ref<number>) => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

const startX1 = ref(0)
const endX1 = ref(0)

const startX2 = ref(0)
const endX2 = ref(0)

const handleTouchStart = (event: TouchEvent, startX: Ref<number>) => {
  startX.value = event.touches[0].clientX
}

const handleTouchMove = (event: TouchEvent, endX: Ref<number>) => {
  endX.value = event.touches[0].clientX
}

const handleTouchEnd = (startX: Ref<number>, endX: Ref<number>, currentIndex: Ref<number>, activites: Ref<ActiviteResponse<any>[]>) => {
  if (startX.value - endX.value > 50) {
    next(currentIndex, activites)
  } else if (startX.value - endX.value < -50) {
    prev(currentIndex)
  }
}

onMounted(() => {
  const carousel1 = carouselRef1.value
  if (carousel1) {
    carousel1.addEventListener('touchstart', (event) => handleTouchStart(event, startX1))
    carousel1.addEventListener('touchmove', (event) => handleTouchMove(event, endX1))
    carousel1.addEventListener('touchend', () => handleTouchEnd(startX1, endX1, currentIndex1, activites))
  }

  const carousel2 = carouselRef2.value
  if (carousel2) {
    carousel2.addEventListener('touchstart', (event) => handleTouchStart(event, startX2))
    carousel2.addEventListener('touchmove', (event) => handleTouchMove(event, endX2))
    carousel2.addEventListener('touchend', () => handleTouchEnd(startX2, endX2, currentIndex2, filteredActivites2))
  }
})

onUnmounted(() => {
  const carousel1 = carouselRef1.value
  if (carousel1) {
    carousel1.removeEventListener('touchstart', (event) => handleTouchStart(event, startX1))
    carousel1.removeEventListener('touchmove', (event) => handleTouchMove(event, endX1))
    carousel1.removeEventListener('touchend', () => handleTouchEnd(startX1, endX1, currentIndex1, activites))
  }

  const carousel2 = carouselRef2.value
  if (carousel2) {
    carousel2.removeEventListener('touchstart', (event) => handleTouchStart(event, startX2))
    carousel2.removeEventListener('touchmove', (event) => handleTouchMove(event, endX2))
    carousel2.removeEventListener('touchend', () => handleTouchEnd(startX2, endX2, currentIndex2, filteredActivites2))
  }
})
</script>

<template>
  <div>
    <div v-if="currentuser" class="bg-red-600 p-2.5 pt-4 pb-4 rounded-xl mx-6">
      <h1 class="text-white pb-1">Content de te revoir, {{ currentuser.Prenom }}</h1>
      <p class="text-xs font-normal text-white">
        Tu as déjà fait la rencontre de <span class="font-bold">1 personnes</span> , continue comme
        ça, tu es sur la bonne voie !
      </p>
    </div>

    <h2 class="text-center mt-10">Nouveaux Challenges du jour !</h2>
    <Carrousselchallenge />

    <h3 class="pb-2 font-bold text-xl mx-6">Activités faites pour vous</h3>

    <div class="mb-12">
      <div ref="carouselRef1" id="carousel1" class="relative w-full overflow-hidden px-6">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex1 * 93}%)` }"
        >
          <div
            v-for="activite in filteredActivites2"
            :key="activite.id"
            class="w-11/12 h-42 flex-shrink-0 mr-4"
          >
            <RouterLink :to="`/activite/${activite.id}`">
              <div class="relative flex justify-center w-auto h-40">
                <ImgPb
                  :record="activite"
                  :filename="activite.Image"
                  class="rounded-xl w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 w-full h-1/2 text-white bg-red-500 px-5 py-2 rounded-b-xl"
                >
                  <h4 class="text-lg font-bold">{{ activite.Nom }}</h4>
                  <div class="flex justify-between gap-2">
                    <p class="text-xs">{{ activite.Niveau }} - {{ activite.Adresse }}</p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <h3 class="pb-2 font-bold text-xl mx-6">En fonction de vos habitudes</h3>
    <div class="mb-12">
      <div ref="carouselRef2" id="carousel2" class="relative w-full overflow-hidden px-6">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex2 * 93}%)` }"
        >
          <div
            v-for="activite in filteredActivites1"
            :key="activite.id"
            class="w-11/12 h-42 flex-shrink-0 mr-4"
          >
            <RouterLink :to="`/activite/${activite.id}`">
              <div class="relative flex justify-center w-auto h-40">
                <ImgPb
                  :record="activite"
                  :filename="activite.Image"
                  class="rounded-xl w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 w-full h-1/2 text-white bg-red-500 px-5 py-2 rounded-b-xl"
                >
                  <h4 class="text-lg font-bold">{{ activite.Nom }} -</h4>
                  <div class="flex justify-between gap-2">
                    <p class="text-xs">{{ activite.Niveau }} - {{ activite.Adresse }}</p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <h3 class="pb-2 font-bold text-xl mx-6">Voici ce qu'on vous propose</h3>
    <nav class="pb-2 mx-6">
      <RouterLink to="/activite">
        <button class="relative">
          <img class="rounded-xl" src="/img/courreur.webp" alt="activités" />
          <div
            class="absolute bottom-0 w-full h-20 text-white text-left bg-black bg-opacity-80 p-4 rounded-b-xl"
          >
            <h3 class="font-bold text-xl pb-1">Trouvez un coéquipier</h3>
            <p class="text-xs font-extralight">
              Trouvez la ou les personnes qui vous accompagneront
            </p>
          </div>
        </button>
      </RouterLink>
    </nav>

    <div class="grid grid-cols-2 gap-4 mx-6">
      <nav class="pb-10 w-full object-cover">
        <RouterLink to="/coaching">
          <button class="relative w-full">
            <img class="rounded-xl h-28 w-full" src="/img/coach.webp" alt="coaching" />
            <div
              class="absolute bottom-0 w-full h-12 text-white text-left bg-black bg-opacity-80 p-2 px-3 rounded-b-xl"
            >
              <h4 class="font-bold text-xl pb-1">Coaching</h4>
            </div>
          </button>
        </RouterLink>
      </nav>

      <nav class="pb-12 w-full object-cover">
        <RouterLink to="/carte">
          <button class="relative w-full">
            <img class="rounded-xl h-28 w-full" src="/img/cartemontbéliard.webp" alt="carte" />
            <div
              class="absolute bottom-0 w-full h-12 text-white text-left bg-black bg-opacity-80 p-2 px-3 rounded-b-xl"
            >
              <h4 class="font-bold text-xl pb-1">Carte</h4>
            </div>
          </button>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
