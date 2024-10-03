import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import type { User } from '@/types'

const url = import.meta.env.VITE_API_URL

// - ref()s become state properties
// - computed()s become getters
// - function()s become actions

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref<User | null>(null)
  const returnUrl = null as string | null
  let refreshTokenTimeout = null as ReturnType<typeof setInterval> | null

  async function login(username: string, password: string) {
    // localStorage.setItem("userObj", JSON.stringify(myObject));
    user.value = await (await fetch(`${url}/auth/signin`, { method: 'post', body: JSON.stringify({ username, password }) })).json()
    startRefreshTokenTimer()
  }

  async function logout() {
    await fetch(`${url}/auth/revoke`, { method: 'post', body: JSON.stringify({ token: user?.value?.token }) })
    stopRefreshTokenTimer()
    user.value = null
    router.push('/login')
  }

  async function refreshToken() {
    user.value = await (await fetch(`${url}/auth/refresh`, { method: 'post', body: JSON.stringify({ token: user?.value?.token }) })).json()
    startRefreshTokenTimer()
  }

  function startRefreshTokenTimer() {
    if (!user.value || !user.value.token) return   
    
    // parse json object from base64 encoded jwt token
    const jwtBase64 = user.value.token.split('.')[1]
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