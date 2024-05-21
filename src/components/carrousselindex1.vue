<script setup lang="ts">

import flecheIcon from '@/components/icons/Iconflèchemenu.vue'

</script>


<template>
  
  <button class="flex justify-around items-center w-full pb-10">

    <button class=" bg-black bg-opacity-50 rounded-full p-3 ">
        <flecheIcon class="text-white"/>
    </button>
   


      <div class="w-48 h-48 flex flex-col items-center text-center border rounded-3xl bg-sky-500  mb-4">

        <div class="bg-white w-full opacity-70 p-2">
            <p class=" text-sm font-bold  "> Changez de terrain</p>
            <p class=" text-xs">Sortez de votre zone de confort !</p>
        
        </div>
        
        <img class="h-32" src="/img/challenge1.webp"/>

      </div>

    <button class="rotate-180 bg-black bg-opacity-50 rounded-full p-3">
      <flecheIcon class="text-white"/>
    </button>
    
  </button>
    
</template>
