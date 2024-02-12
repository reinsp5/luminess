<script lang="ts" setup></script>

<template>
  <div>
    <main>
      <slot />
    </main>
    <div
      class="absolute bottom-0 flex h-32 w-full flex-col justify-center bg-primary-950 text-white"
    >
      <Header class="grow" />
      <Footer class="p-4" />
    </div>
  </div>
</template>

<style scoped></style>
