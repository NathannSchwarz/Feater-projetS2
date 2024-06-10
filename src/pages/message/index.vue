<script setup lang="ts">

import Cardsmessage from '@/components/Cards-message.vue'

import { onMounted } from 'vue';
import { allMessage } from '@/backend'
import { ref } from 'vue'
const users = ref()
users.value = await allMessage()

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('Discutez avec vos partenaires préférés !');
});

</script>


<template>
    <nav class="grille">

        <h1 class="font-bold text-3xl pb-5">Messages</h1>

        <div class="pb-96">
            <Cardsmessage v-bind="user" v-for="user in users" :key="user.id" />
        </div>
        
        

    
    </nav>
    

</template>
