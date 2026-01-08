/**
 * 排版设计令牌
 */

/** 字体族 */
export const fontFamily = {
  sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  mono: `'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
} as const

/** 字体大小 */
export const fontSize = {
  /** 12px */
  xs: 12,
  /** 14px */
  sm: 14,
  /** 16px */
  base: 16,
  /** 18px */
  lg: 18,
  /** 20px */
  xl: 20,
  /** 24px */
  '2xl': 24,
  /** 30px */
  '3xl': 30,
  /** 36px */
  '4xl': 36,
} as const

/** 行高 */
export const lineHeight = {
  /** 1 */
  none: 1,
  /** 1.25 */
  tight: 1.25,
  /** 1.375 */
  snug: 1.375,
  /** 1.5 */
  normal: 1.5,
  /** 1.625 */
  relaxed: 1.625,
  /** 2 */
  loose: 2,
} as const

/** 字重 */
export const fontWeight = {
  /** 400 */
  normal: 400,
  /** 500 */
  medium: 500,
  /** 600 */
  semibold: 600,
  /** 700 */
  bold: 700,
} as const

/** 所有排版令牌 */
export const typographyTokens = {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
} as const

export type TypographyTokens = typeof typographyTokens
