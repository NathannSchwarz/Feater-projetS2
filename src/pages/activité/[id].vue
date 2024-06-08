<script setup lang="ts">

import flecheIcon from '@/components/icons/Iconflèchemenu.vue'


</script>

<template>

    <div class="grille">
        <h1 class="font-bold text-3xl mb-8">Maxime Marchet</h1>

        <img src="/public/img/coequipier.webp" alt="" class="w-full rounded-3xl mb-8">

        <h2 class="text-2xl font-bold ">Audincourt - Basic Fit</h2>
        <p class="mb-8 text-sm font-normal">Je suis un coach de sport passionné et engagé, dévoué à inspirer mes athlètes à atteindre leur plein potentiel. Avec des années d'expérience dans l'entraînement sportif, je me spécialise dans la transformation des performances individuelles et d'équipe.</p>

        <h2 class="text-2xl font-bold pb-1">Personnalité</h2>
        <ul class="flex text-xs font-normal items-center justify-start gap-3 mb-8">
            <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">Sociable</li>
            <li class="bg-red-600 text-center text-white p-1.5 px-3  rounded-3xl">Motivé</li>
            <li class="bg-red-600 text-center text-white p-1.5 px-3  rounded-3xl">Déterminé</li>
        </ul>
        
        <Routerlink to="/carte">
            <div class="flex items-center justify-between mb-10">
                <h3 class="text-xl font-bold pb-1">Voir sur la carte l’activité</h3>
                <flecheIcon class="h-5 w-10 rotate-180"/>
            </div>
        </Routerlink>

        <RouterLink to="/coaching/contact">
            <h3 class="w-5/6 m-auto text-red-600 text-center border-2 border-red-600 rounded-3xl p-4 mb-12">PRENDRE CONTACT</h3>
        </RouterLink>
    </div>

</template>
