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
  <div class="flex w-1/2">
    <form @submit.prevent="submit">
      <!-- <input v-model="form.ammount" type="number" class="indent-3 rounded-md border-0 py-1.5 mb-3 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6" /> -->

      <div class="max-w-[720px] mx-auto">
        <!-- Centering wrapper -->
        <div class="w-[250px] max-w-sm relative mt-4">
          <label class="block mb-1 text-sm ">
            Select Amount
          </label>
          <div class="relative">
            <button
              class="absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center bg-[#393230] rounded hover:bg-slate-700"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF"
                class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
              </svg>
            </button>
            <input type="number"
              class="w-full pl-3 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="5" value="5" />
            <button
              class="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF"
                class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
            <!-- <p class="flex items-center mt-2 text-xs text-slate-500">
                    Adjust the number using the + and - controls.
                </p>     -->
          </div>
        </div>
      </div>
      <button type="submit"
        class="rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Adicionar
      </button>
    </form>
  </div>
</template>