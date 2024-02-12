<script lang="ts" setup></script>

<template>
  <div>
    <Header class="bg-primary-950 h-20 min-h-20 relative" />
    <main class="grow">
      <slot />
    </main>
    <Footer class="p-4" />
  </div>
</template>

<style scoped></style>
