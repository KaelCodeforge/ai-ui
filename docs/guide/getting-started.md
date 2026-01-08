# 快速开始

本节将介绍如何在项目中使用 AI UI。

## 安装

使用 npm 或 pnpm 安装：

```bash
# npm
npm install @ai-ui/components

# pnpm
pnpm add @ai-ui/components
```

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import AiUI from '@ai-ui/components'
import '@ai-ui/components/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(AiUI)
app.mount('#app')
```

## 按需引入

如果你只需要使用部分组件，可以按需引入：

```vue
<script setup lang="ts">
import { AiButton } from '@ai-ui/components'
import '@ai-ui/components/style.css'
</script>

<template>
  <AiButton type="primary">按钮</AiButton>
</template>
```

## TypeScript 支持

AI UI 使用 TypeScript 编写，提供完整的类型定义。

如果你使用 Volar，可以获得更好的类型提示体验。

### 全局组件类型声明

在 `tsconfig.json` 中添加：

```json
{
  "compilerOptions": {
    "types": ["@ai-ui/components/global"]
  }
}
```

## 主题定制

AI UI 使用 CSS 变量来管理主题，你可以通过覆盖变量来定制主题：

```css
:root {
  --ai-color-primary: #your-brand-color;
  --ai-color-primary-light: #your-light-color;
  --ai-color-primary-dark: #your-dark-color;
}
```

### 暗色模式

添加 `.ai-dark` 类到根元素即可启用暗色模式：

```ts
document.documentElement.classList.add('ai-dark')
```

