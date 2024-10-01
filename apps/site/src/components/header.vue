<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const appName = import.meta.env.VITE_APP_NAME as string
</script>
<template>
  <header class="w-full z-10 fixed top-0 bg-[#242120] border-b-4 border-b-[#1F1E1C]">
    <div class="container mx-auto py-3 px-4 md:px-0">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div class="flex items-center px-2">
            <router-link to="/" class="flex items-center -mt-1">
              <img class="h-8 w-auto mr-2" src="/images/logo.svg" :alt="appName">
              <span class="text-2xl font-bold mt-1">{{ appName }}</span>
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-3">
            <router-link to="/">Início</router-link>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-1">
          <router-link to="/conta/entrar" class="py-2 px-3">Entrar</router-link>
          <router-link to="/conta/cadastro" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Cadastro</router-link>
        </div>
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button" @click="open = !open">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="mobile-menu md:hidden px-3 py-3" :class="{ 'hidden': !open }">
      <router-link to="/" class="block px-3 py-4">Início</router-link>
      <router-link class="block px-3 py-4 text-sm hover:bg-gray-200" to="/conta/entrar">Entrar</router-link>
      <router-link class="block px-3 py-4 text-sm bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" to="/conta/cadastro">Cadastro</router-link>
    </div>
  </header>
</template>