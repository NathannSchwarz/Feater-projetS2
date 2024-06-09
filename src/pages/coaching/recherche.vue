<script setup lang="ts">

import SearchIcon from '@/components/icons/Iconsearch.vue'
import CardRechercheCoach from '@/components/CardsRechercheCoach.vue'
import { ref } from 'vue';
import { coach, coachhabitude } from '@/data' 

const coachsFiltrées3 = coachhabitude.filter(coach => coach.id >= 1 && coach.id <= 4);
const searchQuery = ref('');


</script>

<template>
    <div class="grille">
        <h1 class="font-bold text-3xl pb-2">Coaching</h1>

        <div class="w-full flex justify-center mt-5 mb-8">
            <div class="relative w-full max-w-screen-lg ">
            <input
                type="text"
                v-model="searchQuery"
                class="w-full pl-10 p-2  border-t border-b border-red-600 rounded-3xl shadow-sm  text-black placeholder:text-red-600"
                placeholder="Trouvez un coach..."
            />
            <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-600"/>
            </div>
        </div>

        <h2 class="mb-7">Recherches récentes</h2>

        <!-- <CardRechercheCoach v-for="coach in coachsFiltrées3" :key="coach.id" :coachhabitude="coach"/> -->
    </div>

    
    
    

</template>
