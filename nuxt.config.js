export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],

  // Adds a `dark` / `light` class to <html> before first paint (no flash).
  colorMode: { classSuffix: "", preference: "system", fallback: "dark" },

  // `npm run generate` → plain static files, host anywhere.
  routeRules: { "/": { prerender: true } },
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/linktree"],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      script: [
        {
          innerHTML:
            "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "./assets/icons/favicon.svg",
        },
      ],
    },
  },
});
