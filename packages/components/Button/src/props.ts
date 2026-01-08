import type { ComponentSize, ComponentType } from '../../types'
import type { Component } from 'vue'

/** 原生按钮类型 */
export type ButtonNativeType = 'button' | 'submit' | 'reset'
/** 按钮样式类型，扩展了 text 类型 */
export type ButtonType = ComponentType | 'text'

export interface ButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonType

  /**
   * 按钮尺寸
   * @default 'md'
   */
  size?: ComponentSize

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean

  /**
   * 幽灵按钮（透明背景，仅显示边框）
   * @default false
   */
  ghost?: boolean

  /**
   * 是否块级按钮（宽度 100%）
   * @default false
   */
  block?: boolean

  /**
   * 是否使用大圆角
   * @default false
   */
  round?: boolean

  /**
   * 是否圆形按钮（宽高相等，常用于图标按钮）
   * @default false
   */
  circle?: boolean

  /**
   * 原生 button 类型
   * @default 'button'
   */
  nativeType?: ButtonNativeType

  /**
   * 左侧图标，优先使用 icon 插槽
   */
  icon?: string | Component

  /**
   * 右侧图标，优先使用 iconRight 插槽
   */
  iconRight?: string | Component

  /**
   * 如果设置 href，则渲染为 a 标签
   */
  href?: string

  /**
   * 链接 target 属性，仅在 href 存在时有效
   */
  target?: string
}
