<script setup lang="ts">
import { reactive } from 'vue'
import Alert from '@/components/alert.vue'

const url = import.meta.env.VITE_API_URL as string

const form = reactive({
  username: '',
  email: '',
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
  if (!form.username || !form.email || !form.password) {
    form.message = 'Preencha todos os campos'
    return
  }

  form.loading = true

  const data = await (await fetch(`${url}/auth/signup`, {
    method: 'post',
    body: JSON.stringify(form)
  })).json()

  console.log(data.message)

  form.open = true
  form.message = data.message
  form.loading = false
}
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <h2 class="text-center text-3xl font-bold leading-9 tracking-tight">Cadastro</h2>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <Alert v-if="form.message && form.open" @closed="close">{{ form.message }}</Alert>
      <form class="space-y-5" autocomplete="off" @submit.prevent="submit" v-if="!form.created">
        <div>
          <label for="username" class="block font-medium leading-6">Nome de usuário</label>
          <div class="mt-2">
            <input 
              id="username"
              v-model="form.username"
              type="text"               
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6"
              :disabled="form.loading"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block font-medium leading-6">E-mail</label>
          <div class="mt-2">
            <input 
              id="email"
              v-model="form.email"
              type="email"               
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6"
              :disabled="form.loading"
            />
          </div>
        </div>
        <div>
          <label for="password" class="block font-medium leading-6">Senha</label>
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
        <div class="flex">
          <button 
            type="submit"
            class="rounded-md bg-yellow-400 px-3 py-2 mr-2 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            v-if="!form.loading"
          >
            Cadastrar
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

          <button 
            type="reset"
            class="rounded-md bg-[#4E433F] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Apagar
          </button>
        </div>
      </form>
      <p class="mt-10 text-right text-sm text-gray-400">
        Já tem uma conta? Faça <router-link to="/conta/entrar" class="font-semibold leading-6 text-yellow-400 hover:text-yellow-500">login</router-link>.
      </p>
    </div>
  </div>
</template>