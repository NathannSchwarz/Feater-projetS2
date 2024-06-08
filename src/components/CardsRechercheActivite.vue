<script setup lang="ts">
import { defineProps } from 'vue';
import IconCross from '@/components/icons/Iconcross.vue'
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
    <div class="flex bg-red-600 gap-2 p-3 mb-10 rounded-3xl ">
      <img src="/img/badminton.webp" alt="imgsportif" class="w-14 h-14 rounded-full ">
      <div class="flex flex-col text-white">
        <p class="font-bold text-base pb-1">Mathieu LeBlanc</p>
        <ul class="flex ">
          <li class="text-sm font-medium bg-gray-100 text-red-600 text-center m-1 px-3 rounded-3xl">Vélo</li>
          <li class="text-sm font-medium bg-gray-100 text-red-600  m-1 px-3 rounded-3xl">Expert</li>
          <li class="text-sm font-medium bg-gray-100 text-red-600 text-center m-1 px-3 rounded-3xl">Intensif</li>
        </ul>
      </div>
      <IconCross class="w-4 text-white mr-1"/>
    </div>
  </nav>

</template>