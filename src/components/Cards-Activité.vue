<script setup lang="ts">
import { defineProps } from 'vue';


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
    <RouterLink :to="sport.link">
      <button class="rounded-xl w-full h-full">
        <div class="relative">
          <img class="rounded-3xl w-full" :src="sport.imgCardPath" :alt="sport.imgAlt"/>
          <div class="absolute bottom-0 w-full h-1/3 bg-black rounded-b-3xl flex items-center justify-center">
            <p class="text-white text-lg font-bold text-center py-3">{{ sport.title }}</p>
          </div>
        </div>
      </button>
    </RouterLink>
  </nav>
</template>