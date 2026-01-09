import type { App } from 'vue'
import AiInput from './src/AiInput.vue'

AiInput.install = (app: App) => {
  app.component(AiInput.name as string, AiInput)
}

export default AiInput
export * from './src/props'
