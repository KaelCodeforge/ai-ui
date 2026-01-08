import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AiUI from '@ai-ui/components'
import DemoContainer from './components/DemoContainer.vue'
import '@ai-ui/theme/index.scss'
import './custom.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册 AI UI 组件
    app.use(AiUI)
    // 注册 Demo 容器组件
    app.component('DemoContainer', DemoContainer)
  },
} satisfies Theme