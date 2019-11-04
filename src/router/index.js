import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import( '../views/profile/Profile')

//1安装路由插件
Vue.use(VueRouter)

//2创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//3导出路由

export default router

