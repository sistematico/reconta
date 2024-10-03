<script setup lang="ts">
import { ref } from 'vue'
import UserNav from '@/components/usernav.vue'

const open = ref(false)
const appName = import.meta.env.VITE_APP_NAME as string || 'ReConta'
</script>
<template>
  <!-- <header class="w-full z-10 fixed top-0 bg-[#242120] border-b-4 border-b-[#1F1E1C]">
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
  </header> -->

  <nav class="w-full z-10 sticky top-0 bg-[#242120] border-b-4 border-b-[#1F1E1C]">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button 
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-white outline-none ring-0"
            aria-controls="mobile-menu" 
            aria-expanded="false"
            @click="open = !open"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6" 
              :class="{ 'block': open, 'hidden': !open }" 
              fill="none" 
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg 
              class="h-6 w-6" 
              :class="{ 'block': !open, 'hidden': open }" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <router-link to="/" class="flex flex-shrink-0 items-center -mt-1">
            <img class="h-8 w-auto mr-1 md:mr-2" src="/images/logo.svg" :alt="appName">
            <span class="text-xl md:text-2xl font-bold mt-1">{{ appName }}</span>
          </router-link>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white" :class="{ 'bg-[#413937]': $route.fullPath === '/conta/entrar' }" aria-current="page">Dashboard</a>
              <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#413937] hover:text-white">Team</a>
              <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#413937] hover:text-white">Projects</a>
              <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#413937] hover:text-white">Calendar</a>
            </div>
          </div>
        </div>
        <user-nav />
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" :class="{ 'block': !open, 'hidden': open }" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page">Dashboard</a>
        <a href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
        <a href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
        <a href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
      </div>
    </div>
  </nav>

</template>