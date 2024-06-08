<script setup lang="ts">
import IconCheck from '@/components/icons/IconCheck.vue'
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-5">Félicitations</h1>

    <p class="pb-3">
      Vous recevrez des nouvelles de Maxime Marchets <span class="font-bold">dans la journée</span> . S’il ne vous contact pas,
      considérez la demande comme annulée.
    </p>
    <p class="font-bold mb-10"> En attendant restez actif !</p>

    <div class="bg-red-600 rounded-xl py-40 mb-20">  
        <IconCheck class="w-12 h-12 m-auto mb-10 text-white"/> 
        <p class="font-bold text-xl text-center  text-white  ">DEMANDE ENVOYÉ</p>
    </div>
    
  </div>
</template>
