<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
    <h2 class="text-center text-3xl font-bold leading-9 tracking-tight">Entrar</h2>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-5" action="#" method="POST">
        <div>
          <label for="email" class="block font-medium leading-6">E-mail</label>
          <div class="mt-2">
            <input 
              id="email" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6"
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
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="block w-full indent-3 rounded-md border-0 py-1.5 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 placeholder:text-gray-300 focus:ring-4 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button 
            type="submit"
            class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Entrar
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