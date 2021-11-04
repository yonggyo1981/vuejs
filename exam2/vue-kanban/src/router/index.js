import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Join from '../views/member/Join.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
