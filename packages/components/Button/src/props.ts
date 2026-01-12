import type { PropType, Component, ExtractPropTypes } from 'vue'

export type ButtonType =
  | ''
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

export type ButtonSize = '' | 'default' | 'small' | 'large'

export type ButtonNativeType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  // 类型
  type: {
    type: String as PropType<ButtonType>,
    default: '',
  },

  // 尺寸 (注意 Element Plus 使用 large/small，不是 lg/sm)
  size: {
    type: String as PropType<ButtonSize>,
    default: '',
  },

  // 原生 type
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },

  // 朴素按钮 (幽灵/描边风格)
  plain: Boolean,

  // 圆角
  round: Boolean,

  // 圆形 (通常用于图标)
  circle: Boolean,

  // 加载中
  loading: Boolean,

  // 自定义加载图标
  loadingIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },

  // 禁用
  disabled: Boolean,

  // 图标
  icon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },

  // 自动聚焦
  autofocus: Boolean,

  // 是否为链接/文字按钮
  link: Boolean,

  // 自定义颜色
  color: String,

  // 是否为深色模式 (兼容 Element Plus API，虽本项目默认暗黑，保留此属性)
  dark: Boolean,
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
