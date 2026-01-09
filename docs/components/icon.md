# LoadingIcon 加载图标

加载状态的旋转图标。

## 基本使用

::: demo 基础用法。
```vue
<template>
  <AiLoadingIcon />
</template>
```
:::

## 自定义尺寸

::: demo 使用 `size` 属性来定义图标尺寸。
```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <AiLoadingIcon size="16px" />
    <AiLoadingIcon size="24px" />
    <AiLoadingIcon size="32px" />
    <AiLoadingIcon :size="48" />
  </div>
</template>
```
:::

## 自定义颜色

::: demo 使用 `color` 属性来定义图标颜色。
```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <AiLoadingIcon color="#ff4d4f" />
    <AiLoadingIcon color="#22c55e" />
    <AiLoadingIcon color="#eab308" />
    <AiLoadingIcon color="#3b82f6" />
  </div>
</template>
```
:::

## 自定义线条宽度

::: demo 使用 `strokeWidth` 属性来定义线条宽度。
```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <AiLoadingIcon size="32px" :stroke-width="1" />
    <AiLoadingIcon size="32px" :stroke-width="2" />
    <AiLoadingIcon size="32px" :stroke-width="3" />
    <AiLoadingIcon size="32px" :stroke-width="4" />
  </div>
</template>
```
:::

## 组合使用

::: demo 加载图标常用于按钮、卡片等组件的加载状态。
```vue
<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <AiLoadingIcon />
    <span>加载中...</span>
  </div>
</template>
```
:::

## Props

| 属性        | 说明         | 类型               | 默认值          |
| ----------- | ------------ | ------------------ | --------------- |
| size        | 图标大小     | `string \| number` | `'1em'`         |
| color       | 图标颜色     | `string`           | `'currentColor'` |
| strokeWidth | 线条宽度     | `number`           | `2`             |