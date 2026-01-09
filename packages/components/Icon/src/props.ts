/**
 * 图标通用 Props 类型
 */
export type IconProps = {
  /**
   * 图标大小
   * @default '1em'
   */
  size?: string | number
  /**
   * 图标颜色
   * @default 'currentColor'
   */
  color?: string
  /**
   * 线条宽度 (仅对部分描边类图标有效)
   * @default 2
   */
  strokeWidth?: number
}

/** 兼容旧命名 */
export type LoadingIconProps = IconProps
