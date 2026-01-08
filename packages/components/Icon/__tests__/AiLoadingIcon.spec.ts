import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AiLoadingIcon from '../src/AiLoadingIcon.vue'

describe('AiLoadingIcon', () => {
  // 基础渲染测试
  describe('渲染', () => {
    it('应该正确渲染', () => {
      const wrapper = mount(AiLoadingIcon)
      expect(wrapper.classes()).toContain('ai-loading-icon')
      expect(wrapper.find('svg').exists()).toBe(true)
    })
  })

  // Props 测试
  describe('Props', () => {
    it('size 属性应该设置正确的尺寸（字符串）', () => {
      const wrapper = mount(AiLoadingIcon, {
        props: { size: '24px' },
      })
      const svg = wrapper.find('svg')
      expect(svg.attributes('width')).toBe('24px')
      expect(svg.attributes('height')).toBe('24px')
    })

    it('size 属性应该设置正确的尺寸（数字）', () => {
      const wrapper = mount(AiLoadingIcon, {
        props: { size: 24 },
      })
      const svg = wrapper.find('svg')
      expect(svg.attributes('width')).toBe('24px')
      expect(svg.attributes('height')).toBe('24px')
    })

    it('color 属性应该设置正确的颜色', () => {
      const wrapper = mount(AiLoadingIcon, {
        props: { color: '#ff0000' },
      })
      const svg = wrapper.find('svg')
      expect(svg.attributes('stroke')).toBe('#ff0000')
    })

    it('strokeWidth 属性应该设置正确的线条宽度', () => {
      const wrapper = mount(AiLoadingIcon, {
        props: { strokeWidth: 3 },
      })
      const svg = wrapper.find('svg')
      expect(svg.attributes('stroke-width')).toBe('3')
    })
  })
})
