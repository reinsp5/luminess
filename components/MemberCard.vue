<script lang="ts" setup>
import type { Member } from "@/interfaces/member";
const props = defineProps<{
  member: Member;
}>();

const posClass = (value: String) => {
  if (!value) return;
  switch (value) {
    case "master":
      return "border-blue-600";
    case "manager":
      return "border-teal-600";
    case "common":
      return "border-rose-600";
    case "visitor":
      return "border-blue-500";
  }
};
</script>

<template>
  <div
    class="mx-4 grid grid-cols-1 overflow-hidden border border-primary-950 bg-primary-950 text-white lg:mx-0"
  >
    <NuxtImg
      provider="imagekit"
      :src="props.member.avatar.src"
      sizes="100vw sm:50vw lg:400px lg:800px xl:1200px xxl:1600px"
      width="3840"
      height="2160"
      format="avif"
      quality="80"
      :alt="props.member.avatar.altText"
    />
    <div class="relative flex flex-col overflow-hidden p-4">
      <div class="flex flex-col">
        <small class="font-bold" :class="posClass(props.member.position.slug)">
          {{ props.member.position.name }}
        </small>
        <div class="flex flex-col">
          <h2 class="text-3xl font-bold" :class="props.member.position.slug">
            {{ props.member.name }}
          </h2>
          <span class="name_en text-xl">{{ props.member.nameEN }}</span>
        </div>
      </div>
      <!-- 使用クラス -->
      <div class="z-10 mt-4 flex items-center">
        <span class="w-30 text-md mr-2 inline-block lg:text-lg">
          使用クラス
        </span>
        <NuxtImg
          v-for="useClass in props.member.useClass"
          :key="useClass._id"
          :src="useClass.icon.src"
          provider="imagekit"
          sizes="sm:30px lg:40px"
          fit="pad_extract"
          class="mx-2 inline h-7 w-7 lg:h-10 lg:w-10"
          :alt="useClass.name"
        />
      </div>
      <!-- 使用プラットフォーム -->
      <div class="z-10 mt-4 flex items-center">
        <span class="w-30 text-md mr-2 inline-block lg:text-lg">
          プレイ環境
        </span>
        <NuxtImg
          v-for="usePlatform in props.member.platform"
          :key="usePlatform._id"
          :src="usePlatform.icon.src"
          provider="imagekit"
          sizes="sm:30px lg:40px"
          fit="pad_extract"
          class="platform mx-2 inline h-7 w-7 lg:h-10 lg:w-10"
          :alt="usePlatform.name"
        />
      </div>
      <NuxtImg
        class="absolute bottom-[-80px] right-[-80px] opacity-40"
        src="/images/ngs_arks_logo.png"
      />
    </div>
  </div>
</template>

<style scoped>
small {
  @apply border-l-8 pl-2 text-base;
}

.name_en {
  font-family: "Antonio", sans-serif;
}
</style>
