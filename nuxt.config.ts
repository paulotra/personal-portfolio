// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  site: { url: 'https://paulotrajano.me' },
  app: {
    head: {
      title: 'Paulo Trajano | FE Developer & Designer',
      meta: [
        { name: 'description', content: 'Frontend Developer & Designer crafting clean, modern web experiences.' },
        { property: 'og:title', content: 'Paulo Trajano | FE Developer & Designer' },
        { property: 'og:description', content: 'Frontend Developer & Designer crafting clean, modern web experiences.' },
        { property: 'og:image', content: 'https://paulotrajano.me/og-image.png' },
        { property: 'og:url', content: 'https://paulotrajano.me' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://paulotrajano.me/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-192.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
        },
      ],
    },
  },
})