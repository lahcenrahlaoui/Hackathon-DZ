const colors = require('vuetify/es5/util/colors')
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  head: {
    titleTemplate: '%s - Hackathon DZ',
    title: 'Hackathon DZ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/main.css',
    '@/assets/css/animate.css',
    '@fortawesome/fontawesome-free/css/all.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/gtag',
    '@/plugins/countdown',
    '@/plugins/sweetAlert2.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',

  ],

  googleFonts:{
    families: {
      Kufam: {
        wght: [100, 400,500,900],
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',

  ],
  i18n: {
    lazy: true,
    locales: [
      {
        name: 'العربية',
        code: 'ar',
        iso: 'ar',
        file: 'ar-DZ.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en-US.js'
      }
    ],
    loadLanguagesAsync: true,

    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n'
    },
    seo: true
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.hackathon2021.dz/api/v1/', /* 'http://localhost:8000/api/v1/'*/
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#00dd86'
        },
        dark: {
          primary: '#00dd86',
          /*accent: colors.grey['darken3'],
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,*/
          warning: '#ffc107',
          /*error: colors.deepOrange.accent4,
          success: colors.green.accent3*/
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
