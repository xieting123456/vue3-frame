export default {
  namespaced: true,
  state: () => {
    return {
      list: []
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
