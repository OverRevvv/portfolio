// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
          "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
          "Content-Security-Policy": "default-src 'self'; img-src 'self' data: blob: https://readme-typing-svg.demolab.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; worker-src 'self' blob:; connect-src 'self' blob: data: https://api.web3forms.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com",
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt","@vueuse/motion/nuxt","nuxt3-lenis"],
  app: {
    head: {
      title: "OverRevvv",
      link:[
            { rel: 'icon',type: 'image/svg+xml', href: 'favicon.svg'},
            {rel: "preconnect", href:"https://fonts.googleapis.com" },
            {rel: "preconnect", href:"https://fonts.gstatic.com", crossorigin:"anonymous"},
            {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Kanit&display=swap"}
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
          content: "https://overrevvv.vercel.app/images/hot.jpg",
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
          content: "https://overrevvv.vercel.app/images/hot.jgp",
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