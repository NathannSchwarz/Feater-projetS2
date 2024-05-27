<script setup lang="ts">
import LogowhiteIcon from '@/components/icons/Iconlogowhite.vue'
import YoutubeIcon from '@/components/icons/IconYoutube.vue'
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="relative w-full bottom-0 grille space-y-6 mb-16 bg-black py-16 px-6 text-white lg:space-y-0">
    <div class="flex justify-between w-full">
      <RouterLink to="/"> <LogowhiteIcon /> </RouterLink>  
        <nav class="space-y-6 text-right lg:col-span-3 lg:col-start-7">

            <h4 class="font-bold uppercase">Organisation</h4>

            <ul class="text-sm font-light space-y-2">
            <li><RouterLink to="/compte/conditionsgenerales">Conditions générales</RouterLink></li>
            <li><RouterLink to="/compte/politiquesconfidentialité">Politiques de confidentialité</RouterLink></li>
            <li><RouterLink to="/compte/donnéespersonnelles">Données Personelles</RouterLink></li>
            <li><RouterLink to="/compte/abonnement">Abonnement</RouterLink></li>
            <li><RouterLink to="/compte/">Contact</RouterLink></li>
            <li><RouterLink to="/compte/langue">Langue</RouterLink></li>
            </ul>

            <div class="space-y-6 lg:col-span-3 lg:col-start-10">
            <h4 class=" font-bold uppercase">Nous suivre</h4>
            <ul class="flex justify-end gap-4 ">
                <li>
                <a href="https://facebook.com" target="_blank" aria-label="facebook"><FacebookIcon /></a>
                </li>
                <li>
                <a href="https://instagram.com" target="_blank" aria-label="instagram"><InstagramIcon /></a>
                </li>
                <li>
                <a href="https://twitter.com" target="_blank" aria-label="twitter"><TwitterIcon /></a>
                </li>
                <li>
                <a href="https://youtube.com" target="_blank" aria-label="youtube"><YoutubeIcon /></a>
                </li>
            </ul>
            </div>
        </nav>
    </div>

    <p class="text-xs font-thin text-center pt-12">© 2023 - 2024 Feater Inc.</p>
  </footer>
</template>
