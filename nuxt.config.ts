export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxtjs/html-validator",
  ],
  // 実験的な機能
  experimental: {
    inlineRouteRules: true, // defineRouteRules()を使用可能にする
  },
  googleFonts: {
    families: {
      Antonio: [400],
    },
  },
  runtimeConfig: {
    newt: {
      spaceUid: process.env.NUXT_NEWT_SPACE_UID || "",
      cdnApiToken: process.env.NUXT_NEWT_CDN_API_TOKEN || "",
      apiToken: process.env.NUXT_NEWT_API_TOKEN || "",
      endpoint:
        `https://${process.env.NUXT_NEWT_SPACE_UID}.cdn.newt.so/v1` || "",
      endpointPreview:
        `https://${process.env.NUXT_NEWT_SPACE_UID}.api.newt.so/v1` || "",
      previewSecret: process.env.NUXT_NEWT_PREVIEW_SECRET || "",
    },
    public: {
      siteName: "",
    },
  },
  // NuxtImageの設定
  image: {
    imagekit: {
      baseURL: "",
    },
  },
  app: {
    layoutTransition: { name: "page", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Luminess",
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
});
