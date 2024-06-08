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
        
        <button class="flex items-center justify-around p-3 pt-4 pb-4 bg-red-700 rounded-3xl mb-8 w-full">
            <SearchwhiteIcon class="w-10"/>
            <h2 class="font-bold text-base text-white text-left">Quelle sport recherchez-vous ?</h2>
            
        </button>

          <h3 class="pb-2 font-bold text-2xl">Sélection du jour</h3>

        <button class="w-full">

           
        <div class="grid grid-cols-12 grid-rows-2 bg-red-700 p-5 rounded-3xl text-white text-lg  mb-10">
            <img class="col-span-5 row-span-2 rounded-3xl" src="/img/course.webp" alt="Course à pied" />

            <div class="text-left col-span-7 row-span-1 pl-5">
                <h3 class="pb-1 font-bold">Course à pied</h3>
                <p class="text-sm">Montbéliard - 1h</p>
                <p class="text-sm">Marie Louise</p>  
            </div>

            <h3 class="col-start-7 col-end-13 row-span-1  self-end text-right">12 mars 2024</h3>
        </div>



        </button>

         

        <div class="flex justify-around gap-5 pb-10">
             <RouterLink to="#">
            <button class=" bg-red-600 text-white font-bold text-base p-3 px-3  rounded-2xl">
                Créer un groupe 
            </button>
            </RouterLink>
            <RouterLink to="#">
            <button class="border border-red-600 text-red-600 font-bold text-base p-3 px-3 rounded-2xl">
                Créer un Activité
            </button>
            </RouterLink>
        </div>
        

        <h3 class="pb-4 font-bold text-xl">Parcourir par Sport</h3>

        
        <div class="grid grid-cols-2 gap-6 mb-14">
            <CardsActivité v-for="sport in sportFiltrées" :key="sport.id" :sport="sport" />

            <RouterLink to="#" class="col-start-2">
                <div class="flex justify-end ">
                <button class="bg-red-600  p-2 px-3 -mt-2 rounded-2xl text-xs font-bold text-white">Voir plus de Sports</button>
                </div>
            </RouterLink>
        </div>
        

        <h3 class="pb-4 font-bold text-xl">Parcourir par Groupes</h3>

        
        <div class="grid grid-cols-2 gap-6 mb-10">
            <CardsActivité v-for="sport in sportFiltrées" :key="sport.id" :sport="sport" />

            <RouterLink to="#" class="col-start-2">
                <div class="flex justify-end ">
                <button class="bg-red-600  p-2 px-3  -mt-2 rounded-2xl text-xs font-bold text-white">Voir plus de Groupes</button>
                </div>
            </RouterLink>
        </div>
        
  
    </nav>

</template>
