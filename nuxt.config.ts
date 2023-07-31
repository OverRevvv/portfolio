// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
  build: {
    transpile: ["three", "troisjs"],
  },
  app: {
    head: {
      title: "OverRevvv",
      link:[
            { rel: 'icon', href: 'favicon.svg'},
            // { rel: 'icon', type: 'image/x-icon', href: 'favicon2.svg'},
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
/* 
* Potential Resource
https://sketchfab.com/3d-models/earths-synthetic-moons-3e510c0b733d4943a1dc1de40d4a1f7b
https://sketchfab.com/3d-models/earth-orbit-665a96f13ee24657b236a49cb9900061
https://www.youtube.com/watch?v=0fYi8SGA20k&ab_channel=JavaScriptMastery
https://johnsondebbie.com/
https://danielwebsite.vercel.app/
https://www.freepik.com/free-photos-vectors/car-rpm/3
https://www.pinterest.com/pin/1013591459865256822/
https://www.pinterest.com/pin/16677461112760585/
https://sketchfab.com/3d-models/submarine-fiber-optic-cable-network-a952ca4b21fd4ad194a261901414b02f
https://sketchfab.com/3d-models/cybermotors-rx7-te01-test-a4b90a99612c47f596ab05c723795a91
https://sketchfab.com/3d-models/fd3s-ips-racing-time-attack-13da047a4fec4931822bec39a3209dea
https://sketchfab.com/3d-models/kawasaki-ninja-zx10r-2021-2b8c4ecdac4d46f68de1c6e0f27d6e6a
https://sketchfab.com/3d-models/kawasaki-zx10r-cdf6ae10048544d9b069f89fe5be245d

      link: [
        {rel: "apple-touch-icon", sizes: "180x180", href:, "/apple-touch-icon.png"},
        {rel: "icon",, type:"image/png", sizes: "32x32", href:, "/favicon-32x32.png"},
        {rel: "icon",, type:"image/png", sizes: "16x16", href:, "/favicon-16x16.png"},
        {rel: "manifest" href: "/site.webmanifest"},
      ]
*/
