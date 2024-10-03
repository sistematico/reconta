<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Alert from '@/components/alert.vue'

const url = import.meta.env.VITE_API_URL as string
const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  identifier: '',
  password: '',
  message: '',
  open: false,
  loading: false,
  created: false
})

function close() {
  form.message = ''
  form.open = false
}

async function submit() {
  if (!form.identifier || !form.password) {
    form.message = 'Preencha todos os campos'
    return
  }

  form.loading = true

  const data = await (await fetch(`${url}/auth/signin`, {
    method: 'post',
    body: JSON.stringify(form)
  })).json()

  form.open = true
  form.message = data.message

  console.log(data.tokens.accessToken)

  if (data.tokens.accessToken) {
    localStorage.setItem('token', data.tokens.accessToken)
    form.created = true
  }

  form.loading = false
}
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <h2 class="text-center text-3xl font-bold leading-9 tracking-tight">Entrar</h2>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <Alert v-if="form.message && form.open" @closed="close">{{ form.message }}</Alert>
      <form class="space-y-5" @submit.prevent="submit" v-if="!form.created">
        <div>
          <label for="identifier" class="block font-medium leading-6">Nome de usuário ou e-mail</label>
          <div class="mt-2">
            <input 
              id="identifier" 
              v-model="form.identifier"
              type="text" 
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6"
              :disabled="form.loading"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block font-medium leading-6">Senha</label>
            <div class="text-sm">
              <router-link to="/conta/senha" class="font-semibold text-yellow-400 hover:text-yellow-500">Esqueceu a senha?</router-link>
            </div>
          </div>
          <div class="mt-2">
            <input 
              id="password" 
              v-model="form.password"
              type="password" 
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 placeholder:text-gray-300 focus:ring-4 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :disabled="form.loading"
            />
          </div>
        </div>

        <div>
          <button 
            type="submit"
            class="rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            v-if="!form.loading"
          >
            Entrar
          </button>

          <button 
            type="button" 
            class="flex items-center rounded-md bg-[#4E433F] px-3 py-2 mr-2 text-sm font-semibold leading-6 text-white shadow-sm" 
            disabled
            v-else
          >
            <svg class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processando...
          </button>
        </div>
      </form>

      <p class="mt-10 text-right text-sm text-gray-400">
        Ainda não tem cadastro?<br />
        <router-link to="/conta/cadastro" class="font-semibold leading-6 text-yellow-400 hover:text-yellow-500">Crie uma conta</router-link>, é simples e rápido.
      </p>
    </div>
  </div>
</template>