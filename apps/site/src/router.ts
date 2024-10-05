import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { routes } from '@/routes'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'text-white',
  linkExactActiveClass: 'text-white',
  routes,
})

router.beforeEach(async (to, _, next) => {
  const authStore = useAuthStore()
  const publicPages = ['/conta/entrar', '/conta/cadastro', '/conta/recuperar', '/conta/verificar']
  const authRequired = !publicPages.includes(to.fullPath)

  if (!authRequired) next()

  if (!authStore.user && to.name !== 'Login') {
    alert('Você precisa estar logado para acessar esta página')
    authStore.$patch({ returnUrl: to.fullPath })
    next({ name: 'Login' })
  } else {
    next()
  }
})

export { router }