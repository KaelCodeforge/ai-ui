import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@ai-ui': resolve(__dirname, 'packages'),
      '@axin666/ai-ui/Icon': resolve(__dirname, 'packages/components/Icon/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['packages/**/__tests__/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['packages/**/*.{ts,vue}'],
      exclude: ['packages/**/__tests__/**', 'packages/**/index.ts'],
    },
  },
})
