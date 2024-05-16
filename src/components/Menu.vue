<script setup lang="ts">
import ActivitéIcon from '@/components/icons/IconActivity.vue'
import CarteIcon from '@/components/icons/Iconcarte.vue'
import MessageIcon from '@/components/icons/Iconmessage.vue'
import CompteIcon from '@/components/icons/Iconcompte.vue'


import { RouterLink } from 'vue-router'

</script>

<template>

    <nav>
        <ul class="fixed flex justify-around bg-white p-5 bottom-0 z-20 w-full">

                <div class="flex flex-col items-center justify-between">
                    <li >
                        <RouterLink to="/" >
                            
                        <ActivitéIcon />
            
                        </RouterLink>
                    </li>
                    <p class="text-sm">Activité</p>

                </div>
                <div class="flex flex-col items-center justify-between">
                    <li class="pb-1">
                        <RouterLink to="/">
                            
                        <CarteIcon />
            
                        </RouterLink>
                    </li>
                    <p class="text-sm">Carte</p>
                </div>

                <div class="flex flex-col items-center justify-between">
                    <li class="pb-1">
                        <RouterLink to="/">
                            
                        <MessageIcon />
            
                        </RouterLink>
                    </li>
                    <p class="text-sm">Message</p>  
                </div>

                <div class="flex flex-col items-center justify-between">
                    <li class="pb-1">
                        <RouterLink to="/">
                            
                        <CompteIcon />
            
                        </RouterLink>
                    </li>   
                    <p class="text-sm">Compte</p> 
                </div>
                
        </ul>
        
    </nav>

</template>