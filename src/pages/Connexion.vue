<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pocketbase from 'pocketbase'
import LogoIcon from '@/components/icons/Iconlogored.vue'

let email = ref('')
let password = ref('')
let currentuser = ref()
let pb: Pocketbase | null = null

onMounted(async () => {
    pb = new Pocketbase(import.meta.env.VITE_URL_POCKETBASE)

})

const doLogin = async () => {
    try {
        if (pb) {
            const authData = await pb.collection('users').authWithPassword(email.value, password.value)
            currentuser.value = pb.authStore.model
            window.location.href = '/'
        }
    } catch (e) {
        console.error(e)
    }
}

const doLoginOAuth = async () => {
    try {
        if (pb){
            const authData = await pb.collection('users').authWithOAuth2({ provider: 'google'})
        currentuser.value = pb.authStore.model
        window.location.href = '/'
        }
        
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


</script>

<template>

    <nav class="mx-10 ">
        <div class="flex items-center justify-center">
            <LogoIcon class="w-24 h-24 mb-5 mt-4 "/>
        </div>
        
        <h1 class="font-bold text-5xl mb-10">Ça se passe maintenant</h1>
        <h2 class="font-bold text-3xl pb-4">Inscrivez-vous</h2>
        

        

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

            
            <RouterLink  to="/inscription" class="flex border rounded-3xl p-2 mb-1 justify-center bg-red-600 text-white  font-bold ">
                <button  @click="doLogin">Créer un compte</button>
            </RouterLink>

            <p class="text-[11px]/[13px] pr-2 mb-16">En vous inscrivant, vous acceptez les <span class="text-red-600">Conditions d'utilisation</span> et la <span  class="text-red-600">politique de confidentialité</span> notamment <span  class="text-red-600">l'Utilsation des cookies</span>.</p>
            

            <h2 class="font-bold text-lg pb-3">Vous avez déjà un compte ?</h2>
        
            <RouterLink to="/SeConnecter" class="flex border border-gray-300  rounded-3xl px-14 p-2  text-red-600  font-bold text-center justify-center mb-40">
                <button >Se Connecter</button>
            </RouterLink>
            
            <p class="text-xs text-center">© 2023 - 2024 Feater Inc.</p>

            
        </div>
        
    
    </nav>
    
</template>