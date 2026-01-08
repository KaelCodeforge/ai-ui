# AI UI

一个基于 Vue 3 + TypeScript 的组件库，面向中后台场景。

## ✨ 特性

- 🚀 **Vue 3 + TypeScript** - 基于 Vue 3 Composition API 和 TypeScript 构建
- 🎨 **可定制主题** - 基于 CSS 变量的主题系统，支持亮色/暗色模式
- 📦 **按需引入** - 支持 Tree Shaking，减小包体积
- 🔧 **AI Coding 友好** - 统一的代码结构、完备的类型定义

## 📦 安装

```bash
# npm
npm install @ai-ui

# pnpm
pnpm add @ai-ui
```

## 🔨 使用

### 完整引入

```ts
import { createApp } from 'vue'
import AiUI from '@ai-ui'
import '@ai-ui/theme/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(AiUI)
app.mount('#app')
```

### 按需引入

```vue
<script setup lang="ts">
// 从主入口引入组件
import { AiButton, AiLoadingIcon } from '@ai-ui'

// 导入工具函数
import { createBem } from '@ai-ui'

// 导入 Hooks
import { useEventListener } from '@ai-ui'
</script>

<template>
  <AiButton type="primary">
    <template #icon>
      <AiLoadingIcon />
    </template>
    按钮
  </AiButton>
</template>
```

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build

# 运行测试
pnpm test

# 启动文档站点
pnpm docs:dev
```

## 📁 项目结构

```
ai-ui/
├── packages/              # 组件库核心代码
│   ├── index.ts          # 主入口文件
│   ├── components/       # 组件源码
│   │   ├── Button/       # 按钮组件
│   │   │   ├── src/
│   │   │   │   ├── AiButton.vue   # 组件实现
│   │   │   │   ├── props.ts       # Props 定义
│   │   │   │   └── style.scss     # 样式
│   │   │   ├── index.ts           # 组件出口
│   │   │   └── __tests__/         # 单元测试
│   │   ├── Icon/         # 图标组件
│   │   ├── index.ts     # 组件库入口
│   │   └── types.ts     # 公共类型
│   ├── hooks/           # 通用 Hooks
│   │   ├── useEventListener.ts
│   │   ├── useClickOutside.ts
│   │   └── index.ts
│   ├── utils/           # 工具函数
│   │   ├── bem.ts       # BEM 命名工具
│   │   ├── dom.ts       # DOM 工具
│   │   ├── props.ts     # Props 工具
│   │   └── index.ts
│   └── theme/           # 主题系统
│       ├── index.scss   # 默认主题（CSS 变量）
│       ├── dark.scss    # 暗色主题
│       └── tokens/      # 设计令牌
│           ├── colors.ts
│           ├── spacing.ts
│           ├── typography.ts
│           └── index.ts
├── playground/          # 开发预览环境
│   ├── App.vue         # 预览页面
│   ├── main.ts         # 预览入口
│   └── vite-env.d.ts  # 类型声明
├── docs/               # VitePress 文档
│   ├── components/    # 组件文档
│   ├── guide/         # 指南文档
│   └── index.md       # 文档首页
├── index.html          # 开发预览 HTML
├── vite.config.ts      # Vite 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 项目配置
```

## 📄 License

[MIT](./LICENSE)