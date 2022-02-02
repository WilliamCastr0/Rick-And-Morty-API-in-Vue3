import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters/:page',
    name: 'Characters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
    component: Characters
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
