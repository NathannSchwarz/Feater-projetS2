<script setup lang="ts">




</script>

<template>

    <div class="grille">
        <h1 class="font-bold text-3xl mb-8">Maxime Marchet</h1>

        <img src="/public/img/coequipier.webp" alt="" class="h-1/2 rounded-3xl mb-8">

        <h2 class="text-2xl font-bold ">Coach de Badminton</h2>

        <div class="max-w-lg mx-auto p-5 ">

            <form>
                <div class="mb-4">
                    <input
                    type="text"
                    id="firstName"
                    v-model="firstName"
                    class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm  placeholder:text-gray-500"
                    required
                    placeholder="Prénom"
                    />
                </div>

                <div class="mb-4">
                    <input
                    type="text"
                    id="lastName"
                    v-model="lastName"
                    class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm  placeholder:text-gray-500"
                    required
                    placeholder="Nom"
                    />
                </div>

                <div class="mb-4">
                    <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm  placeholder:text-gray-500"
                    required
                    placeholder="Email"
                    />
                </div>

                <div class="mb-4">
                    <input
                    type="tel"
                    id="phone"
                    v-model="phone"
                    class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm  placeholder:text-gray-500"
                    required
                    placeholder="Numéro"
                    />
                </div>

                <div class="mb-4">
                    <textarea
                    id="reason"
                    v-model="reason"
                    class="mt-1 block w-full p-2 px-5 border border-red-200 text-black rounded-2xl shadow-sm  placeholder:text-gray-500"
                    required
                    placeholder="Motif "
                    ></textarea>
                </div>
                 <p class="mb-8 text-sm font-normal"><span class="font-bold">En cliquant sur envoyer</span>, j’accepte que Feater partage mes données personnelles telles que complétées dans le formulaire.</p>
                <RouterLink to="/coaching/felicitation">
                    <div class="flex ">
                        <button
                        type="submit"
                        class="w-5/6 m-auto text-white text-center  bg-red-600 rounded-3xl p-4 mb-12 font-bold"
                        >
                        ENVOYER
                        </button>
                    </div>
                </RouterLink>
            </form>
        </div>
    </div>

</template>
