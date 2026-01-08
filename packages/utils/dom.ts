/**
 * DOM 工具函数
 */

/**
 * 判断是否在浏览器环境
 */
export const isClient = typeof window !== 'undefined'

/**
 * 判断是否支持某个 CSS 属性
 * @param property - CSS 属性名
 */
export function isCssPropertySupported(property: string): boolean {
  if (!isClient) return false
  return property in document.documentElement.style
}

/**
 * 添加事件监听器
 * @param target - 目标元素
 * @param event - 事件名
 * @param handler - 处理函数
 * @param options - 选项
 */
export function addEventListener<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Window | Document,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): () => void {
  target.addEventListener(event, handler as EventListener, options)
  return () => target.removeEventListener(event, handler as EventListener, options)
}

/**
 * 获取元素的滚动父元素
 * @param element - 目标元素
 */
export function getScrollParent(element: HTMLElement): HTMLElement | Window {
  let parent = element.parentElement

  while (parent) {
    const { overflow, overflowX, overflowY } = getComputedStyle(parent)
    if (/(auto|scroll|overlay)/.test(overflow + overflowX + overflowY)) {
      return parent
    }
    parent = parent.parentElement
  }

  return window
}

/**
 * 获取元素相对于视口的位置
 * @param element - 目标元素
 */
export function getElementRect(element: HTMLElement): DOMRect {
  return element.getBoundingClientRect()
}

/**
 * 判断元素是否在视口内
 * @param element - 目标元素
 * @param threshold - 阈值（0-1）
 */
export function isElementInViewport(element: HTMLElement, threshold = 0): boolean {
  const rect = getElementRect(element)
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  const vertInView =
    rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold
  const horInView =
    rect.left <= windowWidth * (1 - threshold) && rect.right >= windowWidth * threshold

  return vertInView && horInView
}

/**
 * 阻止事件冒泡
 */
export function stopPropagation(event: Event): void {
  event.stopPropagation()
}

/**
 * 阻止默认行为
 */
export function preventDefault(event: Event): void {
  event.preventDefault()
}
