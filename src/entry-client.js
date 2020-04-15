import 'isomorphic-fetch'
import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client'
import './registerServiceWorker'

import { createApp } from './main'

createApp({
  async beforeApp({ router }) {
    await loadAsyncComponents({ router })
  },

  afterApp({ app, router, store }) {
    store.replaceState(window.__INITIAL_STATE__)
    router.onReady(() => {
      app.$mount('#app')
    })
  },
})
