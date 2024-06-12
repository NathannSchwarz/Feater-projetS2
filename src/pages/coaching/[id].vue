<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router/auto'
import ImgPb from '@/components/ImgPb.vue'
import { pb } from '@/backend'

const route = useRoute('/coaching/[id]')
const router = useRouter()
const coach = ref<any>(null)
const sport = ref<any>(null)
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
      coachId: coach.value.id,
    })
    console.log('Contact enregistré avec succès:', response)
    router.push('/coaching/felicitation')
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
  }
}

onMounted(async () => {
  try {
    const coachId = route.params.id
    if (coachId) {
      // Récupérer les données du coach
      coach.value = await pb.collection('coach').getOne(coachId)

      if (coach.value && coach.value.Sport) {
        // Récupérer les détails du sport
        sport.value = await pb.collection('sport').getOne(coach.value.Sport)
      }
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données du coach:', error)
  }
})
</script>

<template>
  <div class="grille">
    <template v-if="!showContactForm">
      <h1 class="font-bold text-3xl mb-8">{{ coach?.Nom }} {{ coach?.Prenom }}</h1>
      <ImgPb v-if="coach" :record="coach" :filename="coach.Image" class="h-1/2 rounded-3xl mb-8" />
      <h3 class="text-2xl font-bold">Spécialités</h3>
      <ul class="flex text-xs font-normal items-center justify-start gap-3 mb-8">
        <li
          v-for="(speciality, index) in coach?.Specialite"
          :key="index"
          class="bg-red-600 text-center text-white p-1.5 px-3 rounded-3xl"
        >
          {{ speciality }}
        </li>
      </ul>
      <h2 class="text-2xl font-bold pb-1">Abonnement</h2>
      <p class="mb-8 text-sm font-normal">{{ coach?.Abonnement }}</p>
      <h2 class="text-2xl font-bold pb-1">Sport</h2>
      <p class="mb-8 text-sm font-normal">{{ sport?.Nom }}</p>
      <h2 class="text-2xl font-bold pb-1">Expérience</h2>
      <p class="mb-8 text-sm font-normal">{{ coach?.Experience }}</p>
      <button @click="handleContactClick" class="w-5/6 m-auto text-red-600 text-center border-2 border-red-600 rounded-3xl p-4 mb-12">
        PRENDRE CONTACT
      </button>
    </template>
    
    <template v-else>
      <button @click="handleBackClick" class="text-red-600 mb-4">&#8592; Retour</button>
      <h1 class="font-bold text-3xl mb-8">{{ coach?.Nom }} {{ coach?.Prenom }}</h1>
      <ImgPb v-if="coach" :record="coach" :filename="coach.Image" class="h-1/2 rounded-3xl mb-8" />
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
