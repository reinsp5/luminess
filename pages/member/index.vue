<script lang="ts" setup>
import type { Member } from "@/interfaces/member";

// SSGを有効にする
defineRouteRules({
  ssr: true,
  prerender: true,
});

const { data: members } = await useFetch<Member>("/api/getContents", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appUid: "members",
    modelUid: "member",
    query: {
      order: ["_id"],
      depth: 2,
    },
  },
});

</script>

<template>
  <article class="container mx-auto py-8">
    <h1 class="text-3xl font-bold">メンバー一覧</h1>
    <MemberCard v-for="member in members?.items" :key="member._id" :member="member" />
  </article>
</template>

<style scoped></style>
