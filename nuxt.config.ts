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
  runtimeConfig: {
    public: {
      siteName: "",
    },
  },
  app: {
    head: {
      title: "Luminess",
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
});
