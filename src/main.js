import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//element-ui
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//vue-localstorage
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

//vue2-storage
import { Vue2Storage } from 'vue2-storage'
Vue.use(Vue2Storage, {
  prefix: 'ikea_', //要添加到key值之前的字符串，以防和其他键名冲突，默认为app_
  driver: 'local', //使用存储的标志符 local/session/memory => localStorage/sessionStorage/memoryStorage
  ttl: 60 * 60 * 24 * 1000  //24 hours 生命周期
})


import '@/assets/css/base.css';

Vue.config.productionTip = false

Vue.prototype.$axios = axios

//vue-image-loader
import VueImageLoader from '@kevindesousa/vue-image-loader'
Vue.use(VueImageLoader)

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer, {

})


router.beforeEach((to, from, next) => {
  // console.log('上一个页面', from)
  // console.log('下一个页面', to)



  let currentUser = Vue.localStorage.get('currentUser')
  // console.log('当前用户是：', currentUser)

  if (to.meta.requireAuth) {
    if (currentUser !== null) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// let user = [{name: 'Mary', pass: '12345'}, {name: 'Tom', pass: '123'}, {name: 'Tony', pass: '456'}];
// let u1 = {name: 'Tony'}
// for(let u of user){
//   if(u1.name === u.name){
//     console.log(u1.name)
//   }
// }

/*var person = {
  name: '张三'
}

var proxy = new Proxy(person, {
  get: (target, propKey) => {
    if(propKey in target) {
      console.log(target[propKey])
    }else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
    }
  }
})

proxy.name;
proxy.age;*/


