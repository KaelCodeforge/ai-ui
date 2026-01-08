import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AiButton from '../src/AiButton.vue'

describe('AiButton', () => {
  // 1. 渲染默认插槽文本
  it('应该正确渲染默认插槽内容', () => {
    const wrapper = mount(AiButton, {
      slots: { default: '按钮文本' },
    })
    expect(wrapper.text()).toContain('按钮文本')
    expect(wrapper.classes()).toContain('ai-button')
  })

  // 2. 正常点击触发 click 事件
  it('正常状态下点击应该触发 click 事件', async () => {
    const wrapper = mount(AiButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  // 3. disabled 时不触发 click
  it('禁用状态下点击不应该触发 click 事件', async () => {
    const wrapper = mount(AiButton, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // 4. loading 时不触发 click
  it('加载状态下点击不应该触发 click 事件', async () => {
    const wrapper = mount(AiButton, {
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // 5. 有 href 时渲染为 <a>
  it('设置 href 属性时应该渲染为 <a> 标签', () => {
    const wrapper = mount(AiButton, {
      props: { href: 'https://example.com' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  // 6. 渲染不同类型和尺寸
  it('应该正确应用类型和尺寸类名', () => {
    const wrapper = mount(AiButton, {
      props: { type: 'primary', size: 'lg' },
    })
    expect(wrapper.classes()).toContain('ai-button--primary')
    expect(wrapper.classes()).toContain('ai-button--lg')
  })

  // 7. 渲染图标
  it('应该正确渲染图标插槽', () => {
    const wrapper = mount(AiButton, {
      slots: {
        icon: '<span class="custom-icon">icon</span>',
      },
    })
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(wrapper.find('.ai-button__icon--left').exists()).toBe(true)
  })
})
