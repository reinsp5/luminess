<script lang="ts" setup>
import type { Member } from "@/interfaces/member";
const props = defineProps<{
  member: Member;
}>();

const posClass = (value: String) => {
  if (!value) return;
  switch (value) {
    case "master":
      return "bg-blue-800";
    case "manager":
      return "bg-teal-800";
    case "common":
      return "bg-rose-800";
    case "visitor":
      return "bg-blue-500";
  }
};
</script>

<template>
  <div
    class="my-8 grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-primary-950 overflow-hidden bg-white"
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
    <div class="relative p-4 flex flex-col">
      <h2 class="text-3xl font-bold" :class="props.member.position.slug">{{ props.member.name }}</h2>
      <div
        class="w-fit py-1 px-4 text-white rounded-3xl ml-auto flex items-center"
        :class="posClass(props.member.position.slug)"
      >
        {{ props.member.position.name }}
      </div>
      <!-- 使用クラス -->
      <div class="mt-4 flex items-center z-10">
        <span class="inline-block w-30 text-md lg:text-lg mr-2"
          >使用クラス</span
        >
        <NuxtImg
          v-for="useClass in props.member.useClass"
          :key="useClass._id"
          :src="useClass.icon.src"
          provider="imagekit"
          sizes="sm:30px lg:40px"
          fit="pad_extract"
          class="mx-2 w-7 h-7 lg:w-10 lg:h-10 inline"
          :alt="useClass.name"
        />
      </div>
      <!-- 使用プラットフォーム -->
      <div class="mt-4 flex items-center z-10">
        <span class="inline-block w-30 text-md lg:text-lg mr-2"
          >プレイ環境</span
        >
        <NuxtImg
          v-for="usePlatform in props.member.platform"
          :key="usePlatform._id"
          :src="usePlatform.icon.src"
          provider="imagekit"
          sizes="sm:30px lg:40px"
          fit="pad_extract"
          class="mx-2 w-7 h-7 lg:w-10 lg:h-10 inline"
          :alt="usePlatform.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.arks {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>