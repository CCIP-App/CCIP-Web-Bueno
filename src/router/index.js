import Vue from 'vue'
import Router from 'vue-router'

import RootView from '../views/RootView.vue'
import Scenario from '../views/Scenario.vue'
import Schema from '../views/Schema.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/scenario' },
    { path:'/scenario' , component: Scenario},
    { path:'/schema', component:Schema }
  ]
})