# 设计规范

AI UI 使用设计令牌（Design Tokens）来管理设计系统的基础变量。

## 颜色

### 品牌色

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-color-primary` | #ff4d4f | 主色（番茄红） |
| `--ai-color-primary-hover` | #ff7875 | 主色 hover |
| `--ai-color-primary-active` | #d9363e | 主色 active |
| `--ai-color-primary-bg` | rgba(255, 77, 79, 0.12) | 主色浅背景 |

### 功能色

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-color-success` | #22c55e | 成功 |
| `--ai-color-warning` | #eab308 | 警告 |
| `--ai-color-danger` | #ff4d4f | 危险 |
| `--ai-color-error` | #ff4d4f | 错误 |
| `--ai-color-info` | #ff4d4f | 信息 |

### 背景 / 填充色（语义化）

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-color-bg-base` | #ffffff | 页面整体背景 |
| `--ai-color-bg-elevated` | #ffffff | 卡片/弹窗背景 |
| `--ai-color-fill-default` | #f9fafb | 默认填充（默认按钮/输入等） |
| `--ai-color-fill-hover` | #f3f4f6 | hover 填充 |
| `--ai-color-fill-active` | #e5e7eb | active 填充 |

### 文本色（语义化）

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-color-text-primary` | #111827 | 主文本 |
| `--ai-color-text-secondary` | #6b7280 | 次文本 |
| `--ai-color-text-disabled` | #9ca3af | 禁用文本 |

### 中性色

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-color-gray-50` | #f9fafb | 最浅 |
| `--ai-color-gray-100` | #f3f4f6 | - |
| `--ai-color-gray-200` | #e5e7eb | - |
| `--ai-color-gray-300` | #d1d5db | - |
| `--ai-color-gray-400` | #9ca3af | - |
| `--ai-color-gray-500` | #6b7280 | 中间 |
| `--ai-color-gray-600` | #4b5563 | - |
| `--ai-color-gray-700` | #374151 | - |
| `--ai-color-gray-800` | #1f2937 | - |
| `--ai-color-gray-900` | #111827 | 最深 |

### 边框色（语义化）

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-color-border` | #e5e7eb | 默认边框 |
| `--ai-color-border-strong` | #d1d5db | 强边框 |

## 间距

基于 4px 网格系统：

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-spacing-xs` | 4px | 超小 |
| `--ai-spacing-sm` | 8px | 小 |
| `--ai-spacing-md` | 12px | 中 |
| `--ai-spacing-lg` | 16px | 大 |
| `--ai-spacing-xl` | 20px | 超大 |
| `--ai-spacing-2xl` | 24px | 2倍超大 |

## 圆角

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-radius-sm` | 4px | 小 |
| `--ai-radius-md` | 6px | 中 |
| `--ai-radius-lg` | 8px | 大 |
| `--ai-radius-xl` | 12px | 超大 |
| `--ai-radius-full` | 9999px | 圆形 |

## 阴影

| 变量 | 说明 |
|------|------|
| `--ai-shadow-sm` | 小阴影 |
| `--ai-shadow-base` | 基础阴影 |
| `--ai-shadow-md` | 中等阴影 |
| `--ai-shadow-lg` | 大阴影 |
| `--ai-shadow-xl` | 超大阴影 |

## 排版

### 字体大小

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-font-size-xs` | 12px | 超小 |
| `--ai-font-size-sm` | 14px | 小 |
| `--ai-font-size-base` | 16px | 基础 |
| `--ai-font-size-lg` | 18px | 大 |
| `--ai-font-size-xl` | 20px | 超大 |

### 字重

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-font-weight-normal` | 400 | 常规 |
| `--ai-font-weight-medium` | 500 | 中等 |
| `--ai-font-weight-semibold` | 600 | 半粗 |
| `--ai-font-weight-bold` | 700 | 粗体 |

## 过渡动画

| 变量 | 值 | 说明 |
|------|------|------|
| `--ai-transition-fast` | 150ms ease | 快速 |
| `--ai-transition-base` | 200ms ease | 默认 |
| `--ai-transition-slow` | 300ms ease | 慢速 |

