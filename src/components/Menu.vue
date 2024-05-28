<script setup lang="ts">
import ActivitéIcon from '@/components/icons/IconActivity.vue'
import CarteIcon from '@/components/icons/Iconcarte.vue'
import MessageIcon from '@/components/icons/Iconmessage.vue'
import CompteIcon from '@/components/icons/Iconcompte.vue'


import { RouterLink } from 'vue-router'



</script>

<template>

    <nav>
        <ul class="fixed grid grid-cols-5 justify-strecth  pt-2 bg-red-600 pb-2 p-4 bottom-0 z-20 w-full">

                <div  class="flex flex-col items-center justify-around p-1.5 text-white "  :class="{ 'bg-white rounded-xl': $route.path === '/activité' }" >
                    <li class="">
                        <RouterLink to="/activité" >
                            
                        <ActivitéIcon :class="{ ' text-red-600': $route.path === '/activité' }"/>
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/activité' }">Activité</p>

                </div>
                <div  class="flex flex-col items-center justify-around p-1.5 text-white "  :class="{ 'bg-white rounded-xl': $route.path === '/activité' }" >
                    <li class="">
                        <RouterLink to="/activité" >
                            
                        <ActivitéIcon :class="{ ' text-red-600': $route.path === '/activité' }"/>
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/activité' }">Activité</p>

                </div>
                <div class="flex flex-col items-center justify-around p-1.5 text-white " :class="{ 'bg-white rounded-xl  text-red-600': $route.path === '/carte' }" >
                    <li>
                        <RouterLink to="/carte">
                            
                        <CarteIcon :class="{ ' text-red-600': $route.path === '/carte' }"/>
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base" :class="{ ' text-red-600': $route.path === '/carte' }">Carte</p>
                </div>

                <div class="flex flex-col items-center justify-around  p-1.5 text-white " :class="{ 'bg-white rounded-xl text-red-600': $route.path === '/message' }">
                    <li>
                        <RouterLink to="/message">
                            
                        <MessageIcon :class="{ ' text-red-600': $route.path === '/message' }"/>
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base" :class="{ ' text-red-600': $route.path === '/message' }">Message</p>  
                </div>

                <div class="flex flex-col items-center justify-around  p-1.5 text-white" :class="{'bg-white rounded-xl text-red-600  ': $route.path === '/compte' ||  $route.path === '/compte/settings'  }">
                    <li>
                        <RouterLink to="/compte">
                            
                        <CompteIcon :class="{ ' text-red-600': $route.path === '/compte'  ||  $route.path === '/compte/settings'}"/>
            
                        </RouterLink>
                    </li>   
                    <p class="text-xs font-base" :class="{ ' text-red-600': $route.path === '/compte'  ||  $route.path === '/compte/settings'}">Compte</p> 
                </div>
                
        </ul>
        
    </nav>

</template>