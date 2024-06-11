<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Créer un compte</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
            <input v-model="form.username" id="username" type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div class="mb-4">
          <label for="Prenom" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input v-model="form.Prenom" id="Prenom" type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div class="mb-4">
          <label for="Nom" class="block text-sm font-medium text-gray-700">Nom</label>
          <input v-model="form.Nom" id="Nom" type="text" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.email" id="email" type="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input v-model="form.password" id="password" type="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
          <input v-model="form.confirmPassword" id="confirmPassword" type="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Créer un compte</button>
        <div v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import PocketBase from 'pocketbase';

export default defineComponent({
  name: 'RegisterForm',
  setup() {
    const form = reactive({
      Prenom: '',
      Nom: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    });
    const errorMessage = ref<string | null>(null);

    const pb = new PocketBase('http://127.0.0.1:8090');

    const register = async () => {
      if (form.password !== form.confirmPassword) {
        errorMessage.value = "Les mots de passe ne correspondent pas !";
        return;
      }

      const data = {
        "username": form.username, // Si le champ username est nécessaire
        "email": form.email,
        "emailVisibility": true,
        "password": form.password,
        "passwordConfirm": form.confirmPassword,
        "Nom": form.Nom,
        "Prenom": form.Prenom
        // Ajoutez les autres champs nécessaires ici
      };

      try {
        const record = await pb.collection('users').create(data);
        await pb.collection('users').requestVerification(form.email);
        alert('Compte créé avec succès !');
        errorMessage.value = null;
      } catch (error: any) {
  console.error(error);
  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
    console.error('Response headers:', error.response.headers);
  }
        errorMessage.value = error.message || 'Une erreur est survenue lors de la création du compte.';
      }
    };

    return { form, register, errorMessage };
  }
});
</script>
