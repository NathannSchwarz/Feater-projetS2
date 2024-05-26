<script setup lang="ts">

import Carroussel from '@/components/carrousselindex1.vue'
import Carroussel3 from '@/components/Carroussel2.vue'
import { activités } from '@/data'
import { RouterLink } from 'vue-router'
const activitésFiltrées = activités.filter(activité => activité.id >= 1 && activité.id <= 3);
const activitésFiltrées2 = activités.filter(activité => activité.id >= 4 && activité.id <= 6);

</script>


<template>

    <div class="grille">

        <div class="bg-red-600 p-2.5 pt-4 pb-4 rounded-2xl">
            <h1 class="text-white pb-1">Content de te revoir Fabian !</h1>
            <p class="text-xs font-normal text-white">Tu as déjà fait la rencontre de <span class="font-bold">1 personnes</span> , continue comme ça, tu es sur la bonne voie !</p>

        </div>
  
        <h2 class=" text-center mb-6 mt-12 ">Nouveaux Challenges du jour !</h2>

        <Carroussel />

        <h3 class="pb-2 font-bold text-xl">Trouvez un coéquipier</h3>
        <nav class="pb-12">
            <RouterLink to="/activité">
                <button class="relative">
                    <img class="rounded-2xl " src="/img/courreur.webp" alt="activités">
                    <div class=" absolute bottom-0 w-full text-white text-left bg-black bg-opacity-80 p-4 rounded-b-2xl ">
                        <h4 class="text-sm font-bold pb-1">Trouve des gens en moins de 3 minute</h4>
                        <p class="text-xs font-extralight">Des gens de Montbéliard qui veulent pratiquer une activité physique avec toi  </p>
                    </div>
                </button> 
            </RouterLink>
        </nav>
        
        <h3 class="pb-2 font-bold text-xl">Activités faites pour vous</h3>

        <Carroussel3 :activités="activitésFiltrées" class="mb-12" />

        <h3 class="pb-2 font-bold text-xl">Coaching</h3>

        <nav class="pb-12 ">
            <RouterLink to="/coaching">
                <button class="relative ">
                    <img class="rounded-2xl " src="/img/coach.webp" alt="coaching">
                    <div class=" absolute bottom-0 w-full text-white text-left bg-black bg-opacity-80 p-4 rounded-b-2xl ">
                        <h4 class="text-sm font-bold pb-1">Séances coachées par des professionnels </h4>
                        <p class="text-xs font-extralight">Débutez, Apprenez, Perfectionnez avec des coach de qualités  </p>
                    </div>
                </button> 
            </RouterLink>
        </nav>

        <h3 class="pb-2 font-bold text-xl">Activités près de chez vous</h3>

        <Carroussel3 :activités="activitésFiltrées2" class="mb-12" />

        <h3 class="pb-2 font-bold text-xl">Carte</h3>

        <nav class="pb-12 ">
            <RouterLink to="/carte">
                <button class="relative ">
                    <img class="rounded-2xl " src="/img/cartemontbéliard.webp" alt="carte">
                    <div class=" absolute bottom-0 w-full text-white text-left bg-black bg-opacity-80 p-4 rounded-b-2xl ">
                        <h4 class="text-sm font-bold pb-1">Carte interactive de Montbéliard</h4>
                        <p class="text-xs font-extralight">Trouvez des lieux de rendez-vous, Challenges & Itinéraires </p>
                    </div>
                </button> 
            </RouterLink>
        </nav>

    </div>

</template>
