<script setup lang="ts">

import CardsAccueil from '@/components/CardsAccueil.vue'

</script>


<template>

    <div class="m-5">

        <div class="bg-red-600 p-4 rounded-xl">
            <h1 class="text-white pb-1">Content de te revoir Fabian !</h1>
            <p class="text-xs font-normal text-white">Tu as déjà fait la rencontre de 1 personnes, continue comme ça, tu es sur la bonne voie !</p>

        </div>
  
        <h2 class=" text-center mb-8 mt-8 ">Nouveaux Challenges du jour !</h2>

        <div>

            <CardsAccueil />
            <CardsAccueil />
            <CardsAccueil />
            
        </div>






    </div>

        

        
  
</template>
