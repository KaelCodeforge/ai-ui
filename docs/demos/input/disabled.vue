<template>
  <AiInput v-model="value" disabled placeholder="禁用状态" style="width: 300px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const value = ref('已禁用')
</script>
