<script setup lang="ts">
import { reactive } from 'vue'
import Alert from '@/components/alert.vue'

const url = import.meta.env.VITE_API_URL as string

const form = reactive({
  email: '',
  password: '',
  message: ''
})

async function submit() {
  if (!form.email || !form.password) {
    form.message = 'Preencha todos os campos'
    return
  }

  const data = await (await fetch(`${url}/auth/register`, {
    method: 'post',
    body: JSON.stringify(form)
  })).json()
  
  form.message = data.message
}
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <h2 class="text-center text-3xl font-bold leading-9 tracking-tight">Cadastro</h2>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <Alert v-if="form.message">{{ form.message }}</Alert>
      <form class="space-y-5" autocomplete="off" @submit.prevent="submit">
        <div>
          <label for="email" class="block font-medium leading-6">E-mail</label>
          <div class="mt-2">
            <input 
              v-model="form.email"
              type="email" 
              
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div>
          <label for="password" class="block font-medium leading-6">Senha</label>
          <div class="mt-2">
            <input 
              v-model="form.password"
              type="password" 
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 placeholder:text-gray-300 focus:ring-4 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div>
          <button 
            type="submit"
            class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <p class="mt-10 text-right text-sm text-gray-400">
        Já tem uma conta? Faça <router-link to="/conta/entrar" class="font-semibold leading-6 text-yellow-400 hover:text-yellow-500">login</router-link>.
      </p>
    </div>
  </div>
</template>