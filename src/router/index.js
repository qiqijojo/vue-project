import Vue from 'vue'
import VueRouter from 'vue-router'

import One from '../components/One'
import Two from '../components/Two'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

Vue.use(VueRouter)

const routes = [
  { path: '/one', component: One },
  { path: '/two', component: Two }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
