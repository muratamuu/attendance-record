import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Sub from '@/components/Sub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sub',
      component: Sub
    }
  ]
})