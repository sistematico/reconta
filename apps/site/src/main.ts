import '@/styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { router } from '@/router'
import App from '@/app.vue'

startApp()

async function startApp() {
  const pinia = createPinia()
  const app = createApp(App)

  app.use(pinia)
  app.use(router)

  try {
    const authStore = useAuthStore()
    await authStore.refreshToken()
  } catch {
    console.log('No token found')
  }

  app.mount('#app')
}
