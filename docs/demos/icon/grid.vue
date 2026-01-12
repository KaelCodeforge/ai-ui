<template>
  <div class="icon-grid">
    <div
      v-for="icon in icons"
      :key="icon.name"
      class="icon-item"
      @click="handleIconClick(icon.name)"
    >
      <div class="icon-wrapper">
        <component :is="icon.component" />
      </div>
      <div class="icon-label">{{ icon.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loading, Edit, Delete } from '@axin666/ai-ui-icons'

const icons = [
  { name: 'Loading', label: 'Loading', component: Loading },
  { name: 'Edit', label: 'Edit', component: Edit },
  { name: 'Delete', label: 'Delete', component: Delete },
]

function handleIconClick(name: string) {
  console.log('Icon clicked:', name)
}
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1px;
  padding: 0;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 8px;
  background: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.icon-item:hover {
  background: #fafafa;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  color: #333;
}

.icon-wrapper :deep(svg) {
  width: 24px;
  height: 24px;
}

.icon-label {
  font-size: 12px;
  color: #666;
  text-align: center;
  line-height: 1.4;
}
</style>
