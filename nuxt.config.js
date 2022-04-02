
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Votel Réservation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Votel Réservation' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/vee-validate.js'],
  css: ['~/assets/style/app.styl'],
  modules: [
    '@nuxtjs/apollo',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-5LF2DJ5' }],
    ['nuxt-mail', {
      smtp: {
        host: "smtp.mailgun.org",
        port: 587,
        auth: {
          user: 'postmaster@mg.votel-dz.com',
          pass: process.env.MG_PASS
        }
      },
    }],
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
