import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import loginView from '@/views/login'
import mainView from '@/views/main'
import newTaskView from '@/views/tasks/newTask'

Vue.use(Router)

export const routersConf = [
  {
    path: '/',
    name: 'main',
    component: mainView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/new/task',
    name: 'new task',
    component: newTaskView
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routersConf
})
