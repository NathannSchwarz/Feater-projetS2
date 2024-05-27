<script setup lang="ts">
import { ref } from 'vue';
import flecheIcon from '@/components/icons/Iconflèchemenu.vue';
import { RouterLink } from 'vue-router'
const currentIndex = ref(1);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % 3;
};

const prev = () => {
  currentIndex.value = (currentIndex.value + 2) % 3; // Equivalent to (currentIndex.value - 1 + 3) % 3
};
</script>

<template>
  <div class="relative flex justify-center items-center w-full pb-8 overflow-hidden">
    <button @click="prev" :class="{ 'hidden': currentIndex === 0 }" class="absolute left-10 bg-black bg-opacity-50 rounded-full p-2 z-20">
      <flecheIcon class="text-white w-6 h-6"/>
    </button>

    <div class="relative flex justify-center items-center overflow-hidden py-10 ">
      <div class="flex w-full m-auto">
        <RouterLink to="#">
          <div class="w-20 h-20 flex-shrink-0 flex justify-center transform transition-all duration-500"
              :class="currentIndex === 0 ? 'z-10 scale-110 w-44 h-44 ' : 'z-0 scale-90 blur-md '">
            <div class="w-full h-full flex flex-col items-center text-center border rounded-3xl bg-sky-500 mb-4 mx-2">
              <div class="bg-white w-full opacity-70 p-2 rounded-t-3xl">
                <p class="text-sm font-bold">Changez de terrain</p>
                <p class="text-xs">Sortez de votre zone de confort !</p>
              </div>
              <img class="h-full w-full" src="/img/challenge1.webp" alt="Challenge 1"/>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="#">
          <div class="w-20 h-20 flex-shrink-0 flex justify-center transform transition-all duration-500"
              :class="currentIndex === 1 ? 'z-10 scale-110 w-44 h-44 ' : 'z-0 scale-90 blur-md '">
            <div class="w-full h-full flex flex-col items-center text-center border rounded-3xl bg-stone-300 mb-4 mx-2">
              <div class="bg-white w-full opacity-70 p-2 rounded-t-3xl">
                <p class="text-sm font-bold">Prolongez vos efforts</p>
                <p class="text-xs">Croisez vos limites !</p>
              </div>
              <img class="h-full w-full rounded-b-3xl" src="/img/challenge2.webp" alt="Challenge 2"/>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="#">
        
          <div class="w-20 h-20 flex-shrink-0 flex justify-center transform transition-all duration-500"
              :class="currentIndex === 2 ? 'z-10 scale-110 w-44 h-44 ' : 'z-0 scale-90 blur-md '">
            <div class="w-full h-full flex flex-col items-center text-center border rounded-3xl bg-rose-400 mb-4 mx-2">
              <div class="bg-white w-full opacity-70 p-2 rounded-t-3xl">
                <p class="text-sm font-bold">Prouvez vos capacités</p>
                <p class="text-xs">Faites les mentir !</p>
              </div>
              <img class="h-full w-full rounded-b-3xl" src="/img/challenge3.webp" alt="Challenge 3"/>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <button @click="next" :class="{ 'hidden': currentIndex === 2 }" class="absolute right-10 rotate-180 bg-black bg-opacity-50 rounded-full p-2 z-20">
      <flecheIcon class="text-white w-6 h-6"/>
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

.w-36 {
  width: 9rem;
}

.h-48 {
  height: 12rem;
}
</style>
