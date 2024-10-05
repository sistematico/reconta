<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME as string || 'ReConta'
</script>
<template>
  <footer class="sticky bottom-0 w-full">
    <div class="container mx-auto">
      <!-- <div class="flex flex-wrap items-center justify-center p-2"> -->
        &copy; {{ new Date().getFullYear() }} {{ appName }}. Todos os direitos reservados.
      <!-- </div> -->
    </div>
  </footer>
</template>