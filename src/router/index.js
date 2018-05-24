import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginView from '@/views/login'

Vue.use(Router)

export const routersConf = [
  {
    path: '',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routersConf
})
