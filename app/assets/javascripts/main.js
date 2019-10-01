import Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
