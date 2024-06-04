<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pocketbase from 'pocketbase'
import LogoIcon from '@/components/icons/Iconlogored.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'

let email = ref('')
let password = ref('')
let currentuser = ref()
let pb: Pocketbase | null = null

onMounted(async () => {
    pb = new Pocketbase('http://127.0.0.1:8090')

    pb.authStore.onChange(() => {
        if (pb) {
            currentuser.value = pb.authStore.model
        }
    }, true)
})

const doLogin = async () => {
    try {
        const authData = await pb.collection('users').authWithPassword(email.value, password.value)
        currentuser.value = pb.authStore.model
        window.location.href = '/'
    } catch (e) {
        console.error(e)
    }
}

const doLoginOAuth = async () => {
    try {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google'})
        currentuser.value = pb.authStore.model
        location.reload()
    } catch (e) {
        console.error(e)
    }
}

const updateTitle = (newTitle: string) => {
  document.title = newTitle;
};


onMounted(() => {
  updateTitle('');
});

import { useRouter } from 'vue-router';
const router = useRouter();
function goBack() {
  router.go(-1); // Cette ligne permet de revenir à la page précédente
}

</script>

<template>

    <nav class="mx-10">

        <div class="relative flex items-center mb-5">
            <RouterLink to="/Connexion">
                <button  class="absolute left-0 ">
                    <flecheIcon />
                </button>
            </RouterLink>
    
            <div class="flex-grow flex justify-center">
                <LogoIcon class="w-24 h-24 mb-5 mt-4" />
            </div>
        </div>
        
        
        <h2 class="font-bold text-3xl pb-10">Connecter-Vous à Feater</h2>
        

        

        <div class="flex flex-col">
            <div class="flex border border-gray-300 rounded-3xl justify-center gap-5 px-8 p-2 mb-2">
                <img class="w-6 h-6" src="/public/img/logogoogle.png" alt="logogoogle">
                <button class="font-bold"  @click="doLoginOAuth">Connexion avec Google</button> 
            </div>

            <div class="flex items-center mb-2">
                <div class="flex-grow border-t border-gray-300"></div>
                <span class="mx-4 font-bold text-sm">OU</span>
                <div class="flex-grow border-t border-gray-300"></div>
            </div>

            
        
            <input class="border rounded-3xl px-8 p-2 mb-5 grow" v-model="email" type="email" placeholder="Adresse e-mail"/>
            <input class="border rounded-3xl px-8 p-2 mb-5 grow" v-model="password" type="password" placeholder="Mot de passe" />
            <button class="flex border border-gray-300  rounded-3xl px-14 p-2 bg-red-600 text-white  font-bold text-center justify-center mb-5" @click="doLogin">Se Connecter</button>
            <button class="flex border border-gray-300  rounded-3xl px-14 p-2  text-red-600  font-bold text-center justify-center mb-10">Mot de passe oublié</button>


            <p class="text-sm  text-center mb-40">Vous n'avez pas de compte ? <RouterLink to="/Inscription" class="text-red-600">Inscrivez-vous</RouterLink></p>

            
            <p class="text-xs text-center  ">© 2023 - 2024 Feater Inc.</p>
            
            
            
            
        </div>
        
    
    </nav>
    
</template>