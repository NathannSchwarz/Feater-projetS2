<script setup lang="ts">
import ActivitéIcon from '@/components/icons/IconActivity.vue'
import CarteIcon from '@/components/icons/Iconcarte.vue'
import MessageIcon from '@/components/icons/Iconmessage.vue'
import CompteIcon from '@/components/icons/Iconcompte.vue'


import { RouterLink } from 'vue-router'



</script>

<template>

    <nav>
        <ul class="fixed grid grid-cols-4 justify-strecth  pt-2 bg-red-600 pb-2 p-4 bottom-0 z-20 w-full">

                <div  class="flex flex-col items-center justify-around p-1.5 text-white "  :class="{ 'bg-white rounded-xl text-red-600 ': $route.path === '/activité' }" >
                    <li >
                        <RouterLink to="/activité" >
                            
                        <ActivitéIcon />
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base">Activité</p>

                </div>
                <div class="flex flex-col items-center justify-around p-1.5 text-white " :class="{ 'bg-white rounded-xl  text-red-600 ': $route.path === '/carte' }" >
                    <li>
                        <RouterLink to="/carte">
                            
                        <CarteIcon />
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base">Carte</p>
                </div>

                <div class="flex flex-col items-center justify-around  p-1.5 text-white " :class="{ 'bg-white rounded-xl text-red-600 ': $route.path === '/message' }">
                    <li>
                        <RouterLink to="/message">
                            
                        <MessageIcon />
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base">Message</p>  
                </div>

                <div class="flex flex-col items-center justify-around p-1.5  text-white" :class="{'bg-white rounded-xl text-red-600  ': $route.path === '/compte' }">
                    <li>
                        <RouterLink to="/compte">
                            
                        <CompteIcon />
            
                        </RouterLink>
                    </li>   
                    <p class="text-xs font-base">Compte</p> 
                </div>
                
        </ul>
        
    </nav>

</template>