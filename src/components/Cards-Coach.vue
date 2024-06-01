<script setup lang="ts">
import { defineProps } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  coachhabitude: {
    id: number;
    title: string;
    imgCardPath: string;
    imgAlt: string;
    link: string;
  }
}>();
</script>

<template>
  <nav>
    <RouterLink :to="coachhabitude.link">
      <button class="relative flex justify-center w-full rounded-xl pb-6">
        <div class="relative">
          <img class="rounded-xl" :src="coachhabitude.imgCardPath" :alt="coachhabitude.imgAlt"/>
          <div class="absolute bottom-0 left-0 w-full bg-black rounded-b-xl">
            <p class="text-white text-base font-bold text-center py-3">{{ coachhabitude.title }}</p>
          </div>
        </div>
      </button>
    </RouterLink>
  </nav>
</template>
