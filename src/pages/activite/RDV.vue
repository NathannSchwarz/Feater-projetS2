<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Define the form data
const formData = ref({
  lieu: '',
  horaire: '',
  jour: '',
  sport: ''
});

// Define the options for dropdowns
const horaires = ['08:00' , '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00' , '17:00', '18:00',  '19:00' ,'20:00'];
const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const sports = ['Football', 'Basketball', 'Tennis', 'Natation', 'Course à pied', 'Randonnée', 'Vélo', 'Rugby', 'Badminton'];

// Handle form submission
const submitForm = () => {
  console.log('Form Data:', formData.value);
  // Add your logic to handle form submission, e.g., send the data to the backend
};
</script>

<template>

  <nav class="grille">
    <h1 class="font-bold text-3xl mb-5">Donnez votre RDV</h1>

    <div class="max-w-lg mx-auto p-6 ">
    
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="lieu" class="block text-base font-medium text-gray-700">Lieu</label>
        <input type="text" id="lieu" v-model="formData.lieu" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div class="mb-4">
        <label for="horaire" class="block text-base font-medium text-gray-700">Horaire</label>
        <select id="horaire" v-model="formData.horaire" class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="" disabled>Choisir un horaire</option>
          <option v-for="horaire in horaires" :key="horaire" :value="horaire">{{ horaire }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="jour" class="block text-base font-medium text-gray-700">Jour</label>
        <select id="jour" v-model="formData.jour" class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="" disabled>Choisir un jour</option>
          <option v-for="jour in jours" :key="jour" :value="jour">{{ jour }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="sport" class="block text-base font-medium text-gray-700">Sport</label>
        <select id="sport" v-model="formData.sport" class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="" disabled>Choisir un sport</option>
          <option v-for="sport in sports" :key="sport" :value="sport">{{ sport }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="image" class="block text-base font-medium text-gray-700">Image de présentation</label>
        <input type="file" id="image" @change="handleImageUpload" class="mt-1 mb-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <RouterLink to="/activite/felicitation">
          <button type="submit" class="w-full px-4 py-3 bg-red-600 text-white font-semibold text-xl leading-5 rounded-3xl shadow-sm">
            Créer l'activité
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
    
  </nav>
</template>

