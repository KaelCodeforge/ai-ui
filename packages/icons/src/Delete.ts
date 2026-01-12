import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'AiIconDelete',
  mounted() {
    // 在组件挂载后设置 SVG 内容
    const svgEl = this.$el as SVGElement
    if (svgEl && svgEl.tagName === 'svg') {
      svgEl.innerHTML =
        '<path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.1 0 62.3-26.9 63.9-61l24.7-523H896c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"/>'
    }
  },
  render() {
    return h('svg', {
      viewBox: '0 0 1024 1024',
      fill: 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
    })
  },
})
