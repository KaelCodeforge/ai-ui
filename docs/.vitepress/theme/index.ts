import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import AiUi from '../../../packages' // 确保路径指向你的组件库入口
import '@packages/theme/index.scss'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(AiUi)
    // 注册 demo-preview 组件
    app.component('demo-preview', ElementPlusContainer)
  }
}
