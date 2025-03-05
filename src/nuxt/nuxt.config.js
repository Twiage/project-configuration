import { defineNuxtConfig } from "nuxt/config";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-07",
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  imports: {
    autoImport: false,
  },
  modules: ["@pinia/nuxt", "@nuxt/test-utils/module", "@vee-validate/nuxt"],
  nitro: {
    preset: "static",
  },
  runtimeConfig: {
    public: { apiURL: "", appName: "", includeCredentials: false },
  },
  sourcemap: { client: true },
  spaLoadingTemplate: "spa-loading-template.html",
  ssr: false,
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    plugins: [svgLoader()],
  },
});
