<script setup lang="ts">
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'
import ImgPb from '@/components/ImgPb.vue'
import { onMounted, ref, computed, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

import type { CoachResponse } from '@/pocketbase-types'
import { allCoach } from '@/backend'

const coachs = ref<CoachResponse<any>[]>([])
coachs.value = await allCoach()

const filteredCoach1 = computed(() => coachs.value.slice(0, 3)) // First 3 coaches for first carousel
const filteredCoach2 = computed(() => coachs.value.slice(3, 6)) // Next 3 coaches for second carousel

const updateTitle = (newTitle: string) => {
  document.title = newTitle
}

const currentIndex1 = ref(0)
const carouselRef1 = ref<HTMLElement | null>(null)

const currentIndex2 = ref(0)
const carouselRef2 = ref<HTMLElement | null>(null)

const next = (currentIndex: Ref<number>, items: CoachResponse<any>[]) => {
  if (currentIndex.value < items.length - 1) {
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

const handleTouchEnd = (
  startX: Ref<number>,
  endX: Ref<number>,
  currentIndex: Ref<number>,
  items: CoachResponse<any>[]
) => {
  if (startX.value - endX.value > 50) {
    next(currentIndex, items)
  } else if (startX.value - endX.value < -50) {
    prev(currentIndex)
  }
}

onMounted(() => {
  updateTitle('Découvrez nos Coachs !')
  
  const carousel1 = carouselRef1.value
  if (carousel1) {
    carousel1.addEventListener('touchstart', (event) => handleTouchStart(event, startX1))
    carousel1.addEventListener('touchmove', (event) => handleTouchMove(event, endX1))
    carousel1.addEventListener('touchend', () => handleTouchEnd(startX1, endX1, currentIndex1, filteredCoach1.value))
  }

  const carousel2 = carouselRef2.value
  if (carousel2) {
    carousel2.addEventListener('touchstart', (event) => handleTouchStart(event, startX2))
    carousel2.addEventListener('touchmove', (event) => handleTouchMove(event, endX2))
    carousel2.addEventListener('touchend', () => handleTouchEnd(startX2, endX2, currentIndex2, filteredCoach2.value))
  }
})

onUnmounted(() => {
  const carousel1 = carouselRef1.value
  if (carousel1) {
    carousel1.removeEventListener('touchstart', (event) => handleTouchStart(event, startX1))
    carousel1.removeEventListener('touchmove', (event) => handleTouchMove(event, endX1))
    carousel1.removeEventListener('touchend', () => handleTouchEnd(startX1, endX1, currentIndex1, filteredCoach1.value))
  }

  const carousel2 = carouselRef2.value
  if (carousel2) {
    carousel2.removeEventListener('touchstart', (event) => handleTouchStart(event, startX2))
    carousel2.removeEventListener('touchmove', (event) => handleTouchMove(event, endX2))
    carousel2.removeEventListener('touchend', () => handleTouchEnd(startX2, endX2, currentIndex2, filteredCoach2.value))
  }
})
</script>

<template>
  <nav>
    <h1 class="font-bold text-3xl pb-5 mx-6">Coaching</h1>
    <nav>
      <RouterLink to="/coaching/recherche">
        <div class="flex justify-center items-center">
          <button class="flex items-center justify-between gap-4 p-3 bg-red-600 rounded-3xl mb-12 w-full mx-6">
            <ShieldIcon class="w-20"/>
            <h2 class="font-bold text-xl text-white text-left">Trouvez le coach qu'il vous faut !</h2>
            <flecheIcon class="rotate-180 h-6 w-10 text-white"/>
          </button>
        </div>
      </RouterLink>

      <h3 class="pb-2 font-bold text-xl mx-6">Coachs près de chez vous</h3>
      <div ref="carouselRef1" id="carousel1" class="relative w-full overflow-hidden px-6 mb-10">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex1 * 92}%)` }"
        >
          <div v-for="(coach, index) in filteredCoach1" :key="index" class="w-11/12 h-42 flex-shrink-0 mr-4">
            <RouterLink :to="`/activite/${coach.id}`">
              <div class="relative flex justify-center w-auto h-40">
                <ImgPb
                  :record="coach"
                  :filename="coach.Image"
                  class="rounded-xl w-full h-full object-cover"
                />
                <div class="absolute bottom-0 w-full h-1/2 text-white bg-red-500 px-5 py-2 rounded-b-xl">
                  <h4 class="text-lg font-bold">{{ coach.Nom }} - {{ coach.Sport }}</h4>
                  <div class="flex justify-between gap-2">
                    <p class="text-xs">Coach depuis <span class="font-semibold">{{ coach.Experience }}</span>.</p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <h3 class="pb-2 font-bold text-xl mx-6">En fonction de vos habitudes</h3>
      <div class="grid grid-cols-2 gap-6 mb-10 grille">
        <RouterLink to="#" class="col-start-2">
          <div class="flex justify-end">
            <button class="bg-red-500 p-2 px-3 -mt-2 rounded-2xl text-xs font-bold text-white">
              Voir plus de Sports
            </button>
          </div>
        </RouterLink>
      </div>

      <h3 class="pb-2 font-bold text-xl mx-6">Coachs déjà rencontrés</h3>
      <div ref="carouselRef2" id="carousel2" class="relative w-full overflow-hidden px-6 mb-12">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex2 * 92}%)` }"
        >
          <div v-for="(coach, index) in filteredCoach2" :key="index" class="w-11/12 h-42 flex-shrink-0 mr-4">
            <RouterLink :to="`/activite/${coach.id}`">
              <div class="relative flex justify-center w-auto h-40">
                <ImgPb
                  :record="coach"
                  :filename="coach.Image"
                  class="rounded-xl w-full h-full object-cover"
                />
                <div class="absolute bottom-0 w-full h-1/2 text-white bg-red-500 px-5 py-2 rounded-b-xl">
                  <h4 class="text-lg font-bold">{{ coach.Nom }} - {{ coach.Sport }}</h4>
                  <div class="flex justify-between gap-2">
                    <p class="text-xs">Coach depuis <span class="font-semibold">{{ coach.Experience }}</span>.</p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <RouterLink to="/coaching/DevenirCoach">
        <div class="flex justify-center items-center">
          <button class="flex items-center justify-around p-3 w-4/5 mb-12 bg-red-600 rounded-3xl">
            <h2 class="font-bold text-xl text-white">Devenir Coach !</h2>
            <ShieldIcon class="h-14 w-14"/>
          </button>
        </div>
      </RouterLink>
    </nav>
  </nav>
</template>
