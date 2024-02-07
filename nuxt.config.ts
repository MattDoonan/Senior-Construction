// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/amu5vjp.css' }],
    },
  },
  css: [
    '~/assets/global.sass',
  ],
  image: {
    provider: 'netlify',
    netlify: {
      baseUrl: process.env.IMAGES_URL
    }
  },
  modules: [
    "@nuxt/image",
    "nuxt-swiper",
  ],
})