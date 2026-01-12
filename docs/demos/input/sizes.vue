<template>
  <div class="demo-inputs">
    <AiInput v-model="v1" size="lg" placeholder="Large" />
    <AiInput v-model="v2" placeholder="Default" />
    <AiInput v-model="v3" size="sm" placeholder="Small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const v1 = ref('')
const v2 = ref('')
const v3 = ref('')
</script>

<style scoped>
.demo-inputs > * {
  margin-bottom: 12px;
  width: 300px;
}
</style>
