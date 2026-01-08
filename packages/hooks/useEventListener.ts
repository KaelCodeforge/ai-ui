import { onMounted, onUnmounted, watch, type Ref, isRef } from 'vue'
import { isClient } from '@ai-ui/utils'

type TargetType = HTMLElement | Window | Document

/**
 * 响应式事件监听器
 *
 * @param target - 目标元素（可以是 ref 或直接元素）
 * @param event - 事件名
 * @param handler - 处理函数
 * @param options - 事件监听选项
 *
 * @example
 * ```vue
 * <script setup>
 * import { ref } from 'vue'
 * import { useEventListener } from '@ai-ui/hooks'
 *
 * // 监听 window 事件
 * useEventListener(window, 'resize', () => {
 *   console.log('window resized')
 * })
 *
 * // 监听元素事件
 * const buttonRef = ref<HTMLElement>()
 * useEventListener(buttonRef, 'click', () => {
 *   console.log('button clicked')
 * })
 * </script>
 * ```
 */
export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  event: K,
  handler: (ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): void

export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  event: K,
  handler: (ev: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): void

export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: Ref<HTMLElement | undefined> | HTMLElement,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): void

export function useEventListener(
  target: Ref<TargetType | undefined> | TargetType,
  event: string,
  handler: (ev: Event) => void,
  options?: boolean | AddEventListenerOptions,
): void {
  if (!isClient) return

  let cleanup: (() => void) | undefined

  const addListener = (el: TargetType) => {
    el.addEventListener(event, handler, options)
    cleanup = () => el.removeEventListener(event, handler, options)
  }

  const removeListener = () => {
    cleanup?.()
    cleanup = undefined
  }

  if (isRef(target)) {
    watch(
      target,
      (newTarget, _, onCleanup) => {
        if (newTarget) {
          addListener(newTarget)
          onCleanup(removeListener)
        }
      },
      { immediate: true },
    )
  } else {
    onMounted(() => addListener(target))
  }

  onUnmounted(removeListener)
}
