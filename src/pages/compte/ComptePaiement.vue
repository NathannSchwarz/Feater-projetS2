<script setup lang="ts">

import IconCheck from '@/components/icons/IconCheck.vue'

</script>


<template>

    <nav class="grille">

        <h1 class="font-bold text-3xl pb-5 ">Paiement</h1>

        <p class="mb-10">Vous trouverez un aperçu détaillé de <span class="font-bold">toutes vos transactions</span>  en cours et passées. Nous croyons en la transparence totale pour vous permettre de garder le contrôle sur votre situation financière à tout moment.</p>

        <div class="bg-red-700 rounded-2xl p-5 mb-10 text-white">
            <div class="flex flex-col justify-center items-center mb-6">
                <IconCheck class="w-10 h-10 flex justify-center text-white"/>
                <h2 class="text-xl font-bold">Tout est dans l'ordre</h2>
            </div>
            <div class="flex justify-between px-5 mb-1">
                <h3 class="text-base font-bold">Description</h3>
                <h3 class="text-base font-bold">Transactions</h3>
            </div>
            <div class="flex justify-between items-center px-5 mb-2">
                <div>
                    <p>Vos paiements</p>
                    <p>01/03/2024</p>
                </div>
                <p class="bg-white rounded-xl items-center p-0.5 px-4 font-bold text-black">30€</p>
            </div>
        </div>

        <div class="bg-red-700 rounded-2xl p-5 mb-12 text-white">
            <div class="flex flex-col justify-center items-center mb-6">
                <IconCheck class="w-10 h-10 flex justify-center text-white"/>
                <h2 class="text-xl font-bold">Tout est dans l'ordre</h2>
            </div>
            <div class="flex justify-between px-5 mb-1">
                <h3 class="text-base font-bold">Description</h3>
                <h3 class="text-base font-bold">Transactions</h3>
            </div>
            <div class="flex justify-between items-center px-5 mb-6">
                <div>
                    <p>Vos paiements</p>
                    <p>01/03/2024</p>
                </div>
                <p class="bg-white rounded-xl items-center p-0.5 px-4 font-bold text-black">30€</p>
            </div>

            <div class="flex justify-between items-center px-5 mb-2">
                <div>
                    <p>Vos paiements</p>
                    <p>01/03/2024</p>
                </div>
                <p class="bg-white rounded-xl items-center p-0.5 px-4 font-bold text-black">30€</p>
            </div>

            
        </div>
    </nav>
        
       
    
    

</template>
