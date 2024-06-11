<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue'
import { RouterLink } from 'vue-router'

import ImgPb from '@/components/ImgPb.vue'
import type { CoachResponse } from '@/pocketbase-types'
import { allCoach } from '@/backend'
const props = defineProps<CoachResponse<any>>()

const coachs = ref<any[]>([]) // Declare the activites variable and type it as an array of any objects

const currentIndex = ref(0)
const carouselRef = ref<HTMLElement | null>(null)

const next = () => {
  if (currentIndex.value < coachs.value.length - 1) {
    currentIndex.value += 1
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

const startX = ref(0)
const endX = ref(0)

const handleTouchStart = (event: TouchEvent) => {
  startX.value = event.touches[0].clientX
}

const handleTouchMove = (event: TouchEvent) => {
  endX.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  if (startX.value - endX.value > 50) {
    next()
  } else if (startX.value - endX.value < -50) {
    prev()
  }
}

onMounted(async () => {
  const allCoachs = await allCoach() // Fetch data when the component is mounted
coachs.value = allCoachs.slice(0, 3); // Take only the first 3 activities
  const carousel = carouselRef.value
  if (carousel) {
    carousel.addEventListener('touchstart', handleTouchStart)
    carousel.addEventListener('touchmove', handleTouchMove)
    carousel.addEventListener('touchend', handleTouchEnd)
  }
})

onUnmounted(() => {
  const carousel = carouselRef.value
  if (carousel) {
    carousel.removeEventListener('touchstart', handleTouchStart)
    carousel.removeEventListener('touchmove', handleTouchMove)
    carousel.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>

<template>
  <div ref="carouselRef" id="carousel" class="relative w-full overflow-hidden px-6 ">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 92}%) ` }"
    >
      <div v-for="(coach, index) in coachs" :key="index" class="w-11/12 h-42 flex-shrink-0 mr-4">
        <RouterLink :to="`/activite/${coach.id}`">
          <div class="relative flex justify-center w-auto h-40">
            <ImgPb
              :record="coach"
              :filename="coach.Image"
              class="rounded-xl w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 w-full h-1/2  text-white bg-red-500 px-5 py-2 rounded-b-xl "
            >
              <h4 class="text-lg font-bold ">{{ coach.Nom }} - {{ coach.Sport }}</h4>
              <div class="flex justify-between gap-2">
                <p class="text-xs">Coach depuis <span class="font-semibold"> {{ coach.Experience }}</span>.</p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
