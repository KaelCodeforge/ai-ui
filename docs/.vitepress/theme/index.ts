import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import AiUi from '../../../packages'

// 组件库主题与组件样式（CSS 变量 + 汇总后的组件样式）
import '@ai-ui/theme/index.scss'

// VitePress 品牌色覆盖（番茄红）
import './style.css'

// 站点自定义样式（原有）
import './custom.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册组件库：文档中可直接使用 <AiButton />
    app.use(AiUi)
    // 注册 Demo 预览组件
    app.component('demo-preview', ElementPlusContainer)
  },
} satisfies Theme