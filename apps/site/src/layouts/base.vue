<script setup lang="ts">
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>
<template>
  <div class="flex flex-col h-full">
    <Header />
    <main class="container mx-auto h-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>