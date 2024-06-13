<script setup lang="ts">
import ImgPb from '@/components/ImgPb.vue'


import type { GroupeResponse } from '@/pocketbase-types'
const props = defineProps<GroupeResponse<any>>()


</script>


<template>
  <nav>
    
      <button class="rounded-xl ">
        <div class="relative">
          <ImgPb :record="props" :filename="Image" class="rounded-3xl w-56 h-32 object-cover" />
          <div class="absolute bottom-0 w-full h-1/2 bg-black rounded-b-3xl flex items-center justify-center">
            <p class="text-white text-base font-bold text-center py-3">{{ Nom }}</p>
          </div>
        </div>
      </button>
    
  </nav>
</template>