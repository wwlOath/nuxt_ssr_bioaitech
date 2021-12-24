export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_ssr',
    /*htmlAttrs: {
      lang: 'en'
    },*/
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
    'view-design/dist/styles/iview.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/view-ui',
    "@/plugins/api",
    "@/plugins/config",
    "@/libs/axios"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //'@gauseen/nuxt-proxy',
    '@nuxtjs/axios',
    //'@nuxtjs/proxy'
  ],
  /*
 ** Axios module configuration
 */
  //axios: {
    //proxy: true,
    //prefix: '/api', // baseURL
    //credentials: true,
    //baseURL: process.env._ENV == "production" ? "http://192.168.1.118:18081/api" : "http://192.168.1.118:18081/api",
  //},
  /*proxy: {
    '/api': {
      target:  "http://192.168.1.118:18081/bioaitech-api", // 代理地址
        changeOrigin: true,
        pathRewrite: {
        '^/api': '',
      }
    }
  },*/

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
