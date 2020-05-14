import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Parlour = () => import('../views/parlour/Parlour')
const UserRegister = () => import('../views/user/UserRegister')
const UserLogin = () => import('../views/user/UserLogin')
const UserInfo = () => import('../views/user/UserInfo')

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
    path: '/register',
    component: UserRegister
  },
  {
    path: '/login',
    component: UserLogin
  },
  {
    path: '/user',
    component: UserInfo
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
