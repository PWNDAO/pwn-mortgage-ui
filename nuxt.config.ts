// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // we use SSG
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  css: [
    '~/assets/css/_variables.css', 
    '~/assets/css/base.css', 
    '~/assets/css/fonts.css', 
    '~/assets/css/normalize.css',
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  // show ts errors in dev server
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      link: [
        {rel: 'icon', href: 'favicon.ico'}
      ]
    }
  }
})