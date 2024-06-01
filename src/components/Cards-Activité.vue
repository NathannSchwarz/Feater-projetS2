<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  <RouterLink :to="sport.link">
    <button class="flex justify-around rounded-3xl w-40 h-24 m-auto overflow-hidden relative mb-6">
      <img class="absolute w-full h-24 object-cover" :src="sport.imgCardPath" :alt="sport.imgAlt" />
      <div :class="`absolute w-full ${sport.bgColor} rounded-t-3xl`">
        <p class="text-white text-base font-bold py-2">{{ sport.title }}</p>
      </div>
    </button>
  </RouterLink>
</template>
