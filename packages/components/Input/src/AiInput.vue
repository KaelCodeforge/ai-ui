<script setup lang="ts">
/**
 * AiInput 输入框组件
 *
 * @description 基础表单输入组件，支持多种类型、尺寸和状态。
 */

import { ref, computed, useSlots, watch, nextTick } from 'vue'
import { createBem } from '@ai-ui/utils'
import { CloseCircle, Eye, EyeInvisible } from '@axin666/ai-ui-icons'
import { inputProps, inputEmits } from './props'

defineOptions({
  name: 'AiInput',
  inheritAttrs: false,
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots = useSlots()

/** BEM 类名生成器 */
const bem = createBem('ai-input')

/** 输入框实例 */
const inputRef = ref<HTMLInputElement | null>(null)

/** 聚焦状态 */
const isFocused = ref(false)

/** 密码是否可见 */
const passwordVisible = ref(false)

/** 内部绑定值 */
const nativeInputValue = computed(() =>
  props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue),
)

/** 最终输入框类型 */
const inputType = computed(() => {
  if (props.type === 'password' && props.showPassword) {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type
})

/** 计算外层类名 */
const containerClasses = computed(() => {
  const baseClass = bem()
  const classes = [baseClass, `${baseClass}--${props.size}`]

  if (props.disabled) classes.push(`${baseClass}--disabled`)
  if (slots.prepend || slots.append) {
    classes.push('ai-input-group')
    if (slots.prepend) classes.push('ai-input-group--prepend')
    if (slots.append) classes.push('ai-input-group--append')
  }

  return classes
})

/** 计算包装层类名 */
const wrapperClasses = computed(() => {
  return [bem('wrapper'), isFocused.value ? 'is-focus' : '']
})

/** 是否显示清空按钮 */
const showClear = computed(() => {
  return (
    props.clearable &&
    !props.disabled &&
    !props.readonly &&
    nativeInputValue.value !== '' &&
    (isFocused.value || true) // 简化：始终显示（或可根据 hover 状态）
  )
})

/** 是否显示密码切换 */
const showPwdVisible = computed(() => {
  return props.showPassword && props.type === 'password' && !props.disabled
})

/** 处理输入事件 */
const handleInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  emit('update:modelValue', value)
  emit('input', value)
}

/** 处理变化事件 */
const handleChange = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  emit('change', value)
}

/** 处理包装器点击 */
const handleWrapperClick = () => {
  if (!props.disabled && !props.readonly) {
    inputRef.value?.focus()
  }
}

/** 处理聚焦 */
const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

/** 处理失焦 */
const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

/** 清空值 */
const handleClear = () => {
  emit('update:modelValue', '')
  emit('input', '')
  emit('change', '')
  emit('clear')
  nextTick(() => {
    inputRef.value?.focus()
  })
}

/** 切换密码可见性 */
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  nextTick(() => {
    inputRef.value?.focus()
  })
}

/** 暴露方法 */
defineExpose({
  /** 获取原生 input 引用 */
  input: inputRef,
  /** 使输入框聚焦 */
  focus: () => inputRef.value?.focus(),
  /** 使输入框失焦 */
  blur: () => inputRef.value?.blur(),
  /** 选中输入框中的文本 */
  select: () => inputRef.value?.select(),
})

watch(
  () => props.modelValue,
  () => {
    // 处理外部改变 modelValue 的情况，如果需要额外逻辑可以加在这里
  },
)
</script>

<template>
  <div :class="containerClasses" v-bind="$attrs">
    <!-- 前置内容 (Prepend) -->
    <div v-if="slots.prepend" class="ai-input-group__prepend">
      <slot name="prepend" />
    </div>

    <div :class="wrapperClasses" @click="handleWrapperClick">
      <!-- 前缀图标 (Prefix) -->
      <span v-if="slots.prefix || prefixIcon" :class="bem('prefix')">
        <slot name="prefix">
          <component :is="prefixIcon" v-if="prefixIcon" />
        </slot>
      </span>

      <input
        ref="inputRef"
        :class="bem('inner')"
        :type="inputType"
        :value="nativeInputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :form="form"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <!-- 后缀图标 (Suffix) -->
      <span v-if="slots.suffix || suffixIcon || showClear || showPwdVisible" :class="bem('suffix')">
        <!-- 清空按钮 -->
        <span v-if="showClear" :class="bem('clear')" @mousedown.prevent @click.stop="handleClear">
          <CloseCircle />
        </span>

        <!-- 密码切换 -->
        <span v-if="showPwdVisible" :class="bem('password')" @click.stop="togglePasswordVisible">
          <Eye v-if="passwordVisible" />
          <EyeInvisible v-else />
        </span>

        <!-- 普通后缀 -->
        <slot name="suffix">
          <component :is="suffixIcon" v-if="suffixIcon" />
        </slot>
      </span>
    </div>

    <!-- 后置内容 (Append) -->
    <div v-if="slots.append" class="ai-input-group__append">
      <slot name="append" />
    </div>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
