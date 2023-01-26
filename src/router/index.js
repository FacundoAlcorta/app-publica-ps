import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/disciplinas',
      name: 'disciplinas',
      component: () => import('../views/Disciplinas.vue')
    },
    {
      path: '/cuotas',
      name: 'cuotas',
      component: () => import('../views/Cuotas.vue')
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: () => import('../views/Estadisticas.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }

  ]
})

export default router;




