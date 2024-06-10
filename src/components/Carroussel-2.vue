<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import { RouterLink } from 'vue-router';

import ImgPb from '@/components/ImgPb.vue';
import type { ActiviteResponse } from '@/pocketbase-types';
import { allActivite } from '@/backend';
const props = defineProps<ActiviteResponse<any>>();

const activites = ref<any[]>([]);  // Declare the activites variable and type it as an array of any objects


const currentIndex = ref(0);
const carouselRef = ref<HTMLElement | null>(null);

const next = () => {
  if (currentIndex.value < activites.value.length - 1) {
    currentIndex.value += 1;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const startX = ref(0);
const endX = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  startX.value = event.touches[0].clientX;
};

const handleTouchMove = (event: TouchEvent) => {
  endX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (startX.value - endX.value > 50) {
    next();
  } else if (startX.value - endX.value < -50) {
    prev();
  }
};

onMounted(async () => {
  activites.value = await allActivite();  // Fetch data when the component is mounted
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
  }
});

onUnmounted(() => {
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.removeEventListener('touchstart', handleTouchStart);
    carousel.removeEventListener('touchmove', handleTouchMove);
    carousel.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>



<template>
  <div ref="carouselRef" id="carousel" class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out justify-center items-center"
         :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="w-full flex-shrink-0">
          <RouterLink :to="`/activite/${activites.id}`">
            <div class="relative flex justify-center w-auto h-44">
              <ImgPb :record="props" :filename="Image"  class="rounded-xl w-full h-full object-cover"  />
              <div class="absolute bottom-0 w-full h-1/2 text-white bg-red-500 px-3 py-1 rounded-b-xl">
                <h4 class="text-lg font-bold pb-1">{{ Nom }}{{ Date }}</h4>
                <div class="flex justify-between gap-2">
                  <p class="text-sm">{{ Niveau }}</p>
                  <p class="text-sm font-bold">{{ Adresse }}</p>
                </div>
              </div>
            </div>
          </RouterLink>
      </div>
    </div>
  </div>
</template>

