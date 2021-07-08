import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalPlayer: 0
  },
  mutations: {
    SET_TOTAL_PLAYER (state, payload) {
      state.totalPlayer = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
