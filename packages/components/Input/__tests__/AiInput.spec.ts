import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AiInput from '../src/AiInput.vue'

describe('AiInput', () => {
  it('should render correctly', () => {
    const wrapper = mount(AiInput, {
      props: {
        modelValue: 'test',
        placeholder: 'placeholder',
      },
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('test')
    expect(input.attributes('placeholder')).toBe('placeholder')
  })

  it('should update modelValue on input', async () => {
    const wrapper = mount(AiInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string | number) => wrapper.setProps({ modelValue: e }),
      },
    })
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
  })

  it('should be disabled when disabled prop is true', () => {
    const wrapper = mount(AiInput, {
      props: {
        disabled: true,
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('ai-input--disabled')
  })

  it('should show clear button when clearable and has value', async () => {
    const wrapper = mount(AiInput, {
      props: {
        modelValue: 'test',
        clearable: true,
      },
    })
    expect(wrapper.find('.ai-input__clear').exists()).toBe(true)
    await wrapper.find('.ai-input__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([''])
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('should toggle password visibility when showPassword is true', async () => {
    const wrapper = mount(AiInput, {
      props: {
        modelValue: 'password',
        type: 'password',
        showPassword: true,
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('password')

    const passwordIcon = wrapper.find('.ai-input__password')
    expect(passwordIcon.exists()).toBe(true)

    await passwordIcon.trigger('click')
    expect(input.attributes('type')).toBe('text')

    await passwordIcon.trigger('click')
    expect(input.attributes('type')).toBe('password')
  })

  it('should render prepend and append slots', () => {
    const wrapper = mount(AiInput, {
      slots: {
        prepend: 'prepend',
        append: 'append',
      },
    })
    expect(wrapper.find('.ai-input-group__prepend').text()).toBe('prepend')
    expect(wrapper.find('.ai-input-group__append').text()).toBe('append')
    expect(wrapper.classes()).toContain('ai-input-group')
  })
})
