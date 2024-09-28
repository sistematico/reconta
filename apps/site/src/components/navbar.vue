<script setup lang="ts">
import Button from '@/components/button.vue'
</script>
<template>
  <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
    <li class="mr-3">
      <a class="inline-block py-2 px-4 text-white no-underline" href="#">Início</a>
    </li>
    <li class="mr-3">
      <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
        href="#">link</a>
    </li>
    <li class="mr-3">
      <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">
        <Button />
      </a>
    </li>
  </ul>
</template>