import { Article } from "@/interfaces/newt";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const params = getQuery(event);

  // APIのエンドポイント
  const endpoint = `${config.newt.endpoint}/${params.appUid}/${params.modelUid}`;

  // お知らせタグのデータを取得
  const response = await $fetch<Article>(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.newt.cdnApiToken}`,
    },
    query: {
      tags: "655f5b82218ce879bff70945", // 「お知らせ」タグのID
      select: ["_id", "_sys", "title"],
      limit: 10,
    },
  });

  return response;
});
