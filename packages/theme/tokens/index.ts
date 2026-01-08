/**
 * 设计令牌统一出口
 */

export * from './colors'
export * from './spacing'
export * from './typography'

import { colorTokens, type ColorTokens } from './colors'
import { spacingTokens, type SpacingTokens } from './spacing'
import { typographyTokens, type TypographyTokens } from './typography'

/** 所有设计令牌 */
export const tokens = {
  ...colorTokens,
  ...spacingTokens,
  ...typographyTokens,
} as const

export type DesignTokens = ColorTokens & SpacingTokens & TypographyTokens
