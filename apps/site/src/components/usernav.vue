<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const open = ref(false)

function logout() {
  open.value = false
  authStore.logout()
}

function go(dest: string) {
  open.value = false
  router.push(dest)
}
</script>
<template>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    <button type="button"
      class="relative rounded-full bg-[#413937] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span class="absolute -inset-1.5"></span>
      <span class="sr-only">View notifications</span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    </button>

    <!-- Profile dropdown -->
    <div class="relative ml-3">
      <div>
        <button type="button"
          class="relative flex rounded-full bg-[#413937] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button" 
          aria-expanded="false" 
          aria-haspopup="true"
          @click="open = !open"
        >
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">Open user menu</span>
          <img class="h-8 w-8 rounded-full" src="/images/default.svg" alt="ReConta" v-if="!authStore.user" />
          <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="ReConta" v-else />
        </button>
      </div>

      <!--
            Dropdown menu, show/hide based on menu state.
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
      <div
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu" 
        aria-orientation="vertical" 
        aria-labelledby="user-menu-button" 
        tabindex="-1"
        v-if="open && authStore.user"
      >
        <a href="javascript:void(0)" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" @click.prevent="go(`/@${authStore.user.username}`)">Sua Conta</a>
        <a href="javascript:void(0)" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1" @click.prevent="go('/conta/ajustes')">Configurações</a>
        <a href="javascript:void(0)" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" @click.prevent="logout">Sair</a>
      </div>
      <div
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu" 
        aria-orientation="vertical" 
        aria-labelledby="user-menu-button" 
        tabindex="-1"
        v-else-if="open && !authStore.user"
      >
        <a href="javascript:void(0)" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" @click.prevent="go(`/conta/entrar`)">Entrar</a>
        <a href="javascript:void(0)" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1" @click.prevent="go('/conta/cadastro')">Cadastrar</a>
      </div>
    </div>
  </div>
</template>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>