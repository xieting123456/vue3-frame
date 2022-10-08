import {
  createApp
} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import 'normalize.css'
import "@/assets/styles/comments.less"

// 创建一个vue应用实例
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
