<script setup lang="ts">

import flecheIcon from '@/components/icons/Iconflèchemenu.vue'

</script>


<template>
  
  <div class="flex justify-around items-center">

    <button class=" bg-black opacity-50 rounded-full p-3 ">
        <flecheIcon/>
    </button>
   


    <div class="flex flex-col items-center text-center border rounded-3xl bg-sky-500  mb-8">
      <div class="bg-white w-full opacity-70 p-2">
          <p class=" text-sm font-bold  "> Changez de terrain</p>
          <p class="  text-xs">Sortez de votre zone de confort !</p>
      
      </div>
      
      <img class="max-h-36" src="/public/img/challenge1.webp"/>

    </div>

    <button class="rotate-180 bg-black opacity-50 rounded-full p-3">
      <flecheIcon />
    </button>
    
  </div>
    
</template>
