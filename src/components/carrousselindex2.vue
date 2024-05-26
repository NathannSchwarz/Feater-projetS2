<script setup lang="ts">

import flecheIcon from '@/components/icons/Iconflèchemenu.vue'


const props = defineProps<{
  id: number
  title: string
  date: string
  description: string
  imgCardPath: string
  imgAlt?: string
}>()

</script>


<template>
  
  <nav class="pb-12">
        
       

        <div class="relative flex justify-center w-3/4 m-auto ">

            <img class="rounded-2xl " src="/img/coach.webp" alt="coaching">

            <div class=" absolute bottom-0  w-full text-white  bg-red-500 p-2 rounded-b-2xl ">
                <h4 class="text-sm font-bold pb-1">{{title}}</h4>
                <div class="">
                    <p class="text-xs font-extralight">{{description}}</p>
                    <p class="text-xs font-bold">{{date}}</p>
                </div>
                
            </div>
        </div> 

    </nav>


    

    

    
</template>

