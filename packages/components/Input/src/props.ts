import type { ExtractPropTypes, PropType, Component } from 'vue'
import type { ComponentSize } from '../../types'

export type InputType = 'text' | 'textarea' | 'password' | 'number' | string

export const inputProps = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  /**
   * 类型
   */
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  /**
   * 尺寸
   */
  size: {
    type: String as PropType<ComponentSize>,
    default: 'md',
  },
  /**
   * 占位文本
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否可清空
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否显示密码切换图标
   */
  showPassword: {
    type: Boolean,
    default: false,
  },
  /**
   * 前缀图标
   */
  prefixIcon: {
    type: [String, Object] as PropType<string | Component>,
  },
  /**
   * 后缀图标
   */
  suffixIcon: {
    type: [String, Object] as PropType<string | Component>,
  },
  /**
   * 是否自动聚焦
   */
  autofocus: {
    type: Boolean,
    default: false,
  },
  /**
   * 原生 form 属性
   */
  form: {
    type: String,
  },
  /**
   * 原生 autocomplete 属性
   */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /**
   * 原生 tabindex 属性
   */
  tabindex: {
    type: [String, Number] as PropType<string | number>,
  },
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  'update:modelValue': (value: string | number) =>
    typeof value === 'string' || typeof value === 'number',
  input: (value: string | number) => typeof value === 'string' || typeof value === 'number',
  change: (value: string | number) => typeof value === 'string' || typeof value === 'number',
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}

export type InputEmits = typeof inputEmits
