<script setup lang="ts">
import SearchwhiteIcon from '@/components/icons/Iconsearchwhite.vue'
import CardsActivité from '@/components/Cards-Activité.vue'
import { RouterLink } from 'vue-router'
import { sport } from '@/data' 
import { onMounted } from 'vue';
const sportFiltrées = sport.filter(sport => sport.id >= 1 && sport.id <= 4);

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('Découvrez nos Activités !');
});



</script>


<template>
    

    <title>Découvrez nos Activités</title>

    <nav class="grille">

        <h1 class="font-bold text-3xl pb-5">Activité</h1>
        
        <button class="flex items-center justify-around p-3 pt-4 pb-4 bg-red-600 rounded-xl mb-12 w-full">
            <SearchwhiteIcon class="w-10"/>
            <h2 class="font-bold text-base text-white text-left">Quelle sport recherchez-vous ?</h2>
            
        </button>

          <h3 class="pb-2 font-bold">Séléction du jour</h3>

        <button class="w-full">

            <div class="flex justify-around bg-red-700 p-5 rounded-3xl text-white gap-4 mb-10">
                <img class="rounded-3xl w-32" src="/img/course.webp" alt="Course à pied" />
                <div class="flex flex-col justify-between">
                    <div class="text-left">
                        <h3 class="pb-2 font-bold">Course à pied</h3>
                        <p>Montbéliard - 1h </p>
                        <p>Marie Louise</p>
                    </div>
                    
                    <h3 class="flex justify-end ">12 mars 2024</h3>
                </div>
            </div>

        </button>

         

        <div class="flex justify-around gap-3 pb-10">
             <RouterLink to="#">
            <button class="bg-red-600 text-white font-bold text-base p-2 px-3  rounded-3xl">
                Créer un groupe 
            </button>
            </RouterLink>
            <RouterLink to="#">
            <button class="bg-red-600 text-white font-bold text-base p-2 px-3 rounded-3xl">
                Créer un Activité
            </button>
            </RouterLink>
        </div>

         <h3 class="pb-4 font-bold">Parcourir par Sport</h3>

        <div class="grid grid-cols-2">
            <CardsActivité v-for="sport in sportFiltrées" :key="sport.id" :sport="sport"/>
        </div>

        <RouterLink to="#">
            <div class="flex justify-end mb-12">
            <button class="bg-red-500 p-1.5 rounded-3xl text-xs font-bold text-white">Voir plus de Sports</button>
            </div>
        </RouterLink>
  
        <h3 class="pb-4 font-bold">Parcourir par Groupe</h3>

        <div class="grid grid-cols-2 pb-12">
            <CardsActivité v-for="sport in sportFiltrées" :key="sport.id" :sport="sport"/>
        </div>
            
        <RouterLink to="#">
            <div class="flex justify-end -mt-10 mb-12 ">
                <button class="bg-red-500 p-1.5 rounded-3xl text-xs font-bold text-white">Voir plus de Groupes</button>
            </div>                  
        </RouterLink>
        
        
    </nav>

</template>
