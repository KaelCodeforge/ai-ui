<template>
  <div class="demo-input">
    <AiInput v-model="value1" placeholder="请输入内容" />
    <p style="margin-top: 12px; color: var(--ai-color-text-secondary)">输入值: {{ value1 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const value1 = ref('')
</script>

<style scoped>
.demo-input {
  width: 300px;
}
</style>
