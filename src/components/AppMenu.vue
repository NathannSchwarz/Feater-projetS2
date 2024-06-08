<script setup lang="ts">
import ActivitéIcon from '@/components/icons/IconActivity.vue'
import CarteIcon from '@/components/icons/Iconcarte.vue'
import MessageIcon from '@/components/icons/Iconmessage.vue'
import CompteIcon from '@/components/icons/Iconcompte.vue'
import HomeIcon from '@/components/icons/IconHome.vue'
import HomeIconStroke from '@/components/icons/IconHomeStroke.vue'
import ActivitéIconStroke from '@/components/icons/IconActivityStroke.vue'
import CarteIconStroke from '@/components/icons/IconcarteStroke.vue'
import MessageIconStroke from '@/components/icons/IconmessageStroke.vue'
import CompteIconStroke from '@/components/icons/IconcompteStroke.vue'



import { RouterLink } from 'vue-router'



</script>

<template>

    <nav>
        <ul class="fixed grid grid-cols-5 justify-strecth  py-1.5 bg-white bottom-0 z-20 w-full border-t border-zinc-200">

                <div  class="flex flex-col items-center justify-around p-1.5 text-black " >
                    <li class="">
                        <RouterLink to="/" >
                        
                        <HomeIcon class="text-red-600" v-if="$route.path === '/'"/>

                        <HomeIconStroke  v-else />
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/' }">Accueil</p>

                </div>
               <div  class="flex flex-col items-center justify-around p-1.5 text-black " >
                    <li class="">
                        <RouterLink to="/activité" >
                        
                        <ActivitéIcon class="text-red-600" v-if="$route.path === '/activité'"/>

                        <ActivitéIconStroke  v-else />
            
                        </RouterLink>
                    </li>
                    <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/activité' }">Activité</p>

                </div>
                <div  class="flex flex-col items-center justify-around p-1.5 text-black " >
                    <li class="">
                        <RouterLink to="/carte" >
                        
                        <CarteIcon class="text-red-600" v-if="$route.path === '/carte'"/>

                        <CarteIconStroke  v-else />
            
                        </RouterLink>
                    </li>
                    
                    <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/carte' }">Carte</p>
                </div>

                <div  class="flex flex-col items-center justify-around p-1.5 text-black " >
                    <li class="">
                        <RouterLink to="/message" >
                        
                        <MessageIcon class="text-red-600" v-if="$route.path === '/message'"/>

                        <MessageIconStroke  v-else />
            
                        </RouterLink>
                    </li>
                     <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/message' }">Message</p>

                </div>

                <div  class="flex flex-col items-center justify-around p-1.5 text-black" >
                    <li class="pb-1">
                        <RouterLink to="/compte" >
                        
                        <CompteIcon class="text-red-600" v-if="$route.path === '/compte'"/>
                        
                        <CompteIconStroke  v-else />
            
                        </RouterLink>
                    </li>

                    <p class="text-xs font-base " :class="{ ' text-red-600': $route.path === '/compte' }">Compte</p>
                </div>
                
        </ul>
        
    </nav>

</template>