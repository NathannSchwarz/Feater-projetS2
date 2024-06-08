<script setup lang="ts">

</script>

<template>
  <div class="grille">
    <h1 class="font-bold text-3xl mb-5">Devenir Coach</h1>

    <p class="pb-3">
      Nous sommes fière de voir qu’un nouveau Coach arrive sur <span class="font-bold">Feater</span>.</p>
    <p class="pb-3">Nous allons avoir besoin de plusieurs documents pour assurer <span class="font-bold">la légalité</span> de cette activité et <span class="font-bold">la sécurité</span> des utilisateurs. </p>
    <p class="pb-5">Nous allons avoir besoin de :</p>


 
    <form @submit.prevent="handleSubmit">

        <div class="mb-10">
            <p class="mt-1 block w-full p-2 px-5 bg-red-600 text-white rounded-2xl shadow-sm">Vos certifications & qualifications</p>

            <div class="mb-4">
                <input
                type="file"
                id="file"
                multiple
                @change="handleFileChange"
                class="mt-3 block w-72 p-2 px-5 border border-gray-900 text-white rounded-xl shadow-sm"
                required
                />
            </div>
        </div>

        <div class="mb-10">
            <p class="mt-1 block w-full p-2 px-5 bg-red-600 text-white rounded-2xl shadow-sm">Casier Judiciaire</p>

            <div class="mb-4">
                <input
                type="file"
                id="file"
                multiple
                @change="handleFileChange"
                class="mt-3 block w-72 p-2 px-5 border border-gray-900 text-white rounded-xl shadow-sm"
                required
                />
            </div>
        </div>

    

    <div class="mb-10">
            <p class="mt-1 block w-full p-2 px-5 bg-red-600 text-white rounded-2xl shadow-sm">Assurance de responsabilité civile professionnelle</p>

            <div class="mb-4">
                <input
                type="file"
                id="file"
                multiple
                @change="handleFileChange"
                class="mt-3 block w-72 p-2 px-5 border border-gray-900 text-white rounded-xl shadow-sm"
                required
                />
            </div>
        </div>

    
    </form>

    <p class="pb-3">Pour devenir Coach nous devrons vérifier l’intégralité de vos documents.</p>
    <p class="pb-3 font-bold">Cela peut pendre jusqu’a 2 semaines.</p>
    <p class="pb-5">Cliquez sur envoyez pour nous fournir <span class="font-bold">l’intégralité des documents inscrit.</span></p>

    <RouterLink to="/coaching/felicitationCoach">
        <h3 class="w-5/6 m-auto text-red-600 text-center border-2 border-red-600 rounded-3xl p-4 mb-12">ENVOYER</h3>
    </RouterLink>
   
  </div>

  
</template>
