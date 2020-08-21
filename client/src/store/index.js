import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth';
import booking from './booking';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth, booking
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
