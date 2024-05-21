<script setup lang="ts">
import CardsCoach from '@/components/CardsCoach.vue'
import Carroussel2 from '@/components/carrousselindex2.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'
</script>


<template>

<nav class="grille">

    <h1 class="font-bold text-3xl pb-5">Coaching</h1>

    <nav>
        <button class="flex items-center justify-between gap-4 p-3 bg-red-600 rounded-3xl mb-12 w-full">
            <ShieldIcon class="w-20"/>
            <h2 class="font-bold text-xl text-white text-left">Trouvez le coach qu'il vous faut !</h2>
            <flecheIcon class="rotate-180 h-6 w-10"/>
        </button>

        <Carroussel2/>
         <h3 class="pb-2 font-bold">En fonction de vos habitudes</h3>
         
         <div class="grid grid-cols-2 pb-12 ">
            <CardsCoach v-for="coach in 4" />
         </div>
        
        <Carroussel2/>

        <button class="flex items-center justify-around p-5 w-full mb-10 bg-red-600 rounded-3xl ">
        
            <h2 class="font-bold text-xl text-white">Devenir Coach !</h2>
            <ShieldIcon class=" h-14 w-14"/>
        </button>

    </nav>

    

</nav>
    

</template>
