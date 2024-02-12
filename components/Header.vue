<script lang="ts" setup>
const isDrawerOpen = ref(false);
const links = usePageLinks();
</script>

<template>
  <header class="flex">
    <!-- ロゴ -->
    <NuxtLink to="/">
      <NuxtImg
        class="absolute left-4 top-1/2 h-16 -translate-y-1/2"
        src="/images/luminess_logo_white_without_background.svg"
      />
    </NuxtLink>
    <!-- デスクトップ用ナビゲーション -->
    <nav class="hidden grow justify-end lg:flex">
      <ul class="desktop flex">
        <li v-for="link in links">
          <NuxtLink
            class="flex h-full w-full items-center justify-center"
            :to="link.path"
          >
            <IconCSS :name="link.icon" size="40" />
            <span class="px-2">{{ link.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- モバイル用ナビゲーション -->
    <div
      class="fixed right-3 top-3 bg-primary-950 p-2 transition-colors hover:bg-primary-800 lg:hidden"
      @click="isDrawerOpen = true"
    >
      <IconCSS name="cil:hamburger-menu" size="40" />
    </div>
    <!-- 暗転部 -->
    <div
      class="fixed inset-0 z-50 h-dvh w-dvw bg-black opacity-50"
      v-show="isDrawerOpen"
      @click="isDrawerOpen = false"
    />
    <!-- モバイル用ドロワー -->
    <nav
      class="fixed right-0 top-0 z-50 h-dvh w-96 bg-primary-950 duration-200"
      :class="[isDrawerOpen ? 'translate-x-0' : 'translate-x-full']"
    >
      <div class="relative h-full w-full">
        <div
          class="absolute left-3 top-3 z-50 bg-primary-950 p-2 transition-colors hover:bg-primary-800"
          @click="isDrawerOpen = false"
        >
          <IconCSS name="cil:x" color="white" size="40" />
        </div>
        <ul class="mobile relative flex w-full flex-col pt-32">
          <li v-for="link in links">
            <NuxtLink
              :to="link.path"
              class="flex h-full w-full items-center"
              @click="isDrawerOpen = false"
            >
              <IconCSS :name="link.icon" size="40" />
              <span class="px-2">{{ link.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
* {
  @apply text-white;
}
.desktop > li {
  @apply flex h-full w-40 items-center justify-center transition-colors hover:bg-primary-800;
}

.mobile > li {
  @apply flex h-20 w-full items-center px-8 text-xl transition-colors hover:bg-primary-800;
}
</style>
