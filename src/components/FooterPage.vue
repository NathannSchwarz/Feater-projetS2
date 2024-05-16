<script setup lang="ts">
import LogowhiteIcon from '@/components/icons/Iconlogowhite.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="grille space-y-6 bg-black py-16 px-6 text-white lg:space-y-0">
    <div class="flex justify-between w-full">
      <LogowhiteIcon />

      <nav class="space-y-8 text-right lg:col-span-3 lg:col-start-7">
        <h4 class="font-bold uppercase">Organisation</h4>
        <ul class="space-y-2">
          <li><RouterLink to="/events">Conditions générales</RouterLink></li>
          <li><RouterLink to="/contact">Politiques de confidentialité</RouterLink></li>
          <li><RouterLink to="/contact">Données Personelles</RouterLink></li>
          <li><RouterLink to="/contact">Abonnement</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/contact">Langue</RouterLink></li>
        </ul>

        <div class="space-y-3 lg:col-span-3 lg:col-start-10">
          <h4 class="font-bold uppercase">Nous suivre</h4>
          <ul class="flex gap-4">
            <li>
              <a href="https://facebook.com" aria-label="facebook"><FacebookIcon /></a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /></a>
            </li>
            <li>
              <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /></a>
            </li>
            <li>
              <a href="https://youtube.com" aria-label="youtube"><YoutubeIcon /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
</template>
