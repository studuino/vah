import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoHome from '@/views/TodoHome.vue'
import Callback from '@/components/Callback.vue'
import auth from '@/auth/authService'

Vue.use(VueRouter)

export function createRouter() {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/home',
      name: 'todo',
      component: TodoHome,
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })

  router.beforeEach((to, from, next) => {
    if (to.path === '/' || to.path === '/callback' || auth.isAuthenticated()) {
      return next()
    }

    auth.login({ target: to.path })
  })

  return router
}
