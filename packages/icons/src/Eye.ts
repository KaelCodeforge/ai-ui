import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AiIconEye',
  mounted() {
    // 在组件挂载后设置 SVG 内容
    const svgEl = this.$el as SVGElement
    if (svgEl && svgEl.tagName === 'svg') {
      svgEl.innerHTML =
        '<path d="M942.2 486.2C847.4 286.6 704.1 186 512 186c-192.2 0-335.4 100.6-430.2 300.2-9.6 20.2-9.6 43.5 0 63.7C176.6 749.4 319.9 850 512 850c192.2 0 335.4-100.6 430.2-300.2 9.6-20.2 9.6-43.5 0-63.6zM512 774c-158.4 0-281.4-82.6-365.1-262 83.7-179.4 206.7-262 365.1-262 158.4 0 281.4 82.6 365.1 262-83.7 179.4-206.7 262-365.1 262z" fill="currentColor"/>\n  <path d="M512 354c-87.3 0-158 70.7-158 158s70.7 158 158 158 158-70.7 158-158-70.7-158-158-158zm0 240c-45.3 0-82-36.7-82-82s36.7-82 82-82 82 36.7 82 82-36.7 82-82 82z" fill="currentColor"/>'
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
