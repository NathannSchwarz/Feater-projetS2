<script setup lang="ts">
import { ref, computed } from 'vue'
import { pb } from '@/backend'
import { useRouter } from 'vue-router'
import CardsActivité from '@/components/Cards-Activité.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { allSport } from '@/backend'

// Récupérer l'ID de l'utilisateur connecté
const userId = ref(pb.authStore.model?.id)
console.log('ID de l\'utilisateur connecté :', userId.value) // Débogage

const step = ref(1)
const form = ref({
  Nom: '',
  Adresse: '',
  Date: '',
  Niveau: '',
  Ryhtme: '',
  Sport: '',
  Description: '',
  image: null // Nouveau champ pour l'image
})

const router = useRouter()

const sports = ref()
sports.value = await allSport()

const nextStep = () => {
  if (step.value < 4) {
    step.value++
  } else {
    createActivity()
  }
}

const prevStep = () => {
  if (step.value > 1) {
    step.value--
  }
}

const createActivity = async () => {
  try {
    const data = {
      Nom: form.value.Nom,
      Adresse: form.value.Adresse,
      Date: new Date(form.value.Date).toISOString(),
      Niveau: form.value.Niveau,
      Ryhtme: form.value.Ryhtme,
      Sport: form.value.Sport,
      Description: form.value.Description,
      users: userId.value, // Ajout de l'ID de l'utilisateur connecté
      Image: form.value.image
    }

    console.log('Données envoyées à PocketBase :', data) // Débogage

    const formData = new FormData()
    for (const key in data) {
      formData.append(key, (data as any)[key])
    }
    if (form.value.image) {
      formData.append('image', form.value.image)
    } else {
      throw new Error("L'image est obligatoire")
    }

    const record = await pb.collection('Activite').create(formData)
    console.log('Activité créée avec succès :', record)

    // Passer à l'étape suivante pour afficher le message de félicitations
    step.value = 4
  } catch (error) {
    console.error('Erreur lors de la création de l\'activité :', error)
  }
}

const progress = computed(() => {
  return ((step.value - 1) / 3) * 100
})
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="font-bold text-3xl mb-6">Créer une Activité</h2>

    <!-- Barre de progression -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div class="bg-red-500 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
    </div>

    <!-- Formulaire par étapes -->
    <div v-if="step === 1">
      <h3 class="text-xl mb-4">Choisissez un Sport</h3>
      <div class="grid grid-cols-2 gap-6 mb-14">
        <button v-for="sport in sports" :key="sport.id" @click="form.Sport = sport.id; nextStep()">
          <CardsActivité v-bind="sport" />
        </button>
      </div>
    </div>

    <div v-if="step === 2">
      <h3 class="text-xl mb-4">Détails de l'Activité</h3>
      <form @submit.prevent="nextStep">
        <div class="mb-4">
          <label for="Nom" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            v-model="form.Nom"
            id="Nom"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="Adresse" class="block text-sm font-medium text-gray-700">Adresse</label>
          <input
            v-model="form.Adresse"
            id="Adresse"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="Date" class="block text-sm font-medium text-gray-700">Date</label>
          <input
            v-model="form.Date"
            id="Date"
            type="datetime-local"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="Niveau" class="block text-sm font-medium text-gray-700">Niveau</label>
          <select
            v-model="form.Niveau"
            id="Niveau"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            required
          >
            <option value="" disabled>Choisir un niveau</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="Ryhtme" class="block text-sm font-medium text-gray-700">Rythme</label>
          <select
            v-model="form.Ryhtme"
            id="Ryhtme"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            required
          >
            <option value="" disabled>Choisir un rythme</option>
            <option value="Cardio">Cardio</option>
            <option value="Intensif">Intensif</option>
            <option value="Rythmé">Rythmé</option>
            <option value="Endurant">Endurant</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="Description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="form.Description"
            id="Description"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
          <input
            @change="form.image = $event.target.files[0]"
            id="image"
            type="file"
            class="mt-1 block w-full border border-gray-300 rounded-xl p-2"
            accept="image/*"
            required
          />
        </div>
        <div class="flex justify-between">
          <button type="button" @click="prevStep" class="bg-gray-500 text-white py-2 px-4 rounded-3xl">
            Précédent
          </button>
          <button type="submit" class="bg-red-500 text-white py-2 px-4 rounded-3xl">
            Suivant
          </button>
        </div>
      </form>
    </div>

    <div v-if="step === 3">
      <h3 class="text-xl mb-4">Confirmation</h3>
      <p class="mb-4"><strong>Nom:</strong> {{ form.Nom }}</p>
      <p class="mb-4"><strong>Adresse:</strong> {{ form.Adresse }}</p>
      <p class="mb-4"><strong>Date:</strong> {{ form.Date }}</p>
      <p class="mb-4"><strong>Niveau:</strong> {{ form.Niveau }}</p>
      <p class="mb-4"><strong>Rythme:</strong> {{ form.Ryhtme }}</p>
      <p class="mb-4"><strong>Sport:</strong> {{ form.Sport }}</p>
      <p class="mb-4"><strong>Description:</strong> {{ form.Description }}</p>
      <div class="flex justify-between">
        <button type="button" @click="prevStep" class="bg-gray-500 text-white py-2 px-4 rounded-3xl">
          Précédent
        </button>
        <button @click="createActivity" class="bg-red-500 text-white py-2 px-4 rounded-3xl">
          Créer l'activité
        </button>
      </div>
    </div>

    <div v-if="step === 4">
      <h2 class="font-bold text-2xl mb-5">Félicitations</h2>

      <p class="pb-3">
        Vous venez de créer une activité, vous serez notifié si quelqu’un souhaite la rejoindre.
      </p>
      <p class="font-bold mb-10"> En attendant restez actif !</p>

      <div class="bg-red-600 rounded-xl py-44 mb-20">  
          <IconCheck class="w-12 h-12 m-auto mb-5 text-white"/> 
          <p class="font-bold text-xl text-center text-white">ACTIVITÉ CRÉÉE</p>
      </div>
    </div>
  </div>
</template>
