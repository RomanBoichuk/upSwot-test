import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    user: [],
    token: localStorage.getItem('autentification' || null)
    // tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    ADD_TASK (state, payload) {
      state.tasks.push(payload)
      // localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    REMOVE_TASK (state, id) {
      const index = state.tasks.findIndex(item => item.id === id)
      state.tasks.splice(index, 1)
    },
    UPDATE_TASK (state, { id, name }) {
      const idx = state.tasks.findIndex(task => task.id === id)
      const task = state.tasks[idx]
      state.tasks[idx] = { ...task, name: name }
    },
    LOGIN (state, payload) {
      state.user = payload
      // localStorage.clear()
    }
  },
  actions: {
    addNEWTASK ({ commit }, payload) {
      commit('ADD_TASK', payload)
    },
    removeTASK ({ commit }, id) {
      commit('REMOVE_TASK', id)
    },
    updateTASK ({ commit }, payload) {
      commit('UPDATE_TASK', payload)
    },
    login ({ commit }, payload) {
      const autentificationUser = true
      localStorage.setItem('autentification', autentificationUser)
      commit('LOGIN', payload)
    }
  },
  modules: {
  },
  getters: {
    tasks: s => s.tasks,
    user: s => s.user
  }
})
