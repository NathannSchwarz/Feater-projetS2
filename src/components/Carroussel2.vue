<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import flecheIcon from '@/components/icons/Iconflèchemenu.vue';

const props = defineProps<{
  activités: {
    id: number;
    title: string;
    date: string;
    description: string;
    imgCardPath: string;
    imgAlt?: string;
  }[];
}>();

const currentIndex = ref(0);

const next = () => {
  if (currentIndex.value < props.activités.length - 1) {
    currentIndex.value += 1;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const isNextDisabled = computed(() => currentIndex.value >= props.activités.length - 1);
const isPrevDisabled = computed(() => currentIndex.value <= 0);

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

onMounted(() => {
  const carousel = document.getElementById('carousel');
  if (carousel) {
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
  }
});

onUnmounted(() => {
  const carousel = document.getElementById('carousel');
  if (carousel) {
    carousel.removeEventListener('touchstart', handleTouchStart);
    carousel.removeEventListener('touchmove', handleTouchMove);
    carousel.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<template>
  <div id="carousel" class="relative w-full overflow-hidden ">
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
      <div v-for="activité in props.activités" :key="activité.id" class="w-full flex-shrink-0">
        <div class="relative flex justify-center w-4/5 h-36 m-auto">
          <img class="rounded-2xl w-full h-full object-cover" :src="activité.imgCardPath" :alt="activité.imgAlt || activité.title">
          <div class="absolute bottom-0 w-full text-white bg-red-500 p-2 rounded-b-2xl">
            <h4 class="text-sm font-bold pb-1">{{ activité.title }}</h4>
            <div class="flex justify-between">
              <p class="text-xs font-extralight">{{ activité.description }}</p>
              <p class="text-xs font-bold">{{ activité.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Boutons de navigation -->
    <button @click="prev" :disabled="isPrevDisabled" class="absolute w-8 h-8  top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full" :class="{ 'opacity-50 cursor-not-allowed': isPrevDisabled }">
      <flecheIcon class="w-4 h-4"/>
    </button>
    <button @click="next" :disabled="isNextDisabled" class="absolute w-8 h-8 right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full rotate-180" :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }">
      <flecheIcon class="w-4 h-4"/>
    </button>
  </div>
</template>


