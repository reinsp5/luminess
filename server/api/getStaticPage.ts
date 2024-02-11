import { Articles } from "@/interfaces/newt";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const params = getQuery(event);

  if (!params.query) {
    createError({
      status: 400,
      statusMessage: "params is required",
    });
  }

  // APIのエンドポイント
  const endpoint = `${config.newt.endpoint}/${params.appUid}/${params.modelUid}`;
  // クエリをパース
  const query = JSON.parse(params.query as string);

  // Newtからデータを取得
  const response = await $fetch<Articles>(
    endpoint,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.newt.cdnApiToken}`,
      },
      query: query,
    },
  );
  return response.items[0];
});
