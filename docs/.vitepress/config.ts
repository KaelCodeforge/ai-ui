import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'AI UI',
  description: 'Vue 3 组件库，面向中后台场景',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/logo.svg',

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
            { text: 'LoadingIcon 加载图标', link: '/components/icon' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present',
    },

    search: {
      provider: 'local',
    },

    outline: {
      label: '页面导航',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  vite: {
    resolve: {
      alias: {
        '@ai-ui': fileURLToPath(new URL('../../packages', import.meta.url)),
      },
    },
  },
})