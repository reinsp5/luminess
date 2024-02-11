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
  const endpoint = `${config.newt.endpoint}/${params.appUid}/${params.modelUid}/${params.contentUid}`;
  // クエリをパース
  const query = JSON.parse(params.query as string);

  // Newtからデータを取得
  return await $fetch(
    endpoint,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.newt.cdnApiToken}`,
      },
      query: query,
    },
  );
});
