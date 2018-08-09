// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import {store} from '@/store/store'

import router from '@/routes'

import { firebase } from '@firebase/app'
import '@firebase/auth'

import i18n from '@/tasks/i18n'

import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter, {
  symbol: '$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.filter('mayuMinu', (valor) => {
  return valor.split(' ').map((p) => {
    if (p[0]) {
      return p[0].toUpperCase() + p.substr(1, p.length)
    }
  }).join(' ')
})

let app
Vue.config.productionTip = false

/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      store,
      i18n,
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
