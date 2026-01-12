<template>
  <AiInput
    v-model="password"
    type="password"
    show-password
    placeholder="请输入密码"
    style="width: 300px"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiInput } from '@axin666/ai-ui'

const password = ref('')
</script>
