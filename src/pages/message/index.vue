<script setup lang="ts">

import Cardsmessage from '@/components/Cardsmessage.vue'

</script>


<template>
    <nav class="grille">

        <h1 class="font-bold text-3xl pb-5">Messages</h1>

        <div class="pb-96">
            <Cardsmessage  v-for="coach in 4"/>
        </div>
        
        

    
    </nav>
    

</template>
