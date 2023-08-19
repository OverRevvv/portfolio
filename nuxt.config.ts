// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt","@vueuse/motion/nuxt"],
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