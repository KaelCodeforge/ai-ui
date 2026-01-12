# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

:::preview 基础用法

demo-preview=../demos/input/basic.vue

:::

## 禁用状态

:::preview 禁用状态

demo-preview=../demos/input/disabled.vue

:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框。

:::preview 一键清空

demo-preview=../demos/input/clearable.vue

:::

## 密码框

使用 `show-password` 属性即可得到一个可切换显示状态的密码框。

:::preview 密码框

demo-preview=../demos/input/password.vue

:::

## 尺寸

可通过 `size` 属性指定输入框的尺寸。除了默认的大小外，还有 `sm`、`md`、`lg` 三种尺寸。

:::preview 尺寸

demo-preview=../demos/input/sizes.vue

:::

## 带图标的输入框

可以通过 `prefix-icon` 和 `suffix-icon` 属性添加图标，也可以通过 `prefix` 和 `suffix` 插槽自定义内容。

:::preview 带图标的输入框

demo-preview=../demos/input/with-icon.vue

:::

## 复合型输入框

可前置或后置内容，通常为标签或按钮。

:::preview 复合型输入框

demo-preview=../demos/input/group.vue

:::

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number | — | — |
| type | 类型 | string | text / password / textarea / number | text |
| size | 尺寸 | string | sm / md / lg | md |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 禁用状态 | boolean | — | false |
| readonly | 是否只读 | boolean | — | false |
| clearable | 是否可清空 | boolean | — | false |
| show-password | 是否显示密码切换图标 | boolean | — | false |
| prefix-icon | 前缀图标 | string / Component | — | — |
| suffix-icon | 后缀图标 | string / Component | — | — |
| autofocus | 原生 autofocus 属性 | boolean | — | false |
| form | 原生 form 属性 | string | — | — |
| autocomplete | 原生 autocomplete 属性 | string | — | off |
| tabindex | 原生 tabindex 属性 | string / number | — | — |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| focus | 在 Input 获得焦点时触发 | (event: FocusEvent) |
| blur | 在 Input 失去焦点时触发 | (event: FocusEvent) |
| clear | 在点击清空按钮时触发 | — |

## Slots

| 插槽名称 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |
