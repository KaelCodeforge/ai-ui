# Icon 图标

AI UI 提供了独立的图标包 `@axin666/ai-ui-icons`，包含常用的 SVG 图标组件。

## 安装

```bash
# npm
npm install @axin666/ai-ui-icons

# pnpm
pnpm add @axin666/ai-ui-icons

# yarn
yarn add @axin666/ai-ui-icons
```

## 基本使用

### 按需引入

按需引入单个图标组件：

```vue
<script setup lang="ts">
import { Loading, Edit, Delete } from '@axin666/ai-ui-icons'
</script>

<template>
  <div>
    <Loading />
    <Edit />
    <Delete />
  </div>
</template>
```

::: preview 基础用法

demo-preview=../demos/icon/basic.vue

:::

### 全局注册

如果需要全局注册所有图标组件：

```ts
import { createApp } from 'vue'
import { install as installIcons } from '@axin666/ai-ui-icons'
import App from './App.vue'

const app = createApp(App)
app.use(installIcons)
app.mount('#app')
```

注册后，可以在模板中直接使用：

```vue
<template>
  <AiIconLoading />
  <AiIconEdit />
  <AiIconDelete />
</template>
```

## 图标列表

当前可用的图标组件：

<div class="icon-list-only">

::: preview 图标列表

demo-preview=../demos/icon/grid.vue

:::

</div>

## 加载图标

加载图标支持旋转动画，常用于表示加载状态。可以通过 CSS 控制大小和颜色：

::: preview LoadingIcon 基础用法

demo-preview=../demos/icon/loading-basic.vue

:::

## 开发指南

### 添加新图标

要添加新的图标：

1. 将 SVG 文件放入 `packages/icons/svg/` 目录
2. 运行 `pnpm build` 重新生成组件
3. 新图标会自动出现在 `src/` 目录和 `index.ts` 中

### 图标规范

- SVG 文件应使用标准的 SVG 格式
- 建议使用 `currentColor` 作为填充色，以便通过 CSS 控制颜色
- 图标默认大小为 `1em`，可通过 CSS 覆盖
