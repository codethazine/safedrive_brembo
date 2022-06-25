import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
