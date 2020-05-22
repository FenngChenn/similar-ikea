import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 路由懒加载模式
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Parlour = () => import(/**/'../views/parlour/Parlour')
const UserRegister = () => import('../views/user/UserRegister')
const UserLogin = () => import('../views/user/UserLogin')
const UserInfo = () => import('../views/user/UserInfo')
const UserWishlist = () => import('../views/user/UserWishlist')
const UserShopbag = () => import('../views/user/UserShopbag')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requireAuth: false }
  },
  {
    path: '/tehui',
    name: 'parlour',
    component: Parlour,
    meta: { requireAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister,
    meta: { requireAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin,
    meta: { requireAuth: false }
  },
  {
    path: '/user/:name',
    name: 'userInfo',
    component: UserInfo,
    meta: { requireAuth: true },
    children: [
      {
        path: 'wishlist',
        name: 'wishlist',
        component: UserWishlist,
        meta: { requireAuth: true }
      },
      {
        path: 'shopbag',
        name: 'shopbag',
        component: UserShopbag,
        meta: { requireAuth: true }
      }
    ]
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
