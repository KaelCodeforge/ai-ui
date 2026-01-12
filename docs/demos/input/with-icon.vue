<template>
  <div class="demo-inputs">
    <AiInput v-model="v1" placeholder="前缀图标" prefix-icon="🔍" />
    <AiInput v-model="v2" placeholder="后缀图标" suffix-icon="📅" />
    <AiInput v-model="v3" placeholder="使用插槽">
      <template #prefix>
        <span>🔍</span>
      </template>
    </AiInput>
    <AiInput v-model="v4" placeholder="使用插槽">
      <template #suffix>
        <span>📅</span>
      </template>
    </AiInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const v1 = ref('')
const v2 = ref('')
const v3 = ref('')
const v4 = ref('')
</script>

<style scoped>
.demo-inputs > * {
  margin-bottom: 12px;
  width: 300px;
}
</style>
