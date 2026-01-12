<script setup lang="ts">
/**
 * AiButton 按钮组件
 *
 * @description 通用操作按钮，支持多种类型、尺寸和形态。
 */

import { computed, resolveDynamicComponent, useSlots, h } from 'vue'
import { createBem } from '@ai-ui/utils'
import { buttonProps, buttonEmits } from './props'

defineOptions({
  name: 'AiButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const slots = useSlots()

/** BEM 类名生成器 */
const bem = createBem('ai-button')

/** 计算类名 */
const classes = computed(() => {
  const cls: Array<string> = [bem()]

  if (props.type) cls.push(`ai-button--${props.type}`)
  if (props.size) cls.push(`ai-button--${props.size}`)

  if (props.plain) cls.push('is-plain')
  if (props.round) cls.push('is-round')
  if (props.circle) cls.push('is-circle')
  if (props.disabled) cls.push('is-disabled')
  if (props.loading) cls.push('is-loading')

  if (props.link || props.type === 'text') cls.push('is-link')

  return cls
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

// 默认加载图标（内联 SVG spinner）
const defaultLoadingIcon = () =>
  h(
    'svg',
    {
      width: '14',
      height: '14',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      h('path', {
        d: 'M21 12a9 9 0 1 1-6.219-8.56',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
  )

const currentIcon = computed(() => {
  if (props.loading) {
    return props.loadingIcon
      ? resolveDynamicComponent(props.loadingIcon as any)
      : defaultLoadingIcon
  }
  return props.icon ? resolveDynamicComponent(props.icon as any) : null
})

const hasText = computed(() => {
  return !!slots.default
})

const iconClass = computed(() => {
  return [bem('icon'), props.loading ? 'is-loading' : '', hasText.value ? 'is-with-text' : '']
})

const customStyle = computed(() => {
  if (!props.color) return undefined
  return {
    '--ai-button-custom-color': props.color,
  } as Record<string, string>
})
</script>

<template>
  <button
    :class="classes"
    :type="nativeType"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :style="customStyle"
    @click="handleClick"
  >
    <span v-if="currentIcon" :class="iconClass" aria-hidden="true">
      <component :is="currentIcon" />
    </span>

    <span v-if="slots.default" :class="bem('text')">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
@use './style.scss';
</style>
