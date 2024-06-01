<script setup lang="ts">

import { onMounted } from 'vue';
/* import CardsNotification from '@/components/CardsNotification.vue' */

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('Retrouvez vos dernières notifications');
});

</script>


<template>

    <div class="mb-80">
      <nav class="grille ">
        <h1 class="font-bold text-3xl pb-5">Notifications</h1>
      </nav>

      <!-- <CardsNotification v-for="coach in 4"/> -->

      
      <!-- <input class="border rounded-3xl px-8 p-2 mb-5 grow" v-model="email" type="email" placeholder="Adresse e-mail"/>
      <input class="border rounded-3xl px-8 p-2 mb-5 grow" v-model="password" type="password" placeholder="Mot de passe" /> -->
    </div>

    
</template>
