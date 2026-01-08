import { onMounted, onUnmounted, type Ref } from 'vue'
import { isClient } from '@ai-ui/utils'

/**
 * 监听元素外部点击事件
 *
 * @param target - 目标元素的 ref
 * @param handler - 点击外部时的回调函数
 *
 * @example
 * ```vue
 * <script setup>
 * import { ref } from 'vue'
 * import { useClickOutside } from '@ai-ui/hooks'
 *
 * const dropdownRef = ref<HTMLElement>()
 * const isOpen = ref(false)
 *
 * useClickOutside(dropdownRef, () => {
 *   isOpen.value = false
 * })
 * </script>
 * ```
 */
export function useClickOutside(
  target: Ref<HTMLElement | undefined>,
  handler: (event: MouseEvent) => void,
): void {
  if (!isClient) return

  const listener = (event: MouseEvent) => {
    const el = target.value
    if (!el || el === event.target || el.contains(event.target as Node)) {
      return
    }
    handler(event)
  }

  onMounted(() => {
    document.addEventListener('click', listener, true)
  })

  onUnmounted(() => {
    document.removeEventListener('click', listener, true)
  })
}
