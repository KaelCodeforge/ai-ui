# Button 按钮

通用操作按钮，支持多种类型、尺寸 and 形态，适用于中后台界面。

## 基本使用

:::preview 基础用法演示

demo-preview=../demos/button/basic.vue

:::

## 按钮尺寸

:::preview 按钮尺寸

demo-preview=../demos/button/sizes.vue

:::

## 禁用与加载

:::preview 禁用与加载

demo-preview=../demos/button/disabled-loading.vue

:::

## 按钮形态

按钮支持多种形态：朴素按钮（描边风格）、圆角按钮、圆形按钮（常用于图标按钮）和链接按钮。

:::preview 按钮形态

demo-preview=../demos/button/ghost-block-circle.vue

:::

## 图标按钮

按钮支持通过 `icon` 属性添加图标，也可以配合 `@axin666/ai-ui-icons` 图标包使用：

:::preview 图标按钮

demo-preview=../demos/button/with-icon.vue

:::

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | `''` |
| size | 按钮尺寸 | `'' \| 'default' \| 'small' \| 'large'` | `''` |
| nativeType | 原生 type 属性 | `'button' \| 'submit' \| 'reset'` | `button` |
| plain | 朴素按钮（描边/幽灵风格） | `boolean` | `false` |
| round | 是否圆角 | `boolean` | `false` |
| circle | 是否圆形（常用于图标按钮） | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| loadingIcon | 自定义加载图标 | `string \| Component` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标 | `string \| Component` | - |
| autofocus | 自动聚焦 | `boolean` | `false` |
| link | 是否为链接/文字按钮 | `boolean` | `false` |
| color | 自定义颜色 | `string` | - |
| dark | 是否为深色模式 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | `(event: MouseEvent)` |

