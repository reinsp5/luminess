<script lang="ts" setup>
import type { SlideshowImage } from '@/interfaces/slideshow';

const photos = defineModel<SlideshowImage[]>("photos", {
  required: true,
});
const length = defineModel<number>("length", {
  required: true,
});
</script>

<template>
  <section>
    <SlideShow v-model:photos="photos" v-model:length="length" />
  </section>
</template>

<style scoped></style>
