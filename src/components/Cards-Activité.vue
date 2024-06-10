<script setup lang="ts">

import ImgPb from '@/components/ImgPb.vue'
import type { SportResponse } from '@/pocketbase-types'
const props = defineProps<SportResponse<any>>()

</script>


<template>
  <nav>
    <RouterLink to="/activite/Filtre">
      <button class="rounded-3xl">
        <div class="relative">
          <ImgPb :record="props" :filename="Image" class="rounded-3xl w-56 h-32 object-cover" />
          <div class="absolute bottom-0 w-full  bg-black rounded-b-3xl flex items-center justify-center">
            <p class="text-white text-lg font-bold text-center py-3">{{ Nom }}</p>
          </div>
        </div>
      </button>
    </RouterLink>
  </nav>
</template>