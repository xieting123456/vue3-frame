import {
  createStore
} from 'vuex'

import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user.js'
import cart from './modules/cart.js'
import category from './modules/category.js'

export default createStore({
  modules: {
    category,
    cart,
    user
  },
  plugins: [
    createPersistedstate({
      // 属性名key 本地存储的名字
      key: 'erabbit-client-pc-store',
      // 持久化模块
      paths: ['user', 'cart']
    })
  ]
})
