import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 0,
    msg: 'jojo'
  },
  mutations: {
    mAdd: (state) => {
      state.name = state.name + 1
    },
    mSub: (state) => {
      state.name = state.name - 1
    }
  },
  getters: {
    format: (state) => {
      console.log('getters')
      return state.msg + '你好呀!'
    }
  },
  actions: {
  },
  modules: {
  }
})
