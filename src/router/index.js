import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Parlour = () => import('../views/parlour/Parlour')
const UserLogin = () => import('../views/login/UserLogin')

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home
  },
  {
    path: '/parlour',
    component: Parlour
  },
  {
    path: '/login',
    component: UserLogin
  }
  // ,{
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
