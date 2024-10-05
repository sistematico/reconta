<script setup lang="ts">
import type { Transaction } from '@/types'

// const url = 'http://localhost:3030/transactions'

// interface Props {
//   transactions?: Transaction[]
// }

// const form = reactive<Transaction>({
//   type: 'expense',
//   date: '2024-12-31',
//   accountId: 1,
//   userId: 1,
//   ammount: 0
// })

defineProps<{
  keys: string[],
  transactions?: Transaction[]
}>()

// async function submit() {
//   const data = await (await fetch(`${url}/add`, { method: 'post', body: JSON.stringify(form) })).json()
//   props.transactions.push(data.transactions)
// }

// const { transactions = [] } = defineProps<Props>()
// const keys = props.transactions && props.transactions.length > 0 && Object.keys(props.transactions[0]) || []
</script>
<template>
  <div class="flex items-center justify-center mb-5">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-[#242120] shadow-md rounded-xl">
        <thead>
          <tr class="text-bold">
            <th class="py-3 px-4 text-left" v-for="item in keys">{{ item }}</th>
          </tr>
        </thead>
        <tbody class="text-blue-gray-900">
          <tr class="border-t border-gray-200" v-for="transaction in transactions">
            <td class="py-3 px-4" v-for="value in transaction">{{ value }}</td>
            <!-- <td class="py-3 px-4">$50.25</td>
            <td class="py-3 px-4">100</td>
            <td class="py-3 px-4">$5025.00</td>
            <td class="py-3 px-4">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a>
            </td> -->
          </tr>
        </tbody>
      </table>

      <!-- <form @submit.prevent="submit">
        <input v-model="form.ammount" type="number" class="block w-full indent-3 rounded-md border-0 py-1.5 mb-3 shadow-sm outline-none bg-[#393230] ring-4 ring-inset ring-yellow-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-300 sm:text-sm sm:leading-6" />
        <button type="submit" class="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Adicionar
        </button>
      </form> -->
    </div>
  </div>
</template>
<style scoped>
tr th::first-letter {
  text-transform: capitalize;
}
</style>