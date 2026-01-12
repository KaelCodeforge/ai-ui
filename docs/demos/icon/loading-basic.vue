<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div style="display: flex; align-items: center; gap: 16px">
      <Loading />
      <span>默认大小</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px">
      <Loading style="width: 24px; height: 24px" />
      <span>24px</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px">
      <Loading style="width: 32px; height: 32px; color: #ff4d4f" />
      <span>32px 红色</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px">
      <Loading style="width: 40px; height: 40px; color: #22c55e" />
      <span>40px 绿色</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loading } from '@axin666/ai-ui-icons'
</script>

<style scoped>
:deep(svg) {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
