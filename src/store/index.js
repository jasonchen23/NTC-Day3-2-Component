import { createStore } from 'vuex'

export default createStore({
  state: {
    messages:'hello cool',
    name:'Jason',
    age:'23',
    job:'student'
  },
  getters: {
    title(state) {
       return `${state.name}:${state.job}`
    },
    fullTitle(state,getters) {
      return `${getters.title}，${state.age}歲`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
