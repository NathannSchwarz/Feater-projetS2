<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue';
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  activités: {
    id: number;
    title: string;
    link: string;
  }[];
}>();

</script>

<template>

    <nav>
    <div v-for="activité in activités" :key="activité.id">
      <RouterLink :to="activité.link">
        <div class="flex justify-between items-center border-t p-3 px-6 border-black">
          <h3 class="font-bold">{{ activité.title }}</h3>
          <flecheIcon class="rotate-180"/>
        </div>
      </RouterLink>
    </div>
  </nav>
    

        
</template>