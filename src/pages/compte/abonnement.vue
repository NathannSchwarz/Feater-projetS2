<script setup lang="ts">

import IconCheck from '@/components/icons/IconCheck.vue'

</script>


<template>

    <nav class="grille">

        <h1 class="font-bold text-3xl pb-5">Abonnement</h1>
        
        <p class="mb-10">Vous trouverez ici toutes les informations sur votre abonnement. <span class="font-bold">Plus rien ne peut vous échapper ! </span></p>

        <div class="bg-red-700 p-5 rounded-2xl text-white mb-12">
            <h2 class="text-xl font-bold mb-3">Informations sur l’abonnement</h2>
            <p class="mb-3">Vous avez souscrit à un abonnement de <span class="font-bold">1 mois</span></p>
            <div class="flex justify-between pb-1 mb-1">
                <p>Durée du contrat</p>
                <p class="font-bold">1 mois</p>
            </div>
            <div class="flex justify-between pb-1 mb-1">
                <p>Date de début</p>
                <p class="font-bold">01/03/2024</p>
            </div>
            <div class="flex justify-between pb-1 mb-8">
                <p>Date de fin</p>
                <p class="font-bold">01/04/2024</p>
            </div>

            <p class="mb-8">Abonnement automatiquement résilié à la fin de la date limite.</p>
            <h2 class="text-xl font-bold mb-3">Plus de détails</h2>

            <div class="flex justify-between border-b-2 pb-1 mb-1">
                <p>Abonnement</p>
                <p class="font-bold">Premium</p>
            </div>
            <div class="flex justify-between border-b-2 pb-1 mb-1">
                <p>Tarif</p>
                <p class="font-bold">30 €</p>
            </div>
            <div class="flex justify-between border-b-2 pb-1 mb-8">
                <p>Numéro de profil</p>
                <p class="font-bold">HDHAD7421</p>
            </div>
        </div>
    </nav> 
    
    

</template>
