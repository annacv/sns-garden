import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wizard: {
      step: 1
    },
    userData: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      hashedPassword: ''
    }
  },

  mutations: {
  /**
  * Set wizard steps
  * @param state
  * @param step
  */
    setStep (state, step) {
      state.wizard.step = step
    },
    /**
  * Update userData
  * @param state
  * @param userData
  */
    setUserData (state, userData) {
      const values = Object.keys(userData)
      values.forEach((key, n) => {
        state.userData[values[n]] = userData[key]
      })
    }
  },

  actions: {
  },

  getters: {
    getStep (state) {
      return state.wizard.step
    },
    getUser (state) {
      return state.userData
    }
  },

  modules: {
  }
})
