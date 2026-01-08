<script setup lang="ts">
/**
 * AiButton 按钮组件
 *
 * @description 通用操作按钮，支持多种类型、尺寸和形态。
 */

import { computed, useSlots, h } from 'vue'
import { createBem } from '@ai-ui/utils'
import type { ButtonProps } from './props'

defineOptions({
  name: 'AiButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  ghost: false,
  block: false,
  round: false,
  circle: false,
  nativeType: 'button',
})

const emit = defineEmits<{
  /** 点击事件 */
  (e: 'click', evt: MouseEvent): void
}>()

const slots = useSlots()

/** BEM 类名生成器 */
const bem = createBem('ai-button')

/** 是否渲染为链接 */
const isLink = computed(() => !!props.href)

/** 计算类名 */
const classes = computed(() => {
  const baseClass = bem()
  const classesList = [baseClass, `${baseClass}--${props.type}`, `${baseClass}--${props.size}`]

  // 形态修饰符（BEM 格式）
  if (props.block) classesList.push(`${baseClass}--block`)
  if (props.ghost) classesList.push(`${baseClass}--ghost`)
  if (props.round) classesList.push(`${baseClass}--round`)
  if (props.circle) classesList.push(`${baseClass}--circle`)

  // 状态类（BEM 格式）
  if (props.loading) classesList.push(`${baseClass}--loading`)
  if (props.disabled) classesList.push(`${baseClass}--disabled`)

  return classesList
})

/** 处理点击事件 */
const handleClick = (evt: MouseEvent) => {
  if (props.disabled || props.loading) {
    evt.preventDefault()
    evt.stopPropagation()
    return
  }
  emit('click', evt)
}

/** 渲染图标辅助函数 */
const renderIcon = (icon: any) => {
  if (!icon) return null
  return typeof icon === 'string' ? icon : h(icon)
}
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :class="classes"
    :href="isLink ? href : undefined"
    :target="isLink ? target : undefined"
    :type="!isLink ? nativeType : undefined"
    :disabled="!isLink && disabled"
    @click="handleClick"
  >
    <span v-if="loading" :class="bem('spinner')" />

    <span :class="bem('content')">
      <!-- 左侧图标 -->
      <span v-if="slots.icon || icon" :class="[bem('icon'), bem('icon', 'left')]">
        <slot name="icon">
          <component :is="renderIcon(icon)" />
        </slot>
      </span>

      <!-- 默认插槽内容 -->
      <span :class="bem('text')">
        <slot />
      </span>

      <!-- 右侧图标 -->
      <span v-if="slots.iconRight || iconRight" :class="[bem('icon'), bem('icon', 'right')]">
        <slot name="iconRight">
          <component :is="renderIcon(iconRight)" />
        </slot>
      </span>
    </span>
  </component>
</template>

<style lang="scss">
@use './style.scss';
</style>
