<script setup lang="ts">
import { reactive } from 'vue'
import type { Transaction } from '@/types'

const url = import.meta.env.VITE_API_URL as string || 'http://localhost:3030'

const form = reactive<Transaction>({
  type: 'expense',
  date: '2024-12-31',
  accountId: 1,
  userId: 1,
  ammount: 0
})

const emit = defineEmits<{
  update: [transaction: Transaction]
}>()

async function submit() {
  const data = await (await fetch(`${url}/transactions/add`, { method: 'post', body: JSON.stringify(form) })).json()
  if (data.transaction) {
    emit('update', data.transaction)
  }
}
</script>
<template>
  <form @submit.prevent="submit">
    <input v-model="form.ammount" type="number" class="block w-full indent-3 rounded-md border-0 py-1.5 mb-3 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6" />
    <button type="submit" class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Adicionar
    </button>
  </form>
</template>