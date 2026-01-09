# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

:::demo
```vue
<template>
  <div class="demo-input">
    <AiInput v-model="value1" placeholder="请输入内容" />
    <p>输入值: {{ value1 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref('')
</script>

<style scoped>
.demo-input {
  width: 300px;
}
</style>
```
:::

## 禁用状态

:::demo
```vue
<template>
  <AiInput v-model="value" disabled placeholder="禁用状态" style="width: 300px" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('已禁用')
</script>
```
:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框。

:::demo
```vue
<template>
  <AiInput v-model="value" clearable placeholder="请输入内容" style="width: 300px" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('Hello AiUI')
</script>
```
:::

## 密码框

使用 `show-password` 属性即可得到一个可切换显示状态的密码框。

:::demo
```vue
<template>
  <AiInput
    v-model="password"
    type="password"
    show-password
    placeholder="请输入密码"
    style="width: 300px"
  />
</template>

<script setup>
import { ref } from 'vue'
const password = ref('')
</script>
```
:::

## 尺寸

可通过 `size` 属性指定输入框的尺寸。除了默认的大小外，还有 `sm`、`lg` 两种尺寸。

:::demo
```vue
<template>
  <div class="demo-inputs">
    <AiInput v-model="v1" size="lg" placeholder="Large" />
    <AiInput v-model="v2" placeholder="Default" />
    <AiInput v-model="v3" size="sm" placeholder="Small" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const v1 = ref('')
const v2 = ref('')
const v3 = ref('')
</script>

<style scoped>
.demo-inputs > * {
  margin-bottom: 12px;
  width: 300px;
}
</style>
```
:::

## 带图标的输入框

可以通过插槽 `prefix` 和 `suffix` 在输入框前后添加图标或内容。

:::demo
```vue
<template>
  <div class="demo-inputs">
    <AiInput v-model="v1" placeholder="前缀插槽">
      <template #prefix>
        <span>🔍</span>
      </template>
    </AiInput>
    <AiInput v-model="v2" placeholder="后缀插槽">
      <template #suffix>
        <span>📅</span>
      </template>
    </AiInput>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const v1 = ref('')
const v2 = ref('')
</script>

<style scoped>
.demo-inputs > * {
  margin-bottom: 12px;
  width: 300px;
}
</style>
```
:::

## 复合型输入框

可前置或后置内容，通常为标签或按钮。

:::demo
```vue
<template>
  <div class="demo-inputs">
    <AiInput v-model="v1" placeholder="请输入内容">
      <template #prepend>Http://</template>
    </AiInput>
    <AiInput v-model="v2" placeholder="请输入内容">
      <template #append>.com</template>
    </AiInput>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const v1 = ref('')
const v2 = ref('')
</script>

<style scoped>
.demo-inputs > * {
  margin-bottom: 12px;
  width: 400px;
}
</style>
```
:::

## Input Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number | — | — |
| type | 类型 | string | text / password / textarea | text |
| size | 尺寸 | string | sm / md / lg | md |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 禁用状态 | boolean | — | false |
| clearable | 是否可清空 | boolean | — | false |
| show-password | 是否显示密码切换图标 | boolean | — | false |
| readonly | 原生 readonly 属性 | boolean | — | false |
| autofocus | 原生 autofocus 属性 | boolean | — | false |
| form | 原生 form 属性 | string | — | — |
| autocomplete | 原生 autocomplete 属性 | string | — | off |

## Input Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| focus | 在 Input 获得焦点时触发 | (event: FocusEvent) |
| blur | 在 Input 失去焦点时触发 | (event: FocusEvent) |
| clear | 在点击清空按钮时触发 | — |

## Input Slots

| 插槽名称 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

