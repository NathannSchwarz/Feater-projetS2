<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';
import flecheIcon from '@/components/icons/Iconflèchemenu.vue';

const props = defineProps<{
  activités: {
    id: number;
    title: string;
    date: string;
    description: string;
    imgCardPath: string;
    imgAlt?: string;
    link: string;
  }[];
}>();

const currentIndex = ref(0);
const carouselRef = ref(null);

const next = () => {
  if (currentIndex.value < props.activités.length - 1) {
    currentIndex.value += 1;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const isNextDisabled = computed(() => currentIndex.value >= props.activités.length - 1);
const isPrevDisabled = computed(() => currentIndex.value <= 0);

const startX = ref(0);
const endX = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  startX.value = event.touches[0].clientX;
};

const handleTouchMove = (event: TouchEvent) => {
  endX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (startX.value - endX.value > 50) {
    next();
  } else if (startX.value - endX.value < -50) {
    prev();
  }
};

onMounted(() => {
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
  }
});

onUnmounted(() => {
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.removeEventListener('touchstart', handleTouchStart);
    carousel.removeEventListener('touchmove', handleTouchMove);
    carousel.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<template>
  <div ref="carouselRef" id="carousel" class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * (252 / props.activités.length)}%)` }" style="scroll-snap-type: x mandatory;">
      <div v-for="(activité, index) in props.activités" :key="activité.id" class="w-4/5 flex-shrink-0 ms-6" style="scroll-snap-align: center;">
        <RouterLink :to="activité.link">
          <div class="relative flex justify-center w-80 h-44">
            <img class="rounded-xl w-full h-full object-cover" :src="activité.imgCardPath" :alt="activité.imgAlt || activité.title">
            <div class="absolute bottom-0 w-full h-1/2 text-white bg-red-500 px-3 py-1 rounded-b-xl">
              <h4 class="text-lg font-bold pb-1">{{ activité.title }}</h4>
              <div class="flex justify-between gap-2">
                <p class="text-sm">{{ activité.description }}</p>
                <p class="text-sm font-bold">{{ activité.date }}</p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
