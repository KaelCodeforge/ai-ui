<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './props'

defineOptions({
  name: 'AiCloseCircleIcon',
})

const props = withDefaults(defineProps<IconProps>(), {
  size: '1em',
  color: 'currentColor',
})

const sizeValue = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})
</script>

<template>
  <span class="ai-icon">
    <svg viewBox="0 0 1024 1024" :width="sizeValue" :height="sizeValue" :fill="color">
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-47.4 47.4L512 611.4l-118 118.2-47.4-47.4L464.6 564l-118.2-118 47.4-47.4L512 516.6l118-118.2 47.4 47.4L559.4 564l118 118.2z"
      />
    </svg>
  </span>
</template>
