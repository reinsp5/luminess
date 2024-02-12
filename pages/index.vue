<script lang="ts" setup>
import type { SlideshowResponse, SlideshowImage } from '@/interfaces/slideshow';

definePageMeta({
  layout: "home",
});

const { data } = await useFetch<SlideshowResponse>("/api/getContents", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appUid: "slideshow",
    modelUid: "photo",
    query: {
      order: ["_id"],
      depth: 2,
    },
  },
});

const photos = data.value?.items;
</script>

<template>
  <HeroArea v-model:photos="photos" v-model:length="photos.length" />
</template>

<style scoped></style>
