import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  users: [],
  currentUser: null
}

export default new Vuex.Store({
  state,
  mutations: {
    addUser(state, user) {
      console.log(user)
      state.users.push(user)
    },
    addCurrentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
  },
  modules: {
  }
})
