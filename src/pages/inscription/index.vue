<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PocketBase from 'pocketbase'
import LogoIcon from '@/components/icons/Iconlogored.vue'
import flecheIcon from '@/components/icons/Iconflèchemenu.vue'
import { useRouter } from 'vue-router'

const step = ref(1)
const form = ref({
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  Nom: '',
  Prenom: '',
  Numero: 0,
  Date_naissance: '',
  Description: '',
  Personnalite: '',
  Abonnement: '',
  Sport: '',
  avatar: null
})

const pb = new PocketBase('https://feater.schwarznathan.fr:443')
const router = useRouter()

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files && input.files[0]) {
    form.value.avatar = input.files[0]
  }
}

const nextStep = async () => {
  if (step.value < 3) {
    step.value++
  } else {
    // Créer l'utilisateur à l'étape finale
    try {
      const data = {
        username: form.value.username,
        email: form.value.email,
        emailVisibility: true,
        password: form.value.password,
        passwordConfirm: form.value.passwordConfirm,
        Nom: form.value.Nom,
        Prenom: form.value.Prenom,
        Numero: form.value.Numero,
        Date_naissance: new Date(form.value.Date_naissance).toISOString(),
        Description: form.value.Description,
        Personnalite: form.value.Personnalite,
        Abonnement: form.value.Abonnement,
        Sport: [form.value.Sport] // Assure-toi que cette valeur correspond à un ID valide
      }

      const formData = new FormData()
      for (const key in data) {
        formData.append(key, (data as any)[key])
      }
      if (form.value.avatar) {
        formData.append('avatar', form.value.avatar)
      }

      const record = await pb.collection('users').create(formData)
      console.log('User created successfully:', record)

      await pb.collection('users').requestVerification(form.value.email)
      console.log('Verification email sent successfully')

      // Rediriger vers la page SeConnecter
      router.push('/inscription/config')
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }
}

onMounted(async () => {
  if (pb.authStore.model) {
    router.replace('/')
  }
})

const prevStep = () => {
  if (step.value > 1) {
    step.value--
  }
}

const progress = computed(() => {
  return ((step.value - 1) / 2) * 100
})
</script>


<template>
  <div class="relative flex items-center mb-5 mx-10">
    <RouterLink to="/connexion">
      <button class="absolute left-0">
        <flecheIcon />
      </button>
    </RouterLink>

    <div class="flex-grow flex justify-center">
      <LogoIcon class="w-24 h-24 mt-4" />
    </div>
  </div>

  <div class="mx-auto w-11/12 p-6">
    <h2 class="font-bold text-3xl mb-6">Créer un compte</h2>

    <!-- Barre de progression -->
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div class="bg-red-500 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
    </div>

    <!-- Formulaire par étapes -->
    <form @submit.prevent="nextStep">
      <div v-if="step === 1">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
          <input
            v-model="form.username"
            id="username"
            type="text"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            v-model="form.password"
            id="password"
            type="password"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="passwordConfirm" class="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
          <input
            v-model="form.passwordConfirm"
            id="passwordConfirm"
            type="password"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
      </div>

      <div v-if="step === 2">
        <div class="mb-4">
          <label for="Nom" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            v-model="form.Nom"
            id="Nom"
            type="text"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="Prenom" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            v-model="form.Prenom"
            id="Prenom"
            type="text"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="Numero" class="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            v-model="form.Numero"
            id="Numero"
            type="number"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="Date_naissance" class="block text-sm font-medium text-gray-700">Date de naissance</label>
          <input
            v-model="form.Date_naissance"
            id="Date_naissance"
            type="date"
            class="mt-1 block w-full border rounded-3xl p-2"
            required
          />
        </div>
      </div>

      <div v-if="step === 3">
        <div class="mb-4">
          <label for="Description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="form.Description"
            id="Description"
            class="mt-1 block w-full border rounded-3xl p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="Personnalite" class="block text-sm font-medium text-gray-700">Personnalité</label>
          <input
            v-model="form.Personnalite"
            id="Personnalite"
            type="text"
            class="mt-1 block w-full border rounded-3xl p-2"
          />
        </div>

        <div class="mb-4">
          <label for="avatar" class="block text-sm font-medium text-gray-700">Avatar</label>
          <input
            @change="onFileChange"
            id="avatar"
            type="file"
            class="mt-1 block w-full border rounded-3xl p-2"
            accept="image/*"
          />
        </div>
      </div>

      <div class="flex justify-between">
        <button
          type="button"
          @click="prevStep"
          v-if="step > 1"
          class="bg-zinc-400 text-white py-2 px-4 rounded-3xl"
        >
          Précédent
        </button>
        <button type="submit" class="bg-red-600 text-white py-2 px-4 rounded-3xl">
          {{ step < 3 ? 'Suivant' : 'Créer le compte' }}
        </button>
      </div>
    </form>
  </div>
</template>
