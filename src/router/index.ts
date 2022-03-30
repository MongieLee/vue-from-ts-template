import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/Index.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layouts/Index.vue'),
    children: [
      {
        path: '',
        name: 'One',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/one/Index.vue')
      },
      {
        path: '/two',
        name: 'Two',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/two/Index.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/exception/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
