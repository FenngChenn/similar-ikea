import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 路由懒加载模式
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Parlour = () => import(/* webpackChunkName: "Parlour" */'../views/parlour/Parlour')
const UserRegister = () => import(/* webpackChunkName: "UserRegister" */'../views/user/UserRegister')
const UserLogin = () => import(/* webpackChunkName: "UserLogin" */'../views/user/UserLogin')
const UserInfo = () => import(/* webpackChunkName: "UserInfo" */'../views/user/UserInfo')
const UserWishlist = () => import(/* webpackChunkName: "UserWishlist" */'../views/user/UserWishlist')
const UserShopbag = () => import(/* webpackChunkName: "UserShopbag" */'../views/user/UserShopbag')
const CustomerServiceHome = () => import(/* webpackChunkName: "CustomerServiceHome" */'../views/customer/CustomerServiceHome')
const CustomerDelivery = () => import(/* webpackChunkName: "CustomerDelivery" */'../views/customer/CustomerDelivery')
const CustomerAssemble = () => import(/* webpackChunkName: "CustomerAssemble" */'../views/customer/CustomerAssemble')
const CustomerReturn = () => import(/* webpackChunkName: "CustomerReturn" */'../views/customer/CustomerReturn')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requireAuth: false }
  },
  {
    path: '/parlour',
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
  },
  {
    path: '/customerService',
    component: CustomerServiceHome,
    meta: { requireAuth: false },
    children: [
      {
        path: 'delivery',
        name: 'delivery',
        component: CustomerDelivery,
        meta: { requireAuth: false }
      },
      {
        path: 'assemble',
        name: 'assemble',
        component: CustomerAssemble,
        meta: { requireAuth: false }
      },
      {
        path: 'return',
        name: 'return',
        component: CustomerReturn,
        meta: { requireAuth: false }
      },
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

Vue.prototype.initUserInfo = () => {
  store.state.test.set('name', 'fc')
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
