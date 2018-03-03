import Vue from 'vue'
import Router from 'vue-router'

import Scenario from '../views/Scenario.vue'
// import Schema from '../views/Schema.vue'
import Announcement from '../views/Announcement.vue'
import Puzzle from '../views/Puzzle.vue'
import MyTicket from '../views/MyTicket.vue'

Vue.use(Router)

let parameters = function () {
  return location.search.split('?').pop().split('&').map(function (p) {
    var ps = p.split('=')
    var o = {}
    o[ps.shift()] = ps.join('=')
    return o
  }).reduce(function (a, b) {
    var o = a
    for (var k in b) {
      o[k] = b[k]
    }
    return o
  })
}

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Scenario,
      beforeEnter (to, from, next) {
        if ((parameters().token || '').length !== 0) {
          console.log('asd')
          window.localStorage.setItem('ccip-token', parameters().token)
        }
        next('/scenario')
      }
    },
    { path: '/scenario', component: Scenario },
    { path: '/announcement', component: Announcement },
    { path: '/puzzle', component: Puzzle },
    { path: '/myticket', component: MyTicket }
  ]
})
