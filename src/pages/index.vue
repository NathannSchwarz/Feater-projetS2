<script setup lang="ts">

import CardsAccueil from '@/components/CardsAccueil.vue'
import Carroussel from '@/components/carrousselindex1.vue'
import Carroussel2 from '@/components/carrousselindex2.vue'

</script>


<template>

    <div class="m-5">

        <div class="bg-red-600 p-2.5 pt-4 pb-4 rounded-2xl">
            <h1 class="text-white pb-1">Content de te revoir Fabian !</h1>
            <p class="text-xs font-normal text-white">Tu as déjà fait la rencontre de 1 personnes, continue comme ça, tu es sur la bonne voie !</p>

        </div>
  
        <h2 class=" text-center mb-8 mt-8 ">Nouveaux Challenges du jour !</h2>

        <Carroussel/>

        <CardsAccueil />
        <CardsAccueil />
        <Carroussel2/>
        <CardsAccueil />

    </div>

</template>
