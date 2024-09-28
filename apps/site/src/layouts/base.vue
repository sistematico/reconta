<script setup lang="ts">
import Navbar from '@/components/navbar.vue'

const appName = import.meta.env.VITE_APP_NAME as string
</script>
<template>
  <div class="flex flex-col h-screen">
    <nav class="p-2 mt-0 w-full z-10 fixed top-0">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
          <a class="flex items-center no-underline hover:text-white" href="#">
            <img class="h-8 w-auto mr-2" src="/images/logo.svg" :alt="appName">
            <span class="text-2xl">{{ appName }}</span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <navbar />
        </div>
      </div>
    </nav>

    <main class="container mx-auto mt-24 md:mt-16 h-full">
      <slot />
    </main>
    
    <footer class="container mx-auto mt-auto">
      <div class="flex flex-wrap items-center justify-center p-2">
        &copy; 2024 ReConta
      </div>
    </footer>
  </div>
</template>