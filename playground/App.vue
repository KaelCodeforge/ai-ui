<script setup lang="ts">
/**
 * 开发预览页面
 */
import { ref } from 'vue'

const loading = ref(false)

function handleClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>AI UI 组件库</h1>
      <p>Vue 3 + TypeScript 组件库开发预览</p>
    </header>

    <main class="main">
      <section class="section">
        <h2>Button 按钮</h2>

        <div class="demo-group">
          <h3>按钮类型</h3>
          <div class="demo-row">
            <AiButton>默认按钮</AiButton>
            <AiButton type="primary">主要按钮</AiButton>
            <AiButton type="success">成功按钮</AiButton>
            <AiButton type="warning">警告按钮</AiButton>
            <AiButton type="danger">危险按钮</AiButton>
          </div>
        </div>

        <div class="demo-group">
          <h3>按钮尺寸</h3>
          <div class="demo-row">
            <AiButton type="primary" size="sm">小型按钮</AiButton>
            <AiButton type="primary" size="md">中型按钮</AiButton>
            <AiButton type="primary" size="lg">大型按钮</AiButton>
          </div>
        </div>

        <div class="demo-group">
          <h3>幽灵按钮</h3>
          <div class="demo-row ghost-demo">
            <AiButton ghost>默认幽灵</AiButton>
            <AiButton type="primary" ghost>主要幽灵</AiButton>
            <AiButton type="success" ghost>成功幽灵</AiButton>
            <AiButton type="warning" ghost>警告幽灵</AiButton>
            <AiButton type="danger" ghost>危险幽灵</AiButton>
          </div>
        </div>

        <div class="demo-group">
          <h3>禁用状态</h3>
          <div class="demo-row">
            <AiButton disabled>禁用按钮</AiButton>
            <AiButton type="primary" disabled>禁用主要</AiButton>
            <AiButton type="danger" disabled>禁用危险</AiButton>
          </div>
        </div>

        <div class="demo-group">
          <h3>加载状态</h3>
          <div class="demo-row">
            <AiButton :loading="loading" @click="handleClick">
              {{ loading ? '加载中...' : '点击加载' }}
            </AiButton>
            <AiButton type="primary" loading>加载中</AiButton>
          </div>
        </div>

        <div class="demo-group">
          <h3>圆角按钮</h3>
          <div class="demo-row">
            <AiButton type="primary" round>圆角按钮</AiButton>
            <AiButton type="success" round>圆角按钮</AiButton>
            <AiButton type="danger" round>圆角按钮</AiButton>
          </div>
        </div>

        <div class="demo-group">
          <h3>块级按钮</h3>
          <div class="demo-column">
            <AiButton type="primary" block>块级主要按钮</AiButton>
            <AiButton block>块级默认按钮</AiButton>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--ai-font-family);
  background-color: var(--ai-bg-page);
  color: var(--ai-text-primary);
  line-height: var(--ai-line-height-normal);
}

.app {
  min-height: 100vh;
  padding: var(--ai-spacing-3xl);
}

.header {
  text-align: center;
  margin-bottom: var(--ai-spacing-4xl);

  h1 {
    font-size: var(--ai-font-size-4xl);
    font-weight: var(--ai-font-weight-bold);
    color: var(--ai-color-primary);
    margin-bottom: var(--ai-spacing-sm);
  }

  p {
    font-size: var(--ai-font-size-lg);
    color: var(--ai-text-secondary);
  }
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  background-color: var(--ai-bg-container);
  border-radius: var(--ai-radius-lg);
  padding: var(--ai-spacing-3xl);
  box-shadow: var(--ai-shadow-base);

  h2 {
    font-size: var(--ai-font-size-2xl);
    font-weight: var(--ai-font-weight-semibold);
    margin-bottom: var(--ai-spacing-2xl);
    padding-bottom: var(--ai-spacing-md);
    border-bottom: 1px solid var(--ai-border-color);
  }
}

.demo-group {
  margin-bottom: var(--ai-spacing-2xl);

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: var(--ai-font-size-base);
    font-weight: var(--ai-font-weight-medium);
    color: var(--ai-text-secondary);
    margin-bottom: var(--ai-spacing-md);
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ai-spacing-md);
  align-items: center;

  &.ghost-demo {
    background-color: var(--ai-color-gray-100);
    padding: var(--ai-spacing-lg);
    border-radius: var(--ai-radius-md);
  }
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--ai-spacing-md);
  max-width: 300px;
}
</style>
