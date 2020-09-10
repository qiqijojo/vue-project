import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 0
  },
  mutations: {
    mAdd: (state) => {
      state.name = state.name + 1
    },
    mSub: (state) => {
      state.name = state.name - 1
    }
  },
  actions: {
  },
  modules: {
  }
})
