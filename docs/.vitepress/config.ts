import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default defineConfig({
  base: '/ai-ui/',
  title: 'AI UI',
  description: 'Vue 3 component library for admin systems',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'Vue 3 组件库，面向中后台场景',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/introduction' },
          { text: '组件', link: '/components/button' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '基础',
              items: [
                { text: '介绍', link: '/guide/introduction' },
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '设计规范', link: '/guide/design-tokens' },
              ],
            },
          ],
          '/components/': [
            {
              text: '基础组件',
              items: [
                { text: 'Button 按钮', link: '/components/button' },
                { text: 'Input 输入框', link: '/components/input' },
                { text: 'LoadingIcon 加载图标', link: '/components/icon' },
              ],
            },
          ],
        },
        outline: { level: [2, 3], label: '页面导航' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新于' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Vue 3 component library for admin systems',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Components', link: '/en/components/button' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Basics',
              items: [
                { text: 'Introduction', link: '/en/guide/introduction' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Design Tokens', link: '/en/guide/design-tokens' },
              ],
            },
          ],
          '/en/components/': [
            {
              text: 'Components',
              items: [
                { text: 'Button', link: '/en/components/button' },
                { text: 'Input', link: '/en/components/input' },
                { text: 'LoadingIcon', link: '/en/components/icon' },
              ],
            },
          ],
        },
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        lastUpdated: { text: 'Last updated' },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present',
    },
    search: {
      provider: 'local',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },

  vite: {
    resolve: {
      alias: {
        '@ai-ui': fileURLToPath(new URL('../../packages', import.meta.url)),
        '@axin666/ai-ui/Icon': fileURLToPath(
          new URL('../../packages/components/Icon/index.ts', import.meta.url),
        ),
      },
    },
  },
})