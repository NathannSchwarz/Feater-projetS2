<script setup lang="ts">
import { RouterLink } from 'vue-router'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
</script>

<template>

    <nav>
        <RouterLink to="#">
            <div class="flex justify-between items-center border-t p-3  px-6 border-black ">
                <h3 class=" font-bold ">Données personnelles</h3>
                <flecheIcon class="rotate-180 "/>
            </div>
        </RouterLink>
    </nav>
    

        
</template>