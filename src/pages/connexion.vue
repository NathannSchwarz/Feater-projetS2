<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pocketbase from 'pocketbase'

let email = ref('')
let password = ref('')
let currentuser = ref()
let pb = null

onMounted(async () => {
    pb = new Pocketbase("http://127.0.0.1:8090")

    pb.authStore.onChange(() => {
        currentuser.value = pb.authStore.model
    }, true)
})

const doLogin = async () => {
    try {
        const authData = await pb.collection('users').authWithPassword(email.value, password.value)
        currentuser.value = pb.authStore.model
        console.log(currentuser.value)
        location.reload()
    } catch (e) {
        console.error(e)
    }
}

const doLoginOAuth = async () => {
    try {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google'})
        currentuser.value = pb.authStore.model
        console.log(currentuser.value)
        location.reload()
    } catch (e) {
        console.error(e)
    }
}

</script>

<template>
<input v-model="email" type="email" placeholder="Adresse e-mail"/>
<input v-model="password" type="password" placeholder="Mot de passe" />
<button @click="doLogin">Connexion</button>
<button @click="doLoginOAuth">Connexion avec Google</button>
<h1 v-if="currentuser">SALUT {{ currentuser.prenom }} CA VA MEC ??????</h1>
<button v-if="currentuser" @click="doLogout">Déconnexion</button>
</template>