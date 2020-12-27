import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  users: [],
  currentUser: null,
  test: {}
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
      console.log(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
