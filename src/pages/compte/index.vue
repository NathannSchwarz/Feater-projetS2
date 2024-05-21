<script setup lang="ts">

import Settings from '@/components/Settings.vue'
import ShieldIcon from '@/components/icons/IconCoachShield.vue'
</script>


<template>
    <nav class="grille">
        <h1 class="font-bold text-3xl pb-5">Compte</h1>
        <div class="flex flex-col items-center ">
            <img class="rounded-full w-32 mb-1" src="/img/course.webp" alt="Course à pied" />
            <h2 class="text-3xl font-extrabold">Fabian Dufour</h2>
            <p class="text-sm mb-4">Membre ID : HDHAD7421</p>
            <p class="bg-red-600 p-2 rounded-3xl text-sm font-bold text-white w-40 text-center mb-10">Membre Premium</p>
        </div>
        

        <div class="border-b border-black -mx-6 mb-10">
            <Settings v-for="coach in 4" />
        </div>
        

        <button class="flex items-center justify-around p-5 w-full mb-10 bg-red-600 rounded-3xl ">
        
            <h2 class="font-bold text-xl text-white">Devenir Coach !</h2>
            <ShieldIcon class=" h-14 w-14"/>
        </button>
        
    </nav>
    

</template>
