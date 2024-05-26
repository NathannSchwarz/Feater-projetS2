<script setup lang="ts">

import IconCheck from '@/components/icons/IconCheck.vue'

</script>


<template>

    <nav class="grille">

        <h1 class="font-bold text-3xl pb-5 ">Langue</h1>
        
        <div class="flex items-center justify-between bg-red-300 p-4 rounded-xl mx-10 mb-4">
            <div class="flex gap-2">
                <img class="w-12 " src="/public/img/DrapeauFR.webp" alt="">
                <p class="font-bold text-base" >Français (FR)</p>   
            </div>
            
            <IconCheck/>
        </div>
        

        <div class="flex items-center justify-between bg-red-300 p-4 rounded-xl mx-10 mb-96">
            <div class="flex gap-2">
                <img class="w-12 " src="/public/img/DrapeauEN.webp" alt="">
                <p class="font-bold text-base" >Français (FR)</p>   
            </div>
            
        </div>
    </nav> 
    
    

</template>
