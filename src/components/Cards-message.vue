<script setup lang="ts">
import ImgPb from '@/components/ImgPb.vue'
import type { UsersResponse } from '@/pocketbase-types'
const props = defineProps<UsersResponse<any>>()

</script>

<template>

    <button class="pb-2 w-full">
            <div class="border-b border-zinc-300 ">
                <div class="flex items-center mb-2">
                    <ImgPb :record="props" :filename="avatar" class="rounded-full w-10 h-10" />
                    <div class="flex flex-1 min-w-0 ml-2">
                        <div class="flex flex-col flex-1 min-w-0">
                            <div class="flex justify-between items-center w-full">
                                <h3 class="font-semibold text-base truncate">{{Prenom}} {{ Nom }}</h3>
                                <p class="text-xs text-zinc-500">Maintenant</p>
                            </div>
                            <p class="font-light text-xs text-left">Tu es dispo demain à 18h pour allez courir ?</p>
                        </div>
                    </div>
                </div>
            </div>

    </button>
    

        
</template>