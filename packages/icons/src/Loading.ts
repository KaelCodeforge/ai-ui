import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AiIconLoading',
  mounted() {
    // 在组件挂载后设置 SVG 内容
    const svgEl = this.$el as SVGElement
    if (svgEl && svgEl.tagName === 'svg') {
      svgEl.innerHTML =
        '<path d="M21 12a9 9 0 1 1-6.219-8.56" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    }
  },
  render() {
    return h('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
    })
  },
})
