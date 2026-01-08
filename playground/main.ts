/**
 * 开发预览入口
 */

import { createApp } from 'vue'
import AiUI from '@ai-ui'
import '@ai-ui/theme/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(AiUI)
app.mount('#app')
