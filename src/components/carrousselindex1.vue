<script setup lang="ts">
import { ref } from 'vue';
import flecheIcon from '@/components/icons/Iconflèchemenu.vue';

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % 3;
};

const prev = () => {
  currentIndex.value = (currentIndex.value + 2) % 3; // Equivalent to (currentIndex.value - 1 + 3) % 3
};
</script>

<template>
  <div class="relative flex justify-center items-center w-full h-screen overflow-hidden">
    <button @click="prev" class="absolute left-0 bg-black bg-opacity-50 rounded-full p-4 z-20 m-4">
      <flecheIcon class="text-white w-8 h-8"/>
    </button>

    <div class="relative w-full h-full flex justify-center items-center overflow-hidden">
      <div class="flex w-full h-full justify-center items-center m-auto">
        <!-- Carousel Item 1 -->
        <div class="flex-shrink-0 flex justify-center items-center transition-all duration-500"
             :class="currentIndex === 0 ? 'z-10 scale-110 w-1/3 h-1/3 sm:w-1/4 sm:h-1/4 md:w-1/3 md:h-1/3 lg:w-1/4 lg:h-1/4' : 'z-0 scale-90 blur-md w-1/4 h-1/4 sm:w-1/6 sm:h-1/6 md:w-1/4 md:h-1/4 lg:w-1/6 lg:h-1/6'">
          <div class="w-full h-full flex flex-col items-center text-center border rounded-3xl bg-sky-500 mx-2 p-2">
            <div class="bg-white w-full opacity-70 p-2 rounded-t-3xl">
              <p class="text-sm font-bold">Changez de terrain</p>
              <p class="text-xs">Sortez de votre zone de confort !</p>
            </div>
            <img class="h-full w-full rounded-b-3xl object-cover" src="/img/challenge1.webp" alt="Challenge 1"/>
          </div>
        </div>
        <!-- Carousel Item 2 -->
        <div class="flex-shrink-0 flex justify-center items-center transition-all duration-500"
             :class="currentIndex === 1 ? 'z-10 scale-110 w-1/3 h-1/3 sm:w-1/4 sm:h-1/4 md:w-1/3 md:h-1/3 lg:w-1/4 lg:h-1/4' : 'z-0 scale-90 blur-md w-1/4 h-1/4 sm:w-1/6 sm:h-1/6 md:w-1/4 md:h-1/4 lg:w-1/6 lg:h-1/6'">
          <div class="w-full h-full flex flex-col items-center text-center border rounded-3xl bg-stone-300 mx-2 p-2">
            <div class="bg-white w-full opacity-70 p-2 rounded-t-3xl">
              <p class="text-sm font-bold">Prolongez vos efforts</p>
              <p class="text-xs">Croisez vos limites !</p>
            </div>
            <img class="h-full w-full rounded-b-3xl object-cover" src="/img/challenge2.webp" alt="Challenge 2"/>
          </div>
        </div>
        <!-- Carousel Item 3 -->
        <div class="flex-shrink-0 flex justify-center items-center transition-all duration-500"
             :class="currentIndex === 2 ? 'z-10 scale-110 w-1/3 h-1/3 sm:w-1/4 sm:h-1/4 md:w-1/3 md:h-1/3 lg:w-1/4 lg:h-1/4' : 'z-0 scale-90 blur-md w-1/4 h-1/4 sm:w-1/6 sm:h-1/6 md:w-1/4 md:h-1/4 lg:w-1/6 lg:h-1/6'">
          <div class="w-full h-full flex flex-col items-center text-center border rounded-3xl bg-rose-400 mx-2 p-2">
            <div class="bg-white w-full opacity-70 p-2 rounded-t-3xl">
              <p class="text-sm font-bold">Prouvez vos capacités</p>
              <p class="text-xs">Faites les mentir !</p>
            </div>
            <img class="h-full w-full rounded-b-3xl object-cover" src="/img/challenge3.webp" alt="Challenge 3"/>
          </div>
        </div>
      </div>
    </div>

    <button @click="next" class="absolute right-0 rotate-180 bg-black bg-opacity-50 rounded-full p-4 z-20 m-4">
      <flecheIcon class="text-white w-8 h-8"/>
    </button>
  </div>
</template>

<style scoped>
.blur-md {
  filter: blur(5px);
}

.scale-90 {
  transform: scale(0.9);
}

.scale-110 {
  transform: scale(1.10);
}
</style>
