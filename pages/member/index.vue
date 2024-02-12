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
    <h1 class="text-3xl font-bold my-2">Luminessのメンバー</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <MemberCard
        v-for="member in members?.items"
        :key="member._id"
        :member="member"
      />
    </div>
  </article>
</template>

<style scoped></style>
