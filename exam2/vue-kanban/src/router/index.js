import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Join from '../views/member/Join.vue'
import MyInfo from '../views/member/MyInfo.vue'
import Login from '../views/member/Login.vue'
import Logout from '../views/member/Logout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/join',
    name : 'Member Join',
    component: Join
  },
  {
    path: '/login',
    name: 'Member Login',
    component: Login
  },
  {
    path: '/logout',
    name: "Member Logout",
    component: Logout
  },
  {
    path: '/my_info',
    name: "Member MyInfo",
    component: MyInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
