import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element-ui
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//vue-localstorage
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

import '@/assets/css/base.css';

Vue.config.productionTip = false

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
