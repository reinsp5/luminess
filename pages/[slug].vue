<script lang="ts" setup>
import type { Article } from "@/interfaces/newt";

// SSGを有効にする
defineRouteRules({
  ssr: true,
  prerender: true,
});

const route = useRoute();
const { slug } = route.params;

const { data } = await useFetch<Article>("/api/getStaticPage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appUid: "fixed-page",
    modelUid: "article",
    query: {
      slug: slug,
      select: ["_id", "title", "slug", "body", "coverImage"],
    },
  },
});

const article = data.value;

useHead({
  title: article?.title,
  meta: [{ name: "description", content: "投稿詳細ページです" }],
});
</script>

<template>
  <article class="container mx-auto py-8">
    <h1>{{ article?.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="article?.body" class="w-full" />
  </article>
</template>

<style>
@import url("@/assets/css/about.css");
</style>
