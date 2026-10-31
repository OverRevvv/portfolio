// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@fontsource/kanit/400.css"],
  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
          "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
          "Content-Security-Policy": "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; worker-src 'self' blob:; connect-src 'self' blob: data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
        },
      },
      "/pc/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
      "/planet/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
      "/images/**": { headers: { "Cache-Control": "public, max-age=2592000" } },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt","@vueuse/motion/nuxt"],
  app: {
    head: {
      title: "OverRevvv",
      link:[
            { rel: 'icon',type: 'image/svg+xml', href: 'favicon.svg'},
            // { rel: 'icon', type: 'image/svg+xml', href: 'favicon2.svg'},
      ],
      meta: [
        { name: 'description', content: 'Portfolio website' },
        { name: "author", content: "OverRevvv/Arnav" },
        {
          name: "theme-color",
          content: "#000000",
          media: "(prefers-color-scheme: dark)",
        },
        {
          name: "theme-color",
          content: "#000000",
          media: "(prefers-color-scheme: light)",
        },
        //Open Graph/Facebook
        { property: "og:url", content: "https://overrevvv.vercel.app" },
        { property: "og:title", content: "OverRevvv" },
        {
          property: "og:description",
          content: "Arnavs's personal profile",
        },
        {
          property: "og:image",
          content: "https://overrevvv.vercel.app/images/pfp.jpg",
        },
        //Twitter
        { property: "twitter:url", content: "https://overrevvv.vercel.app" },
        { property: "twitter:title", content: "OverRevvv" },
        {
          property: "twitter:description",
          content: "Arnav's personal profile",
        },
        {
          property: "twitter:image",
          content: "https://overrevvv.vercel.app/images/pfp.jpg",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:creator",
          content: "overrevvv",
        },
      ],
    }
  },
})