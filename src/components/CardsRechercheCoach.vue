<script setup lang="ts">
import { defineProps } from 'vue';
import { coach, coachhabitude } from '@/data' 
const props = defineProps<{
  coaches: {
    id: number;
    Prénom: string;
    Nom: string;
    Sport: string;
    experience: string;
    imgCardPath: string;
    imgAlt?: string;
    link: string;
  }[];
}>();

</script>


<template>

  <nav>
    <div class="flex bg-red-600 gap-5 p-3 mb-10 rounded-3xl">
      <img src="/public/img/badminton.webp" alt="imgsportif" class="w-14 h-14 rounded-full ">
      <div class="flex flex-col text-white">
        <p class="font-bold text-base">Mathieu LeBlanc</p>
        <p class="font-light text-sm pb-2">Montbéliard -  10 Rue Frédéric Chopin</p>
        <ul class="grid grid-cols-3 gap-3">
          <li class="text-sm font-medium bg-gray-100 text-red-600 text-center p-1 rounded-3xl">Vélo</li>
          <li class="text-sm font-medium bg-gray-100 text-red-600 text-center p-1 rounded-3xl">Expert</li>
          <li class="text-sm font-medium bg-gray-100 text-red-600 text-center p-1 rounded-3xl">Intensif</li>
        </ul>
      </div>
    </div>
  </nav>

</template>