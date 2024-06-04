<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PocketBase from 'pocketbase'
import LogoIcon from '@/components/icons/Iconlogored.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import { useRouter } from 'vue-router';

let email = ref('')
let password = ref('')
let nom = ref('')
let prenom = ref('')
let date_naissance = ref('')
let telephone = ref('')
let currentuser = ref()
let pb: PocketBase | null = null

const router = useRouter();

onMounted(async () => {
    pb = new PocketBase('http://127.0.0.1:8090')

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
        console.log(currentuser.value)
        window.location.href = '/inscription/config'
    } catch (e) {
        console.error(e)
    }
}

const doRegister = async () => {
    try {
        const userData = {
            "email": email.value,
            "password": password.value,
            "passwordConfirm": password.value,
            "nom": nom.value,
            "prenom": prenom.value,
            "date_naissance": date_naissance.value,
            "telephone": telephone.value,
            "emailVisibility": true, // Optionnel, selon votre configuration
            "sports_pref": null, // Assurez-vous d'avoir ce champ dans votre collection si nécessaire
            "coach": false, // Ajustez en fonction de votre logique
        }
        const record = await pb.collection('users').create(userData)
        console.log(record)

        // Envoyer une demande de vérification d'email (optionnel)
        // await pb.collection('users').requestVerification(email.value)

        // Optionnel, connecter l'utilisateur après l'enregistrement
        await doLogin()
    } catch (e) {
        console.error(e)
    }
}

const updateTitle = (newTitle: string) => {
    document.title = newTitle;
};

onMounted(() => {
    updateTitle('Créer un compte - Feater');
});

function goBack() {
    router.go(-1); // Cette ligne permet de revenir à la page précédente
}
</script>




<template>
    <nav class="mx-10">
        <div class="relative flex items-center mb-5">
            <button @click="goBack" class="absolute left-0">
                <flecheIcon />
            </button>
            <div class="flex-grow flex justify-center">
                <LogoIcon class="w-24 h-24 mb-5 mt-4" />
            </div>
        </div>
        <h2 class="font-bold text-3xl pb-10">Inscrivez-Vous à Feater</h2>
        <div class="flex flex-col">
            <input
                class="border rounded-3xl px-8 p-2 mb-5 grow"
                v-model="nom"
                type="text"
                placeholder="Nom"
            />
            <input
                class="border rounded-3xl px-8 p-2 mb-5 grow"
                v-model="prenom"
                type="text"
                placeholder="Prénom"
            />
            <input
                class="border rounded-3xl px-8 p-2 mb-5 grow"
                v-model="email"
                type="email"
                placeholder="Adresse e-mail"
            />
            <input
                class="border rounded-3xl px-8 p-2 mb-5 grow"
                v-model="date_naissance"
                type="date"
                placeholder="Date de naissance"
            />
            <input
                class="border rounded-3xl px-8 p-2 mb-5 grow"
                v-model="telephone"
                type="tel"
                placeholder="Numéro de téléphone"
            />
            <input
                class="border rounded-3xl px-8 p-2 mb-5 grow"
                v-model="password"
                type="password"
                placeholder="Mot de passe"
            />
            <button
                class="flex border border-gray-300 rounded-3xl px-14 p-2 bg-red-600 text-white font-bold text-center justify-center mb-5"
                @click="doRegister"
            >
                Créer un compte
            </button>
            <p class="text-sm text-center mb-40">
                Vous avez déjà un compte ? <RouterLink to="SeConnecter" class="text-red-600">Connectez-vous</RouterLink>
            </p>
            <p class="text-xs text-center">© 2023 - 2024 Feater Inc.</p>
        </div>
    </nav>
</template>
