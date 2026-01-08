<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  description?: string
  code?: string
}>()

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="demo-container">
    <div class="demo-preview">
      <slot name="preview" />
    </div>
    
    <div v-if="title || description" class="demo-info">
      <div v-if="title" class="demo-title">{{ title }}</div>
      <div v-if="description" class="demo-description">{{ description }}</div>
    </div>

    <div class="demo-actions">
      <button class="demo-action-btn" @click="toggleExpand">
        {{ isExpanded ? '收起代码' : '查看代码' }}
      </button>
    </div>

    <div v-show="isExpanded" class="demo-code">
      <slot name="code" />
    </div>
  </div>
</template>

<style lang="scss">
.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
  background-color: var(--vp-c-bg);

  .demo-preview {
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .demo-info {
    padding: 12px 24px;
    border-top: 1px solid var(--vp-c-divider);
    background-color: var(--vp-c-bg-soft);

    .demo-title {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 4px;
    }

    .demo-description {
      font-size: 13px;
      color: var(--vp-c-text-2);
    }
  }

  .demo-actions {
    padding: 8px 24px;
    border-top: 1px solid var(--vp-c-divider);
    display: flex;
    justify-content: flex-end;
    background-color: var(--vp-c-bg);

    .demo-action-btn {
      font-size: 12px;
      color: var(--vp-c-brand);
      cursor: pointer;
      background: none;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--vp-c-brand-soft);
      }
    }
  }

  .demo-code {
    border-top: 1px solid var(--vp-c-divider);
    
    div[class*='language-'] {
      margin: 0 !important;
      border-radius: 0 !important;
    }
  }
}
</style>