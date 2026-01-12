<template>
  <AiInput v-model="value" clearable placeholder="请输入内容" style="width: 300px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const value = ref('Hello AiUI')
</script>
