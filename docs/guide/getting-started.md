# 快速开始

本节将介绍如何在项目中使用 AI UI。

## 安装

使用 npm 或 pnpm 安装：

```bash
# npm
npm install @axin666/ai-ui

# pnpm
pnpm add @axin666/ai-ui
```

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import AiUI from '@axin666/ai-ui'
import '@axin666/ai-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(AiUI)
app.mount('#app')
```

## 按需引入

如果你只需要使用部分组件，可以按需引入：

```vue
<script setup lang="ts">
import { AiButton } from '@axin666/ai-ui'
import '@axin666/ai-ui/dist/style.css'
</script>

<template>
  <AiButton type="primary">按钮</AiButton>
</template>
```

## TypeScript 支持

AI UI 使用 TypeScript 编写，提供完整的类型定义。

如果你使用 Volar，可以获得更好的类型提示体验。

## 主题定制

AI UI 使用 CSS 变量来管理主题，你可以通过覆盖变量来定制主题：

```css
:root {
  --ai-color-primary: #ff4d4f;
  --ai-color-primary-hover: #ff7875;
  --ai-color-primary-active: #d9363e;
}
```

### 暗色模式（可选）

如果你需要暗色模式，可以通过覆盖同名 CSS 变量实现（或在仓库中参考 `packages/theme/dark.scss` 的写法）。

例如给根元素添加 `.ai-dark` 并覆盖变量：

```ts
document.documentElement.classList.add('ai-dark')
```