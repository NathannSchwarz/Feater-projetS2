<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router/auto'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import ImgPb from '@/components/ImgPb.vue'
import { pb, IDusers } from '@/backend'

const route = useRoute('/activite/[id]')
const router = useRouter()
const activite = ref<any>(null)
const utilisateur = ref<any>(null)
const showContactForm = ref(false)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const reason = ref('')

const handleContactClick = () => {
  showContactForm.value = true
}

const handleBackClick = () => {
  showContactForm.value = false
}

const handleSubmit = async () => {
  try {
    // Logique d'envoi du formulaire à PocketBase
    const response = await pb.collection('contacts').create({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      reason: reason.value,
      activiteId: activite.value.id,
    })
    console.log('Contact enregistré avec succès:', response)
    router.push('/activite/felicitation')
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
  }
}

onMounted(async () => {
  try {
    console.log('id :', route.params.id)

    // Récupérer les données de l'activité
    activite.value = await IDusers(route.params.id)

    if (activite.value) {
      // Récupérer l'utilisateur associé à l'activité
      const userId = activite.value.userId // Assurez-vous que c'est le bon champ pour l'ID utilisateur
      utilisateur.value = await pb.collection('users').getOne(userId)
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error)
  }
})
</script>

<template>
  <div class="grille">
    <template v-if="!showContactForm">
      <h1 class="font-bold text-3xl mb-8">{{ activite?.Nom }}</h1>
      <ImgPb v-if="activite" :record="activite" :filename="activite.Image" alt="" class="w-full rounded-3xl mb-8" />
      <h3 class="text-2xl font-bold">{{ activite?.Adresse }}</h3>
      <p class="mb-8 text-sm font-normal">{{ activite?.Description }}</p>
      <h2 class="text-2xl font-bold pb-1">Rythme</h2>
      <ul class="flex text-xs font-normal items-center justify-start gap-3 mb-8">
        <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">
          {{ activite?.Ryhtme[0] }}
        </li>
        <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">
          {{ activite?.Ryhtme[1] }}
        </li>
        <li class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl">
          {{ activite?.Ryhtme[2] }}
        </li>
      </ul>
      <RouterLink to="/carte">
        <div class="flex items-center justify-between mb-10">
          <h3 class="text-xl font-bold pb-1">Voir sur la carte l’activité</h3>
          <flecheIcon class="h-5 w-10 rotate-180" />
        </div>
      </RouterLink>
      <button @click="handleContactClick" class="w-5/6 m-auto text-red-600 text-center border-2 border-red-600 rounded-3xl p-4 mb-12">
        PRENDRE CONTACT
      </button>
    </template>
    
    <template v-else>
      <button @click="handleBackClick" class="text-red-600 mb-4">&#8592; Retour</button>
      <h1 class="font-bold text-3xl mb-8">{{ activite?.Nom }}</h1>
      <ImgPb v-if="activite" :record="activite" :filename="activite.Image" alt="" class="w-full rounded-3xl mb-8" />
      <div class="max-w-lg mx-auto p-5">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
              required
              placeholder="Prénom"
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
              required
              placeholder="Nom"
            />
          </div>
          <div class="mb-4">
            <input
              type="email"
              id="email"
              v-model="email"
              class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
              required
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <input
              type="tel"
              id="phone"
              v-model="phone"
              class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
              required
              placeholder="Numéro"
            />
          </div>
          <div class="mb-4">
            <textarea
              id="reason"
              v-model="reason"
              class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
              required
              placeholder="Motif"
            ></textarea>
          </div>
          <p class="mb-8 text-sm font-normal">
            <span class="font-bold">En cliquant sur envoyer</span>, j’accepte que Feater partage mes
            données personnelles telles que complétées dans le formulaire.
          </p>
          <div class="flex">
            <button
              type="submit"
              class="w-5/6 m-auto text-white text-center bg-red-600 rounded-3xl p-4 mb-12 font-bold"
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </template>
  </div>
</template>
