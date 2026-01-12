<template>
  <div class="demo-inputs">
    <AiInput v-model="v1" placeholder="请输入内容">
      <template #prepend>Http://</template>
    </AiInput>
    <AiInput v-model="v2" placeholder="请输入内容">
      <template #append>.com</template>
    </AiInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const v1 = ref('')
const v2 = ref('')
</script>

<style scoped>
.demo-inputs > * {
  margin-bottom: 12px;
  width: 400px;
}
</style>
