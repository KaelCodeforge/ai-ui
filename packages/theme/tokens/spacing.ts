/**
 * 间距设计令牌
 * 基于 4px 网格系统
 */

/** 基础间距单位 (px) */
export const BASE_SPACING_UNIT = 4

/** 间距比例 */
export const spacingScale = {
  /** 0px */
  none: 0,
  /** 4px */
  xs: 4,
  /** 8px */
  sm: 8,
  /** 12px */
  md: 12,
  /** 16px */
  lg: 16,
  /** 20px */
  xl: 20,
  /** 24px */
  '2xl': 24,
  /** 32px */
  '3xl': 32,
  /** 40px */
  '4xl': 40,
  /** 48px */
  '5xl': 48,
  /** 64px */
  '6xl': 64,
} as const

/** 组件内边距 */
export const componentPadding = {
  /** 按钮等小型组件 */
  buttonSm: { x: 12, y: 6 },
  buttonMd: { x: 16, y: 8 },
  buttonLg: { x: 20, y: 12 },

  /** 输入框 */
  inputSm: { x: 8, y: 4 },
  inputMd: { x: 12, y: 8 },
  inputLg: { x: 16, y: 12 },

  /** 卡片 */
  cardSm: 12,
  cardMd: 16,
  cardLg: 24,
} as const

/** 圆角 */
export const borderRadius = {
  /** 0px */
  none: 0,
  /** 2px */
  xs: 2,
  /** 4px */
  sm: 4,
  /** 6px */
  md: 6,
  /** 8px */
  lg: 8,
  /** 12px */
  xl: 12,
  /** 16px */
  '2xl': 16,
  /** 9999px - 完全圆角 */
  full: 9999,
} as const

/** 阴影 */
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const

/** 过渡动画 */
export const transitions = {
  /** 快速过渡 - 用于小型交互 */
  fast: '150ms ease',
  /** 默认过渡 */
  base: '200ms ease',
  /** 慢速过渡 - 用于大型动画 */
  slow: '300ms ease',
} as const

/** 所有间距令牌 */
export const spacingTokens = {
  spacing: spacingScale,
  padding: componentPadding,
  radius: borderRadius,
  shadow: shadows,
  transition: transitions,
} as const

export type SpacingTokens = typeof spacingTokens
