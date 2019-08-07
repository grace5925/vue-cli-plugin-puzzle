import Vue from 'vue'
import App from './App.vue'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')

Vue.config.productionTip = false
viewportUnitsBuggyfill.init({
  hacks
})

new Vue({
  render: h => h(App)
}).$mount('#app')
