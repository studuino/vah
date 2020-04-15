module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true,
      lintGQL: true,
    },
    ssr: {
      entry: (target) => `./src/entry-${target}`,
      // favicon: './public/img/favicon.png',
      nodeExternalsWhitelist: [
        /\.css$/,
        /\?vue&type=style/,
        /^vuetify/,
        /^register-service-worker/,
      ],
    },
  },

  chainWebpack: (config) => {
    // Either 'client' or 'server'
    if (process.env.VUE_CLI_SSR_TARGET === 'client') {
      // Client-only config
      console.log('🎹', config)
    } else {
      // SSR-only config
    }
  },
  configureWebpack: (config) => {
    // Either 'client' or 'server'
    if (process.env.VUE_CLI_SSR_TARGET === 'client') {
      console.log('🎹', config)

      return {
        // Client-only config
      }
    } else {
      return {
        // SSR-only config
      }
    }
  },
}
