import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import path from 'path'

export default defineConfig({
  title: "Ai UI",
  description: "A Tomato-Red Dark Theme Vue3 UI Library",
  base: '/ai-ui/', // 如果不是部署在根目录，请保持这个

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/design' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Icon 图标', link: '/components/icon' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/ai-ui' }
    ]
  },

  markdown: {
    config(md) {
      // 核心配置：注册插件
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        '@packages': path.resolve(__dirname, '../../packages'),
        '@ai-ui': path.resolve(__dirname, '../../packages'),
        '@axin666/ai-ui': path.resolve(__dirname, '../../src/index.ts'),
        '@axin666/ai-ui-icons': path.resolve(__dirname, '../../packages/icons/src/index.ts')
      }
    }
  }
})