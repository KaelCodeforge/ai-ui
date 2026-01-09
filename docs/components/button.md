# Button 按钮

通用操作按钮，支持多种类型、尺寸 and 形态，适用于中后台界面。

## 基本使用

::: demo 基础用法
```vue
<template>
  <AiButton type="primary">主要按钮</AiButton>
  <AiButton>默认按钮</AiButton>
  <AiButton type="text">文字按钮</AiButton>
</template>
```
:::

## 按钮尺寸

::: demo 按钮尺寸
```vue
<template>
  <AiButton size="sm" type="primary">小型按钮</AiButton>
  <AiButton size="md" type="primary">中型按钮</AiButton>
  <AiButton size="lg" type="primary">大型按钮</AiButton>
</template>
```
:::

## 禁用与加载

::: demo 禁用与加载
```vue
<template>
  <AiButton type="primary" disabled>禁用按钮</AiButton>
  <AiButton type="primary" loading>加载中</AiButton>
</template>
```
:::

## 幽灵/块级/圆形

::: demo 幽灵/块级/圆形
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
    <div style="display: flex; gap: 12px; background: #f5f5f5; padding: 12px; border-radius: 4px;">
      <AiButton ghost type="primary">幽灵按钮</AiButton>
      <AiButton round type="primary">圆角按钮</AiButton>
      <AiButton circle type="primary">圆</AiButton>
    </div>
    <AiButton block type="primary">块级按钮</AiButton>
  </div>
</template>
```
:::

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'default' \| 'success' \| 'warning' \| 'danger' \| 'text'` | `default` |
| size | 按钮尺寸 | `'sm' \| 'md' \| 'lg'` | `md` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| ghost | 幽灵按钮（背景透明） | `boolean` | `false` |
| block | 是否为块级元素 | `boolean` | `false` |
| round | 是否为圆角按钮 | `boolean` | `false` |
| circle | 是否为圆形按钮 | `boolean` | `false` |
| nativeType | 原生 type 属性 | `'button' \| 'submit' \| 'reset'` | `button` |
| icon | 左侧图标 | `string \| Component` | - |
| iconRight | 右侧图标 | `string \| Component` | - |
| href | 链接地址 | `string` | - |
| target | 链接打开方式 | `string` | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | `(event: MouseEvent)` |