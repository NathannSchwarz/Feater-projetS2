<script setup lang="ts">
import IconCheck from '@/components/icons/IconCheck.vue'
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-5">Félicitations</h1>

    <p class="pb-3">
      Vous venez de créer une activité, vous serez notifié si quelqu’un souhaite la rejoindre.
    </p>
    <p class="font-bold mb-10"> En attendant restez actif !</p>

    <div class="bg-red-600 rounded-xl py-44 mb-20">  
        <IconCheck class="w-12 h-12 m-auto mb-5 text-white"/> 
        <p class="font-bold text-xl text-center  text-white  ">ACTIVITÉ CRÉÉ</p>
    </div>
    
  </div>
</template>
