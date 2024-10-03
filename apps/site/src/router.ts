import { createWebHistory, createRouter } from 'vue-router'
import { routes } from '@/routes'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'text-white',
  linkExactActiveClass: 'text-white',
  routes,
})

router.beforeEach((to, _, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  const authStore = useAuthStore()
  const publicPages = ['/conta/entrar', '/conta/cadastro', '/conta/recuperar', '/conta/verificar']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !authStore.user) {
    authStore.$patch({ returnUrl: to.fullPath })
    next({ name: 'Login' })
  } else {
    next()
  }
})

export { router }