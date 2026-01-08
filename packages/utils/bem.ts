/**
 * BEM 命名规范工具
 * 用于生成符合 BEM 规范的 CSS 类名
 *
 * @example
 * const bem = createBem('ai-button')
 * bem() // 'ai-button'
 * bem('icon') // 'ai-button__icon'
 * bem('icon', 'left') // 'ai-button__icon--left'
 * bem({ disabled: true }) // 'ai-button ai-button--disabled'
 */

/** BEM 修饰符类型 */
export type BemModifier = string | Record<string, boolean | undefined>

/**
 * 创建 BEM 类名生成器
 * @param block - 块名称（如 'ai-button'）
 */
export function createBem(block: string) {
  /**
   * 生成 BEM 类名
   * @param elementOrModifier - 元素名或修饰符
   * @param modifier - 修饰符（当第一个参数是元素名时）
   */
  return function bem(elementOrModifier?: string | BemModifier, modifier?: BemModifier): string {
    // 无参数，返回块名
    if (elementOrModifier === undefined) {
      return block
    }

    // 第一个参数是对象，作为块的修饰符处理
    if (typeof elementOrModifier === 'object') {
      return generateModifierClasses(block, elementOrModifier)
    }

    // 第一个参数是字符串
    const element = `${block}__${elementOrModifier}`

    // 无修饰符，返回元素名
    if (modifier === undefined) {
      return element
    }

    // 有修饰符
    if (typeof modifier === 'string') {
      return `${element}--${modifier}`
    }

    return generateModifierClasses(element, modifier)
  }
}

/**
 * 生成带修饰符的类名
 */
function generateModifierClasses(
  base: string,
  modifiers: Record<string, boolean | undefined>,
): string {
  const classes = [base]

  for (const [key, value] of Object.entries(modifiers)) {
    if (value) {
      classes.push(`${base}--${key}`)
    }
  }

  return classes.join(' ')
}

/**
 * 创建带命名空间的 BEM 生成器
 * @param namespace - 命名空间（默认 'ai'）
 */
export function createNamespace(namespace = 'ai') {
  return function (block: string) {
    return createBem(`${namespace}-${block}`)
  }
}

/** 默认命名空间 BEM 生成器 */
export const useNamespace = createNamespace('ai')
