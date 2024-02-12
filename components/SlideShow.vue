<script lang="ts" setup>
import type { SlideshowImage } from "@/interfaces/slideshow";

const photos = defineModel<SlideshowImage[]>("photos", {
  required: true,
});

const length = defineModel<number>("length", {
  required: true,
});

const slideIndex = ref(0);
let timer: number | NodeJS.Timeout | undefined;

onMounted(() => {
  timer = setInterval(() => {
    if (slideIndex.value < length.value - 1) {
      slideIndex.value++;
    } else {
      slideIndex.value = 0;
    }
  }, 10000);
});

onUnmounted(() => {
  if (timer !== undefined) {
    clearInterval(timer);
  }
});
</script>

<template>
  <div>
    <div v-for="(slide, index) in photos" :key="slide._id">
      <Transition name="fade">
        <NuxtImg
          v-show="index === slideIndex"
          provider="imagekit"
          format="avif"
          width="3840"
          height="2160"
          sizes="100vw sm:50vw md:400px lg:800px xl:1200px xxl:1600px"
          :src="slide.photo.src"
          :quality="80"
          :alt="slide.name"
          class="absolute inset-0 h-screen object-cover"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
