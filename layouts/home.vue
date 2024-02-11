<script lang="ts" setup></script>

<template>
  <main>
    <slot />
  </main>
  <div
    class="absolute bottom-0 flex w-full flex-col justify-center bg-primary-950 text-white h-32"
  >
    <Header class="grow" />
    <Footer class="p-4" />
  </div>
</template>

<style scoped></style>
