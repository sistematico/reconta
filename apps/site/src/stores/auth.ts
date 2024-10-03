import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import type { User } from '@/types'

const url = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref<User | null>(null)
  const returnUrl = null as string | null
  let refreshTokenTimeout = null as ReturnType<typeof setInterval> | null

  async function login(identifier: string, password: string) {
    const { user, tokens, ok } = await (await fetch(`${url}/auth/signin`, { method: 'post', body: JSON.stringify({ identifier, password }) })).json()
    if (!ok) return { message: 'Erro ao logar no sistema', ok: false }
    user.value = { ...user, tokens }
    localStorage.setItem('user', JSON.stringify({ ...user, tokens }))
    startRefreshTokenTimer()
    return { message: 'Usuário logado no sistema', ok: true }
  }

  async function logout() {
    await fetch(`${url}/auth/revoke`, { method: 'post', body: JSON.stringify({ token: user?.value?.tokens }) })
    stopRefreshTokenTimer()
    user.value = null
    localStorage.removeItem('user')
    router.push('/login')
  }

  async function refreshToken() {
    if (!user.value && localStorage.getItem('user')) user.value = JSON.parse(localStorage.getItem('user') || '{}')
    user.value = await (await fetch(`${url}/auth/refresh`, { method: 'post', body: JSON.stringify({ token: user?.value?.tokens }) })).json()
    startRefreshTokenTimer()
  }

  function startRefreshTokenTimer() {
    if (!user.value || !user.value.tokens) return   
    
    // parse json object from base64 encoded jwt token
    const jwtBase64 = user.value.tokens.accessToken.split('.')[1]
    const jwtToken = JSON.parse(atob(jwtBase64))

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000)
    const timeout = expires.getTime() - Date.now() - (60 * 1000)

    refreshTokenTimeout = setTimeout(refreshToken, timeout)
  }

  function stopRefreshTokenTimer() {
    if (refreshTokenTimeout) clearTimeout(refreshTokenTimeout)
  }

  return { user, login, logout, refreshToken, returnUrl }  
})