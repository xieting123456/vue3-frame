import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')

const routes = [{
  // 一级路由
  path: '/',
  component: Layout,
  // 二级路由
  children: [{
    path: '/',
    component: Home
  }]

}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
