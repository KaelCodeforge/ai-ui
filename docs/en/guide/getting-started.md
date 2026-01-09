# Getting Started

## Install

```bash
# npm
npm install @axin666/ai-ui

# pnpm
pnpm add @axin666/ai-ui
```

## Full import

```ts
import { createApp } from 'vue'
import AiUI from '@axin666/ai-ui'
import '@axin666/ai-ui/dist/style.css'
import App from './App.vue'

createApp(App).use(AiUI).mount('#app')
```

## On-demand

```vue
<script setup lang="ts">
import { AiButton } from '@axin666/ai-ui'
import '@axin666/ai-ui/dist/style.css'
</script>

<template>
  <AiButton type="primary">Button</AiButton>
</template>
```
