# @axin666/ai-ui-icons

SVG 图标组件库，用于 @axin666/ai-ui。

## 安装依赖

在根目录运行：

```bash
pnpm install
```

## 构建图标组件

在 `packages/icons` 目录下运行：

```bash
pnpm build
```

这会将 `svg/` 目录下的所有 SVG 文件转换为 Vue 3 组件，输出到 `src/` 目录。

## 使用

生成的组件可以通过以下方式使用：

```ts
import { AiIconLoading, AiIconEdit, AiIconDelete } from '@axin666/ai-ui-icons'
```

## 添加新图标

1. 将 SVG 文件放入 `svg/` 目录
2. 运行 `pnpm build` 重新生成组件

