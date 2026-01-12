/**
 * 图标生成脚本
 * 将 SVG 文件转换为 Vue 3 组件
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import glob from 'fast-glob'
import { resolve, dirname, basename, extname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ROOT_DIR = resolve(__dirname, '..')
const SVG_DIR = resolve(ROOT_DIR, 'svg')
const SRC_DIR = resolve(ROOT_DIR, 'src')

/**
 * 将文件名转换为 PascalCase
 * @example loading.svg -> Loading
 * @example edit-icon.svg -> EditIcon
 */
function toPascalCase(name: string): string {
  return name
    .replace(extname(name), '')
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

/**
 * 解析 SVG 内容，提取属性和子元素
 */
function parseSVG(svgContent: string): { attrs: Record<string, string>; innerHTML: string } {
  // 移除 XML 声明和注释
  const content = svgContent
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim()

  // 提取 SVG 标签的属性
  const svgTagMatch = content.match(/<svg\s+([^>]+)>/)
  if (!svgTagMatch) {
    throw new Error('Invalid SVG: no <svg> tag found')
  }

  const attrsStr = svgTagMatch[1]
  const attrs: Record<string, string> = {}

  // 解析属性（支持带引号和不带引号的值）
  const attrRegex = /(\w+(?:-\w+)*)(?:=["']([^"']+)["']|=\s*([^\s>]+))/g
  let match
  while ((match = attrRegex.exec(attrsStr)) !== null) {
    const [, key, quotedValue, unquotedValue] = match
    attrs[key] = quotedValue || unquotedValue || ''
  }

  // 提取内部内容（移除 <svg> 开始和结束标签）
  const innerHTML = content
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim()

  return { attrs, innerHTML }
}

/**
 * 将 kebab-case 转换为 camelCase
 */
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

/**
 * 生成 Vue 组件代码
 */
function generateComponent(name: string, svgContent: string): string {
  const componentName = `AiIcon${name}`
  const { attrs, innerHTML } = parseSVG(svgContent)

  // 构建 SVG 属性对象代码（使用单引号，符合 ESLint）
  // 确保有默认的 width 和 height，设置为 1em
  const processedAttrs = { ...attrs }
  if (!processedAttrs.width) {
    processedAttrs.width = '1em'
  }
  if (!processedAttrs.height) {
    processedAttrs.height = '1em'
  }

  const svgAttrsStr = Object.entries(processedAttrs)
    .map(([key, value]) => {
      const camelKey = toCamelCase(key)
      // 处理特殊值
      if (value === 'currentColor') {
        return `      ${camelKey}: 'currentColor'`
      }
      // 处理数字值
      if (/^\d+$/.test(value)) {
        return `      ${camelKey}: ${value}`
      }
      // JSON.stringify 会使用双引号，我们需要转换为单引号
      // 但需要小心处理转义字符
      const jsonStr = JSON.stringify(value)
      // 将双引号替换为单引号，但保留转义的引号
      const singleQuoted = jsonStr.replace(/^"|"$/g, "'").replace(/\\"/g, '"')
      return `      ${camelKey}: ${singleQuoted}`
    })
    .join(',\n')

  // 处理 innerHTML，使用 JSON.stringify 确保正确转义，然后转换为单引号
  // JSON.stringify 会正确处理所有特殊字符
  const innerHTMLJson = JSON.stringify(innerHTML)
  // 将外层的双引号替换为单引号，并移除字符串内不必要的转义引号
  // 因为外层是单引号，所以 \" 可以简化为 "
  let innerHTMLFormatted = innerHTMLJson.replace(/^"|"$/g, "'")
  // 移除单引号字符串中不必要的转义引号
  innerHTMLFormatted = innerHTMLFormatted.replace(/\\"/g, '"')

  // 生成组件代码
  // Vue 3 中，h 函数不支持 innerHTML，我们需要在 mounted 钩子中设置
  // mounted 应该在 render 之前（Vue 组件属性顺序）
  return `import { defineComponent, h } from 'vue'

export default defineComponent({
  name: '${componentName}',
  mounted() {
    // 在组件挂载后设置 SVG 内容
    const svgEl = this.$el as SVGElement
    if (svgEl && svgEl.tagName === 'svg') {
      svgEl.innerHTML =
        ${innerHTMLFormatted}
    }
  },
  render() {
    return h('svg', {
${svgAttrsStr},
    })
  },
})
`
}

/**
 * 生成入口文件
 */
function generateIndex(componentNames: string[]): string {
  if (componentNames.length === 0) {
    return `// No icons generated yet
export {}
`
  }

  const imports = componentNames.map((name) => `import ${name} from './${name}.js'`).join('\n')

  const exports = componentNames.map((name) => `  ${name}`).join(',\n')

  const installComponents = componentNames.map((name) => `    ${name}`).join(',\n')

  return `${imports}

export {
${exports}
}

const components = [
${installComponents}
]

export function install(app: any) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
`
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始生成图标组件...')

  // 清理旧的 src 目录
  if (existsSync(SRC_DIR)) {
    rmSync(SRC_DIR, { recursive: true, force: true })
  }
  mkdirSync(SRC_DIR, { recursive: true })

  // 扫描 SVG 文件
  const svgFiles = await glob('*.svg', { cwd: SVG_DIR })
  console.log(`📦 找到 ${svgFiles.length} 个 SVG 文件`)

  if (svgFiles.length === 0) {
    console.log('⚠️  没有找到 SVG 文件，请确保 svg/ 目录下有 .svg 文件')
    return
  }

  const componentNames: string[] = []

  // 处理每个 SVG 文件
  for (const svgFile of svgFiles) {
    const svgPath = resolve(SVG_DIR, svgFile)
    const svgContent = readFileSync(svgPath, 'utf-8')
    const componentName = toPascalCase(basename(svgFile))

    console.log(`  ✨ 生成 ${componentName}...`)

    try {
      // 生成组件代码
      const componentCode = generateComponent(componentName, svgContent)

      // 写入文件
      const outputPath = resolve(SRC_DIR, `${componentName}.ts`)
      writeFileSync(outputPath, componentCode, 'utf-8')

      componentNames.push(componentName)
    } catch (error) {
      console.error(`  ❌ 处理 ${svgFile} 时出错:`, error)
      throw error
    }
  }

  // 生成入口文件
  console.log('📝 生成 index.ts...')
  const indexCode = generateIndex(componentNames)
  writeFileSync(resolve(SRC_DIR, 'index.ts'), indexCode, 'utf-8')

  console.log('✅ 图标组件生成完成！')
  console.log(`   - 生成了 ${componentNames.length} 个组件`)
  console.log(`   - 输出目录: ${SRC_DIR}`)
  console.log(`   - 组件列表: ${componentNames.join(', ')}`)
}

main().catch((error) => {
  console.error('❌ 生成失败:', error)
  process.exit(1)
})
