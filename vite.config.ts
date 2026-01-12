import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// 判断是否为库构建模式
const isLibMode =
  process.env.BUILD_MODE === 'lib' ||
  process.argv.includes('--mode=lib') ||
  (process.argv.includes('--mode') && process.argv[process.argv.indexOf('--mode') + 1] === 'lib')

export default defineConfig({
  plugins: [
    vue(),
    // 仅在库构建模式下生成类型声明
    ...(isLibMode
      ? [
          dts({
            include: ['src/**/*.ts', 'packages/**/*.ts', 'packages/**/*.vue'],
            outDir: 'dist/types',
            staticImport: true,
            insertTypesEntry: true,
            entryRoot: 'src',
          }),
        ]
      : []),
  ],
  resolve: {
    alias: [
      { find: '@ai-ui', replacement: resolve(__dirname, 'packages') },
      {
        find: '@axin666/ai-ui-icons',
        replacement: resolve(__dirname, 'packages/icons/src/index'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  // 库构建配置
  ...(isLibMode && {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'AiUI',
        fileName: (format) => {
          if (format === 'es') {
            return 'ai-ui.esm.js'
          }
          if (format === 'cjs') {
            return 'ai-ui.cjs.js'
          }
          return `ai-ui.${format}.js`
        },
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.names?.[0]
            if (fileName === 'style.css') {
              return 'style.css'
            }
            return fileName || 'asset'
          },
        },
      },
      cssCodeSplit: false,
      outDir: 'dist',
    },
  }),
  // 开发预览配置
  ...(!isLibMode && {
    root: '.',
    publicDir: 'public',
  }),
})
