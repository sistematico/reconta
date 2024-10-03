<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Table from '@/components/transactions/table.vue'
import Form from '@/components/transactions/form.vue'
import type { Transaction } from '@/types'

const url = import.meta.env.VITE_API_URL as string || 'http://localhost:3030'
const transactions = ref<Transaction[]>([])
const keys = ref<string[]>([])

function addTransaction(transaction: Transaction) {
  transactions.value.push(transaction)
  keys.value = transactions.value && transactions.value.length > 0 ? Object.keys(transactions.value[0]) : []
}

onMounted(async () => {
  const data = await (await fetch(`${url}/transactions/list`, { method: 'post', body: JSON.stringify({ userId: 1 }) })).json()
  
  if (data.transactions) {
    transactions.value = data.transactions
    keys.value = transactions.value && transactions.value.length > 0 ? Object.keys(transactions.value[0]) : []
  }
})
</script>
<template>
  <div class="flex items-center justify-center h-full">
    <Table :transactions :keys />
    <Form @update="addTransaction" />

    <!-- <div class="p-10">
      <img 
        class="rounded-lg max-w-screen md:max-w-screen-md" 
        src="/images/porco.jpg" 
        alt="ReConta" 
      />
    </div> -->
  </div>
</template>