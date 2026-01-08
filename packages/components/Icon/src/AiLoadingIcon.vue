<script setup lang="ts">
/**
 * AiLoadingIcon 加载图标组件
 *
 * @description 加载状态的旋转图标
 *
 * @example
 * ```vue
 * <AiLoadingIcon />
 * <AiLoadingIcon size="24px" color="#1677ff" />
 * ```
 */

import type { LoadingIconProps } from './props'
import { computed } from 'vue'

defineOptions({
  name: 'AiLoadingIcon',
})

const props = withDefaults(defineProps<LoadingIconProps>(), {
  size: '1em',
  color: 'currentColor',
  strokeWidth: 2,
})

/** 计算尺寸 */
const sizeValue = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})
</script>

<template>
  <span class="ai-loading-icon">
    <svg
      :width="sizeValue"
      :height="sizeValue"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  </span>
</template>

<style lang="scss">
@use './style.scss';
</style>
