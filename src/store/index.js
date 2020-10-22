import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  users: []
}

export default new Vuex.Store({
  state,
  mutations: {
    addUser(state, user) {
      console.log(user)
      state.users.push(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
