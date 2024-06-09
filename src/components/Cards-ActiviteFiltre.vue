<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps<{
  sport: {
    id: number;
    title: string;
    imgCardPath: string;
    imgAlt: string;
    link: string;
    bgColor: string;
  }
}>();
</script>


<template>
  <nav>
    <RouterLink to="/activite/[id]">
      <div class="flex bg-red-600 gap-4 p-3 px-6 mb-10 rounded-3xl">
        <img src="/img/badminton.webp" alt="imgsportif" class="w-14 h-14 rounded-full ">
        <div class="flex flex-col  text-white ">
            <p class="font-bold text-base pb-1">Mathieu LeBlanc</p>
            <p class="font-light text-xs pb-2">Montbéliard -  Basic Fit Centre</p>
            <ul class="grid grid-cols-2 gap-4 ">
                <li class="text-xs font-medium bg-gray-100 text-red-600 flex justify-center text-center m-1 px-10 rounded-3xl">Expert</li>
                <li class="text-xs font-medium bg-gray-100 text-red-600 flex justify-center text-center m-1 px-10 rounded-3xl">Intensif</li>
            </ul>
        </div>
        <IconCross class="w-4 text-white mr-1"/>
      </div>
    </RouterLink>
  </nav>
</template>