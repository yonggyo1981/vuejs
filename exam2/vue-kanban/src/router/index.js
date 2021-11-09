import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Join from '../views/member/Join.vue'
import Login from '../views/member/Login.vue'

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
    name: 'MNember Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
