import colors from 'vuetify/es5/util/colors'
//set NODE_OPTIONS=--openssl-legacy-provider
export default {
  router: {
    base: '/'
  },
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%sENS Bechar',
    title: '',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amiri:ital@1&display=swap'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FE5800',
          accent: '#808080',
          secondary: '#676767',
          icons: '#F2921D',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr: false,
    target: 'static',
  },
  axios: {
    prefix: '/api/',
    proxy: true,
    browserBaseURL: "https://www.ens-bechar.dz/Panel/index.php",
    //browserBaseURL: "http://localhost:8000",
    credentials: false
  },
  loading: {
    color: '#4CD3AA',
    height: '4px'
  },

}
