<script setup lang="ts">
import ImgPb from '@/components/ImgPb.vue'
import { IDusers } from '@/backend'
import { useRoute } from 'vue-router/auto'
import { ref } from 'vue'
const route = useRoute('/activite/contact')
console.log('id :', route.params.id)
const activite = ref()
activite.value = await IDusers(route.params.id)

import type { ActiviteResponse } from '@/pocketbase-types'
const activites: ActiviteResponse<any> = await IDusers(route.params.id)
</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-8">{{ activite.Nom }}</h1>

    <ImgPb :record="activites" :filename="activite.Image" class="h-1/2 rounded-3xl mb-8" />

    <h2 class="text-2xl font-bold">Coach de Badminton</h2>

    <div class="max-w-lg mx-auto p-5">
      <form>
        <div class="mb-4">
          <input
            type="text"
            id="firstName"
            class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
            required
            placeholder="Prénom"
          />
        </div>

        <div class="mb-4">
          <input
            type="text"
            id="lastName"
            class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
            required
            placeholder="Nom"
          />
        </div>

        <div class="mb-4">
          <input
            type="email"
            id="email"
            class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
            required
            placeholder="Email"
          />
        </div>

        <div class="mb-4">
          <input
            type="tel"
            id="phone"
            class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
            required
            placeholder="Numéro"
          />
        </div>

        <div class="mb-4">
          <textarea
            id="reason"
            class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm placeholder:text-gray-500"
            required
            placeholder="Motif "
          ></textarea>
        </div>
        <p class="mb-8 text-sm font-normal">
          <span class="font-bold">En cliquant sur envoyer</span>, j’accepte que Feater partage mes
          données personnelles telles que complétées dans le formulaire.
        </p>
        <RouterLink to="/coaching/felicitation">
          <div class="flex">
            <button
              type="submit"
              class="w-5/6 m-auto text-white text-center bg-red-600 rounded-3xl p-4 mb-12 font-bold"
            >
              ENVOYER
            </button>
          </div>
        </RouterLink>
      </form>
    </div>
  </div>
</template>
