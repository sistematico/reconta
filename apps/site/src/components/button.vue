<script setup lang="ts">
import Icon from '@/components/icon.vue'

interface Props {
  text?: string
  icon?: string
  iconSize?: string
  iconClass?: string
}

const { text = 'Button', icon = 'sharp-person-add-alt-1', iconSize = '24', iconClass = 'h-4 w-4' } = defineProps<Props>()
</script>
<template>
  <button class="flex items-center p-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-700 mx-1">
    <div class="mx-1">
      <icon name="sharp-person-add-alt-1" :size="iconSize" :iconClass />
    </div>
    <span class="mx-2">{{ text }}</span>
  </button>
</template>