# Button 按钮

通用操作按钮，支持多种类型、尺寸和形态，适用于中后台界面。

> **注意**：本组件默认采用**白色背景 + 番茄红主色**主题（通过 CSS 变量可覆盖为暗色主题）。

## 基本使用

<DemoContainer title="基础用法" description="按钮的基础用法，支持 primary, default, text 等类型。">
  <template #preview>
    <AiButton type="primary">主要按钮</AiButton>
    <AiButton>默认按钮</AiButton>
    <AiButton type="text">文字按钮</AiButton>
  </template>
  <template #code>

```vue
<template>
  <AiButton type="primary">主要按钮</AiButton>
  <AiButton>默认按钮</AiButton>
  <AiButton type="text">文字按钮</AiButton>
</template>
```

  </template>
</DemoContainer>

## 按钮尺寸

<DemoContainer title="按钮尺寸" description="支持 sm, md, lg 三种尺寸。">
  <template #preview>
    <AiButton size="sm" type="primary">小型按钮</AiButton>
    <AiButton size="md" type="primary">中型按钮</AiButton>
    <AiButton size="lg" type="primary">大型按钮</AiButton>
  </template>
  <template #code>

```vue
<template>
  <AiButton size="sm" type="primary">小型按钮</AiButton>
  <AiButton size="md" type="primary">中型按钮</AiButton>
  <AiButton size="lg" type="primary">大型按钮</AiButton>
</template>
```

  </template>
</DemoContainer>

## 禁用与加载

<DemoContainer title="禁用与加载" description="禁用状态和加载状态都会阻止点击事件。">
  <template #preview>
    <AiButton type="primary" disabled>禁用按钮</AiButton>
    <AiButton type="primary" loading>加载中</AiButton>
  </template>
  <template #code>

```vue
<template>
  <AiButton type="primary" disabled>禁用按钮</AiButton>
  <AiButton type="primary" loading>加载中</AiButton>
</template>
```

  </template>
</DemoContainer>

## 幽灵/块级/圆形

<DemoContainer title="更多形态" description="支持幽灵按钮、块级按钮、圆角和圆形按钮。">
  <template #preview>
    <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
      <div style="display: flex; gap: 12px; background: var(--ai-color-fill-default, #f9fafb); padding: 12px; border-radius: 4px;">
        <AiButton ghost type="primary">幽灵按钮</AiButton>
        <AiButton round type="primary">圆角按钮</AiButton>
        <AiButton circle type="primary">圆</AiButton>
      </div>
      <AiButton block type="primary">块级按钮</AiButton>
    </div>
  </template>
  <template #code>

```vue
<template>
  <AiButton ghost type="primary">幽灵按钮</AiButton>
  <AiButton round type="primary">圆角按钮</AiButton>
  <AiButton circle type="primary">圆</AiButton>
  <AiButton block type="primary">块级按钮</AiButton>
</template>
```

  </template>
</DemoContainer>

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