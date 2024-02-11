<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<template>
  <footer>
    <div class="flex w-full justify-end">Copyright&copy; 2024 {{ config.public.siteName }}</div>
  </footer>
</template>

<style scoped></style>
