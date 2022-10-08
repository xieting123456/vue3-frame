export default {
  namespaced: true,
  state: () => {
    return {
      id: '123',
      // 用户信息的vuex
      profile: {
        id: '1234566',
        avatar: '',
        nickname: '',
        account: '12',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
