<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%">
    <div>
      <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #666">朴素按钮</h4>
      <div style="display: flex; gap: 12px; align-items: center">
        <AiButton plain type="primary">主要按钮</AiButton>
        <AiButton plain type="success">成功按钮</AiButton>
        <AiButton plain type="warning">警告按钮</AiButton>
        <AiButton plain type="danger">危险按钮</AiButton>
      </div>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #666">圆角按钮</h4>
      <div style="display: flex; gap: 12px; align-items: center">
        <AiButton round type="primary">圆角按钮</AiButton>
        <AiButton round type="success">圆角按钮</AiButton>
        <AiButton round type="warning">圆角按钮</AiButton>
      </div>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #666">圆形按钮（图标按钮）</h4>
      <div style="display: flex; gap: 12px; align-items: center">
        <AiButton circle type="primary" :icon="Edit" />
        <AiButton circle type="success" :icon="Edit" />
        <AiButton circle type="danger" :icon="Delete" />
        <AiButton circle type="warning" :icon="Loading" />
      </div>
    </div>
    <div>
      <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #666">链接按钮</h4>
      <div style="display: flex; gap: 12px; align-items: center">
        <AiButton link type="primary">链接按钮</AiButton>
        <AiButton link type="success">链接按钮</AiButton>
        <AiButton link type="danger">链接按钮</AiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit, Delete, Loading } from '@axin666/ai-ui-icons'
</script>
