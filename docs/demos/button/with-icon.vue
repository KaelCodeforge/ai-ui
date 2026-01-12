<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 12px">
      <AiButton type="primary" :icon="Edit"> 编辑 </AiButton>
      <AiButton type="danger" :icon="Delete"> 删除 </AiButton>
    </div>
    <div style="display: flex; align-items: center; gap: 12px">
      <AiButton type="primary" plain :icon="Edit"> 编辑 </AiButton>
      <AiButton type="text" :icon="Delete"> 删除 </AiButton>
    </div>
    <div style="display: flex; align-items: center; gap: 12px">
      <AiButton type="primary" :loading="loading" @click="handleClick"> 加载中 </AiButton>
      <AiButton type="success" :icon="Edit" :loading="loading2" @click="handleClick2">
        保存
      </AiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit, Delete } from '@axin666/ai-ui-icons'

const loading = ref(false)
const loading2 = ref(false)

function handleClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

function handleClick2() {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}
</script>
