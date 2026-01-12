import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AiIconCloseCircle',
  mounted() {
    // 在组件挂载后设置 SVG 内容
    const svgEl = this.$el as SVGElement
    if (svgEl && svgEl.tagName === 'svg') {
      svgEl.innerHTML =
        '<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-47.4 47.4L512 611.4l-118 118.2-47.4-47.4L464.6 564l-118.2-118 47.4-47.4L512 516.6l118-118.2 47.4 47.4L559.4 564l118 118.2z" fill="currentColor"/>'
    }
  },
  render() {
    return h('svg', {
      viewBox: '0 0 1024 1024',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
    })
  },
})
