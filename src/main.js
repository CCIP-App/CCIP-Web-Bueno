import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router/index'
import 'vuetify/dist/vuetify.min.css'
import Components from './components/_index'

Vue.use(Vuetify, { theme: {
  primary: '#62757D',
  secondary: '#4F5D60',
  accent: '#009D9B',
  error: '#F44336',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
