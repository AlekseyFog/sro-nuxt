module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'СРО "Главпроект"',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'msapplication-TileColor', content: '#da532c'},
      {name: 'theme-color', content: '#ffffff'},
      {hid: 'description', name: 'description', content: 'СРО "Главпроект"'}
      // {'http-equiv': 'cache-control', content: 'max-age=0'},
      // {'http-equiv': 'cache-control', content: 'no-cache'},
      // {'http-equiv': 'pragma', content: 'no-cache'},
      // {'http-equiv': 'expires', content: '0'},
      // {'http-equiv': 'expires', content: 'Tue, 01 Jan 1980 1:00:00 GMT'}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes:'180x180', href: 'favicon/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png',sizes:'32x32', href: 'favicon/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png',sizes:'16x16', href: 'favicon/favicon-16x16.png'},
      {rel: 'manifest', href: 'favicon/site.webmanifest'},
      {rel: 'mask-icon', color: '#5bbad5', href: '/favicon/ned-tab.svg'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'f9f9f9',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ]
}

