import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../../types'

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
    type: String as PropType<'text' | 'password' | 'textarea' | string>,
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
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: false,
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
