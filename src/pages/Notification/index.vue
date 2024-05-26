<script setup lang="ts">

import { onMounted, onBeforeUnmount } from 'vue';
import CardsNotification from '@/components/CardsNotification.vue'

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('Retrouvez vos dernières notifications');
});

</script>


<template>

    <nav class="grille ">
        <h1 class="font-bold text-3xl pb-5">Notifications</h1>
    </nav>

    <CardsNotification v-for="coach in 4"/>

</template>
