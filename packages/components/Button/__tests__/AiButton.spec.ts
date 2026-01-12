import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { markRaw } from 'vue'
import AiButton from '../src/AiButton.vue'

describe('AiButton', () => {
  const TestIcon = markRaw({
    template: '<span class="test-icon">icon</span>',
  })

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

  // 5. 渲染不同类型和尺寸（Element Plus：large/small）
  it('应该正确应用类型和尺寸类名', () => {
    const wrapper = mount(AiButton, {
      props: { type: 'primary', size: 'large' },
    })
    expect(wrapper.classes()).toContain('ai-button--primary')
    expect(wrapper.classes()).toContain('ai-button--large')
  })

  // 6. plain / link class
  it('应该正确应用 plain/link 状态类名', () => {
    const wrapper = mount(AiButton, {
      props: {
        plain: true,
        link: true,
      },
    })
    expect(wrapper.classes()).toContain('is-plain')
    expect(wrapper.classes()).toContain('is-link')
  })

  // 7. icon 渲染
  it('应该正确渲染 icon', () => {
    const wrapper = mount(AiButton, {
      props: {
        icon: TestIcon,
      },
      slots: { default: '按钮' },
    })
    expect(wrapper.find('.test-icon').exists()).toBe(true)
    expect(wrapper.find('.ai-button__icon').exists()).toBe(true)
  })

  // 8. loadingIcon 渲染
  it('loading 为 true 时应该优先渲染 loadingIcon', () => {
    const wrapper = mount(AiButton, {
      props: {
        loading: true,
        loadingIcon: TestIcon,
      },
      slots: { default: '按钮' },
    })
    expect(wrapper.find('.test-icon').exists()).toBe(true)
    expect(wrapper.classes()).toContain('is-loading')
  })
})
