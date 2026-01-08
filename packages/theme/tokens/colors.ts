/**
 * 颜色设计令牌
 * 所有颜色值的单一数据源
 */

/** 品牌主色 */
export const brandColors = {
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  primaryBg: '#eef2ff',
} as const

/** 功能色 */
export const functionalColors = {
  success: '#10b981',
  successLight: '#34d399',
  successDark: '#059669',
  successBg: '#ecfdf5',

  warning: '#f59e0b',
  warningLight: '#fbbf24',
  warningDark: '#d97706',
  warningBg: '#fffbeb',

  error: '#ef4444',
  errorLight: '#f87171',
  errorDark: '#dc2626',
  errorBg: '#fef2f2',

  info: '#3b82f6',
  infoLight: '#60a5fa',
  infoDark: '#2563eb',
  infoBg: '#eff6ff',
} as const

/** 中性色 */
export const neutralColors = {
  white: '#ffffff',
  black: '#000000',

  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
} as const

/** 文本色 */
export const textColors = {
  primary: neutralColors.gray900,
  secondary: neutralColors.gray600,
  placeholder: neutralColors.gray400,
  disabled: neutralColors.gray300,
  inverse: neutralColors.white,
} as const

/** 背景色 */
export const bgColors = {
  page: neutralColors.gray50,
  container: neutralColors.white,
  elevated: neutralColors.white,
  disabled: neutralColors.gray100,
  mask: 'rgba(0, 0, 0, 0.45)',
} as const

/** 边框色 */
export const borderColors = {
  base: neutralColors.gray200,
  light: neutralColors.gray100,
  dark: neutralColors.gray300,
} as const

/** 所有颜色令牌 */
export const colorTokens = {
  brand: brandColors,
  functional: functionalColors,
  neutral: neutralColors,
  text: textColors,
  bg: bgColors,
  border: borderColors,
} as const

export type ColorTokens = typeof colorTokens
