/**
 * AI UI 组件库入口
 */

import type { App } from 'vue'

// 导出公共类型
export type {
  ComponentSize as AiComponentSize,
  ComponentType as AiComponentType,
  ComponentStatus as AiComponentStatus,
} from './types'

// 导出组件
export { default as AiButton } from './Button'
export type { AiButtonProps } from './Button'

export { default as AiLoadingIcon } from './Icon'
export type { AiLoadingIconProps } from './Icon'

// 导入组件用于全局注册
import AiButton from './Button'
import AiLoadingIcon from './Icon'

// 组件列表
const components = [AiButton, AiLoadingIcon]

/**
 * 全局安装函数
 * @param app - Vue 应用实例
 */
export function install(app: App): void {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

// 默认导出
export default {
  install,
}
