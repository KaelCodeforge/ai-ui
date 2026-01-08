# LoadingIcon 加载图标

加载状态的旋转图标。

## 基本使用

<div class="component-preview">
  <AiLoadingIcon />
</div>

```vue
<template>
  <AiLoadingIcon />
</template>
```

## 自定义尺寸

使用 `size` 属性来定义图标尺寸。

<div class="component-preview">
  <AiLoadingIcon size="16px" />
  <AiLoadingIcon size="24px" />
  <AiLoadingIcon size="32px" />
  <AiLoadingIcon :size="48" />
</div>

```vue
<template>
  <AiLoadingIcon size="16px" />
  <AiLoadingIcon size="24px" />
  <AiLoadingIcon size="32px" />
  <AiLoadingIcon :size="48" />
</template>
```

## 自定义颜色

使用 `color` 属性来定义图标颜色。

<div class="component-preview">
  <AiLoadingIcon color="#6366f1" />
  <AiLoadingIcon color="#10b981" />
  <AiLoadingIcon color="#f59e0b" />
  <AiLoadingIcon color="#ef4444" />
</div>

```vue
<template>
  <AiLoadingIcon color="#6366f1" />
  <AiLoadingIcon color="#10b981" />
  <AiLoadingIcon color="#f59e0b" />
  <AiLoadingIcon color="#ef4444" />
</template>
```

## 自定义线条宽度

使用 `strokeWidth` 属性来定义线条宽度。

<div class="component-preview">
  <AiLoadingIcon size="32px" :stroke-width="1" />
  <AiLoadingIcon size="32px" :stroke-width="2" />
  <AiLoadingIcon size="32px" :stroke-width="3" />
  <AiLoadingIcon size="32px" :stroke-width="4" />
</div>

```vue
<template>
  <AiLoadingIcon size="32px" :stroke-width="1" />
  <AiLoadingIcon size="32px" :stroke-width="2" />
  <AiLoadingIcon size="32px" :stroke-width="3" />
  <AiLoadingIcon size="32px" :stroke-width="4" />
</template>
```

## 组合使用

加载图标常用于按钮、卡片等组件的加载状态。

<div class="component-preview">
  <div style="display: flex; align-items: center; gap: 8px;">
    <AiLoadingIcon />
    <span>加载中...</span>
  </div>
</div>

```vue
<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <AiLoadingIcon />
    <span>加载中...</span>
  </div>
</template>
```

## Props

| 属性        | 说明         | 类型               | 默认值          |
| ----------- | ------------ | ------------------ | --------------- |
| size        | 图标大小     | `string \| number` | `'1em'`         |
| color       | 图标颜色     | `string`           | `'currentColor'` |
| strokeWidth | 线条宽度     | `number`           | `2`             |


