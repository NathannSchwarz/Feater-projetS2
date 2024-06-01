<script setup lang="ts">

/* import Settings from '@/components/Settings.vue' */
/* import { settings } from '@/data' */
import { onMounted } from 'vue/dist/vue.js';




/* const settingsFiltrées2 = settings.filter(settings => settings.id >= 5 && settings.id <= 8); */

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};

onMounted(() => {
  updateTitle('Votre compte / Vos Paramètres');
});


</script>


<template>


    <h1 class="font-bold text-3xl pb-5 px-6">Paramètres</h1>
    
        
        
    
        
    
        

</template>
