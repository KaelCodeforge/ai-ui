下面是一份已经**合并好的完整提示词**，包含：

- 【一～六】：项目定位 / 目录 / 打包 / 发布 / AI 行为边界  
- 【七】：组件设计与命名规范  

你可以直接复制成 `AI_GUIDE.md` 或 `.cursorrules`，也可以整段丢给 Cursor 作为“项目规则”。

---

```text
你现在在一个名为 ai-ui 的仓库中工作。这个仓库的**唯一目标**：开发、预览、文档化、打包并发布一个 Vue3 + TypeScript 的 PC 端 UI 组件库（前缀 Ai），而不是开发业务项目或应用。

请严格按照下面的“项目角色”和“边界”来思考与写代码。

当前目录结构（关键部分）为：

ai-ui/
├── packages/              # 组件库核心代码
│   ├── index.ts           # 组件库顶层入口（对外导出）
│   ├── components/        # 组件源码
│   │   ├── Button/
│   │   │   ├── src/
│   │   │   │   ├── AiButton.vue
│   │   │   │   ├── props.ts
│   │   │   │   └── style.scss
│   │   │   ├── index.ts
│   │   │   └── __tests__/
│   │   ├── Icon/
│   │   ├── index.ts       # 组件汇总入口
│   │   └── types.ts       # 公共类型
│   ├── hooks/             # 通用 Hooks
│   ├── utils/             # 工具函数
│   └── theme/             # 主题系统
│       ├── index.scss     # 默认主题（CSS 变量）
│       ├── dark.scss      # 暗色主题（可选）
│       └── tokens/        # 设计令牌
│           ├── colors.ts
│           ├── spacing.ts
│           ├── typography.ts
│           └── index.ts
├── playground/            # 开发预览环境（只用于展示组件）
├── docs/                  # VitePress 文档（只用于文档和示例）
├── index.html             # 开发预览入口
├── vite.config.ts         # Vite 配置（服务于组件库 + playground + docs）
├── tsconfig.json          # TS 配置
└── package.json           # 项目配置

--------------------------------
【一、项目定位和边界】
--------------------------------

1. 本仓库是**纯组件库工程**，禁止：
   - 写任何具体业务页面、业务接口逻辑；
   - 引入与组件库无关的后端 API SDK；
   - 在 `playground` 或 `docs` 中写真实业务（仅允许演示组件使用）。

2. 项目的所有代码分为四类：
   - 组件实现（packages/components/**）
   - 组件相关的内部基础设施（hooks、utils、theme、tokens）
   - 预览与文档（playground、docs）
   - 打包、发布、工程化配置（vite.config.ts、package.json、ESLint、Husky 等）

3. 任何新代码/文件：
   - 必须归入上述四类之一；
   - 如果不属于组件库本身或其工具链，视为不符合项目目标，不应添加。

--------------------------------
【二、组件库代码约定】
--------------------------------

1. 组件前缀与命名：
   - 所有对外组件均以 `Ai` 开头，例如：
     - AiButton, AiIcon, AiInput, AiTable, AiModal ...
   - 组件目录采用 PascalName 对应的目录：
     - `AiButton` → `packages/components/Button/`
     - `AiIcon`  → `packages/components/Icon/`
   - 每个组件至少包含：
     - `src/AiXxx.vue`
     - `src/props.ts`
     - `src/style.scss`
     - `index.ts`
     - `__tests__/AiXxx.spec.ts`

2. 顶层导出：
   - `packages/components/index.ts` 负责汇总所有组件导出：
     ```ts
     export { default as AiButton } from './Button';
     export type { AiButtonProps } from './Button';
     // ...
     ```
   - `packages/index.ts` 作为组件库顶层入口：
     ```ts
     export * from './components';
     export * from './hooks';
     export * from './utils';
     export * from './theme/tokens';
     ```
   - 推荐在项目根新建 `src/index.ts` 作为打包入口：
     ```ts
     import '../packages/theme/index.scss';
     export * from '../packages';
     ```

3. 类型与 Props：
   - 公共类型放在 `packages/components/types.ts` 中，例如：
     ```ts
     export type ComponentSize = 'sm' | 'md' | 'lg';
     export type ComponentType = 'primary' | 'default' | 'success' | 'warning' | 'danger';
     ```
   - 各组件 `props.ts` 中定义自身 Props 接口，并使用 JSDoc 注释，禁止在 .vue 文件中随意定义类型。

4. 样式与主题：
   - 所有组件样式统一通过 `packages/theme/index.scss` 引入，用 CSS 变量（`--ai-` 前缀）实现主题。
   - 不允许在组件中写死颜色、尺寸和阴影，必须使用 Theme Token 或 CSS 变量。

5. hooks 和 utils：
   - `packages/hooks/` 只放与组件相关的通用逻辑（如 useClickOutside）。
   - `packages/utils/` 只放通用工具（如 BEM、DOM 操作、props 工具），不写业务逻辑。

--------------------------------
【三、playground 和 docs 的角色】
--------------------------------

1. `playground/`：
   - 仅作为开发时的**组件预览**环境。
   - `playground/App.vue` 中只允许：
     - 引入和展示组件库组件；
     - 演示不同 props 的使用、不同状态效果；
     - 简单交互（如点击按钮显示 Dialog），仅用于测试组件行为。
   - 不允许：
     - 接入真实后端接口；
     - 编写业务路由、复杂状态管理；
     - 写与组件库无关的 UI（如完整的后台管理系统）。

2. `docs/`（VitePress）：
   - 只用于撰写组件文档与用例：
     - 组件介绍、API、示例；
     - 设计规范（色彩、间距、排版等）。
   - 所有 demo 仅围绕组件展示，禁止作为业务 Demo 项目。
   - 文档中如需展示业务场景，只用极简伪数据，不引入真实业务逻辑。

--------------------------------
【四、打包与发布（只为组件库服务）】
--------------------------------

1. `vite.config.ts`：
   - 必须支持两种用途：
     - `dev`：服务于 playground / docs 的开发和调试；
     - `build`：打包组件库（lib 模式），入口为 `src/index.ts`，输出到 `dist/`。
   - `build.lib` 中入口与输出示例：
     - entry: `src/index.ts`
     - formats: `['es', 'cjs']`
     - fileName: `ai-ui.esm.js` / `ai-ui.cjs.js`
   - 使用 `vite-plugin-dts` 生成类型声明：输出到 `dist/types`（或 `dist/index.d.ts`）。
   - 确保将 `vue` 声明为 external，不打包进库。

2. `package.json`：
   - 所有配置都服务于“作为 npm 组件库存在”：
     - `main`, `module`, `types`, `exports`, `files`, `sideEffects`
     - scripts: `dev`, `build`, `lint`, `test`, `release` 等
   - 示例关键字段：
     ```jsonc
     {
       "main": "dist/ai-ui.cjs.js",
       "module": "dist/ai-ui.esm.js",
       "types": "dist/types/src/index.d.ts",
       "exports": {
         ".": {
           "import": "./dist/ai-ui.esm.js",
           "require": "./dist/ai-ui.cjs.js",
           "types": "./dist/types/src/index.d.ts"
         },
         "./dist/style.css": "./dist/style.css"
       },
       "files": ["dist"],
       "sideEffects": [
         "dist/style.css",
         "packages/theme/index.scss",
         "packages/components/**/style.scss"
       ],
       "peerDependencies": {
         "vue": "^3.3.0"
       }
     }
     ```

3. 不引入后端 / 业务 SDK：
   - 除非是为某种通用组件设计（如 Upload 支持自定义请求），也只提供「接口形式」（例如 onUpload 回调），而不是内置业务接口。

--------------------------------
【五、AI 行为规范】
--------------------------------

在这个仓库中，当我提出诸如 “新增 AiXxx 组件”、“优化按钮交互”、“添加主题 token”、“完善文档”等需求时，请遵循以下原则：

1. 所有工作都围绕：
   - 组件（packages/components）
   - 组件基础设施（hooks/utils/theme）
   - 预览（playground）
   - 文档（docs）
   - 工程化（打包、规范、测试）
   这五个方向展开。

2. 不要自动创建或扩展任何“业务模块”，包括但不限于：
   - pages、views、api、services、store 等；
   - 不要在 playground 或 docs 里模拟真实业务接口调用。

3. 当你发现某个需求偏向业务（例如想做一个完整的 CRM 页面），应提醒我：“本项目仅用于 UI 组件库开发，可以通过简单 demo 演示组件，但不应实现完整业务流程”，并建议：
   - 如何把它抽象成一个 demo 组件；
   - 或建议在一个单独的业务仓库中实现。

4. 新增文件时，优先判断它属于哪一层次：
   - 组件 / hooks / utils / theme / playground / docs / 工程化；
   - 如果不符合，拒绝创建。

5. 所有代码必须满足：
   - 通过现有 ESLint + Prettier 规则；
   - 测试可运行（Vitest）；
   - 不破坏打包和文档。

--------------------------------
【六、当前可自动执行的整理工作示例】
--------------------------------

如果我说“按照这个项目定位帮我整理一下工程”，你可以主动做这些事：

1. 检查并整理：
   - `packages/index.ts` 和 `packages/components/index.ts` 的导出结构是否清晰、完整；
   - `src/index.ts` 是否存在且符合“引入主题 + 导出 packages”的模式；
   - `packages/theme/index.scss` 是否汇总了所有组件样式；
   - `vite.config.ts` 是否支持 lib 打包（入口 src/index.ts、external vue、vite-plugin-dts）；
   - `package.json` 是否指向 dist 入口且 exports 配置正确。

2. 清理：
   - 删除或标记任何不再符合“组件库项目”定位的目录/文件；
   - 对于 playground/docs 中可能的业务代码，简化为组件 demo。

从现在起，请你严格把自己当成“这个 UI 组件库的维护者”，所有改动以“提升组件库质量、可复用性、可发布性”为唯一目标。

--------------------------------
【七、组件设计与命名规范】
--------------------------------

这一节用于约束所有 Ai* 组件的设计方式，确保一致性，方便维护和 AI 辅助生成。

1. 组件命名与目录结构

1.1 组件命名规则：
  - 所有对外组件都必须以 `Ai` 开头，使用 PascalCase：
    - AiButton, AiIcon, AiInput, AiSelect, AiTable, AiModal, AiForm, AiFormItem ...
  - `name` 字段（或 `<script setup>` 下的 `defineOptions`）如果需要，保持同名：
    - `name: 'AiButton'`

1.2 组件目录结构（在 `packages/components` 下）：
  - 组件目录名使用 PascalCase，与组件名一致：
    - `AiButton` 组件 -> 目录 `packages/components/Button/`
    - `AiInput` 组件 -> 目录 `packages/components/Input/`
  - 每个组件目录包含以下文件：
    - `src/AiXxx.vue`       // 组件实现
    - `src/props.ts`        // Props 类型定义
    - `src/style.scss`      // 组件样式
    - `index.ts`            // 组件导出
    - `__tests__/AiXxx.spec.ts`  // 单元测试

  示例（AiButton）：
  - `packages/components/Button/src/AiButton.vue`
  - `packages/components/Button/src/props.ts`
  - `packages/components/Button/src/style.scss`
  - `packages/components/Button/index.ts`
  - `packages/components/Button/__tests__/AiButton.spec.ts`

1.3 组件导出规范：
  - 组件目录 `index.ts`：
    ```ts
    import AiButton from './src/AiButton.vue';
    export type { ButtonProps as AiButtonProps } from './src/props';
    export default AiButton;
    ```
  - 组件库入口 `packages/components/index.ts`：
    ```ts
    export { default as AiButton } from './Button';
    export type { AiButtonProps } from './Button';
    ```
  - 顶层入口 `packages/index.ts` 已经 `export * from './components';`，所以用户统一使用：
    ```ts
    import { AiButton } from '@your-scope/ai-ui';
    ```

2. Props 与事件设计

2.1 公共类型：
  - 所有通用类型统一放在 `packages/components/types.ts` 中，例如：
    ```ts
    export type ComponentSize = 'sm' | 'md' | 'lg';
    export type ComponentType = 'primary' | 'default' | 'success' | 'warning' | 'danger';
    ```
  - 各组件尽量复用这些通用类型，避免重复定义。

2.2 Props 规范：
  - 每个组件的 Props 接口定义在 `src/props.ts` 中。
  - 必须使用 TypeScript 接口并配合 JSDoc 注释（中文说明 + 默认值）。
  - 常见字段约定：
    - 布尔：
      - `disabled`, `loading`, `readonly`, `clearable`, `closable` 等；
    - 尺寸：
      - `size?: ComponentSize; // 'sm' | 'md' | 'lg'`；
    - 类型 / 状态：
      - `type?: ComponentType; // 'primary' | 'default' ...`；
      - 特定组件可以有 `status?: 'success' | 'warning' | 'error' ...`；
    - 双向绑定：
      - 一律使用 `modelValue` + `update:modelValue` 模式；
    - 类名或样式：
      - 为了主题统一，不鼓励用户直接传颜色，更多使用 `type` 来控制。

  示例（ButtonProps）：
  ```ts
  import type { ComponentSize, ComponentType } from '../types';

  export interface ButtonProps {
    /**
     * 按钮类型
     * @default 'default'
     */
    type?: ComponentType | 'text';

    /**
     * 按钮尺寸
     * @default 'md'
     */
    size?: ComponentSize;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否加载中
     */
    loading?: boolean;

    /**
     * 是否块级按钮
     */
    block?: boolean;
  }
  ```

2.3 事件规范：
  - 使用 `defineEmits` + TS 类型声明：
    ```ts
    const emit = defineEmits<{
      (e: 'click', evt: MouseEvent): void;
      (e: 'change', value: unknown): void;
      (e: 'update:modelValue', value: unknown): void;
    }>();
    ```
  - 通用事件命名规范：
    - 原生交互：`click`, `change`, `input`, `focus`, `blur`, `keydown` 等；
    - 组件内部语义：`open`, `close`, `toggle`, `confirm`, `cancel` 等；
    - v-model：必须为 `update:modelValue`。

3. 模板与脚本书写规范

3.1 使用 `<script setup lang="ts">`：
  - 所有 Vue 组件统一使用 `<script setup lang="ts">` 语法；
  - 不使用 Options API，尽量使用 Composition API + TS。

3.2 默认值：
  - 使用 `withDefaults(defineProps<Props>(), {...})` 设置默认值：
    ```ts
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'md',
      disabled: false,
      loading: false,
      block: false,
    });
    ```

3.3 计算类名：
  - 类名规范：基础类以 `.ai-组件名-kebab`，内部元素为 `__xxx`，修饰为 `--xxx`。
  - 例如 AiButton 使用基础类 `.ai-button`：
    ```ts
    const classes = computed(() => [
      'ai-button',
      `ai-button--${props.type}`,
      `ai-button--${props.size}`,
      {
        'ai-button--disabled': props.disabled,
        'ai-button--loading': props.loading,
        'ai-button--block': props.block,
      },
    ]);
    ```
  - 模板中使用 `:class="classes"`，避免手写重复逻辑。

4. 样式与 BEM

4.1 BEM 约定：
  - 基础块（Block）：`.ai-button`, `.ai-input`, `.ai-modal` 等；
  - 元素（Element）：`.ai-button__icon`, `.ai-button__content` 等；
  - 修饰（Modifier）：`.ai-button--primary`, `.ai-button--sm` 等；
  - 状态类统一使用 BEM 修饰符格式：
    - `.ai-button--disabled`, `.ai-button--loading`, `.ai-button--active` 等。

4.2 样式文件：
  - 每个组件的样式写在 `src/style.scss` 中；
  - 中性的基础变量（颜色、间距、字号）均来自 `packages/theme/index.scss` 中的 CSS 变量，禁止写死颜色；
  - 不同主题（如 `dark.scss`）可覆盖这些 CSS 变量。

4.3 示例（AiButton 的基础样式）：
  ```scss
  .ai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--ai-spacing-md);
    height: 32px;
    border-radius: var(--ai-radius-md);
    font-size: var(--ai-font-size-md);
    border: 1px solid var(--ai-color-border);
    color: var(--ai-color-text-primary);
    background-color: var(--ai-color-fill-default);
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background-color: var(--ai-color-fill-hover);
    }

    &:active {
      background-color: var(--ai-color-fill-active);
    }

    &--primary {
      background-color: var(--ai-color-primary);
      border-color: var(--ai-color-primary);
      color: #fff;
    }

    &--sm {
      height: 28px;
      padding: 0 var(--ai-spacing-sm);
      font-size: var(--ai-font-size-sm);
    }

    &--lg {
      height: 36px;
      padding: 0 var(--ai-spacing-lg);
      font-size: var(--ai-font-size-lg);
    }

    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  ```

5. 单元测试规范

5.1 测试文件：
  - 所有组件测试文件放在 `__tests__/AiXxx.spec.ts` 中；
  - 使用 Vitest + @vue/test-utils。

5.2 每个组件至少包含：
  - 基本渲染测试（是否能正确渲染 slot / 文本）；
  - 关键交互测试（点击、输入、打开/关闭等）；
  - 边界状态测试（disabled、loading、error 等）。

示例（AiButton）：
```ts
  import { mount } from '@vue/test-utils';
  import AiButton from '../src/AiButton.vue';

  describe('AiButton', () => {
    it('renders default slot', () => {
      const wrapper = mount(AiButton, {
        slots: { default: '按钮' },
      });
      expect(wrapper.text()).toContain('按钮');
    });

    it('emits click event when enabled', async () => {
      const wrapper = mount(AiButton);
      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeTruthy();
    });

    it('does not emit click when disabled', async () => {
      const wrapper = mount(AiButton, { props: { disabled: true } });
      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeUndefined();
    });
  });
  ```

7. 图标 (Icon) 维护规范

7.1 禁止内联 SVG：
  - 禁止在任何组件（如 AiButton, AiInput）的 `.vue` 文件中直接编写 `<svg>` 标签。

7.2 统一维护：
  - 所有 SVG 图标必须提取到 `packages/components/Icon/src/` 目录下，作为独立的 `.vue` 组件维护。
  - 图标组件命名规范：`Ai[Name]Icon.vue`（例如 `AiCloseCircleIcon.vue`, `AiEyeIcon.vue`）。

7.3 图标组件实现：
  - 图标组件统一使用 `packages/components/Icon/src/props.ts` 中定义的 `IconProps`。
  - 支持 `size` (string | number) 和 `color` (string) 属性。
  - 示例：
    ```vue
    <script setup lang="ts">
    import { computed } from 'vue'
    import type { IconProps } from './props'
    defineOptions({ name: 'AiXxxIcon' })
    const props = withDefaults(defineProps<IconProps>(), { size: '1em', color: 'currentColor' })
    </script>
    <template>
      <span class="ai-icon">
        <svg :width="sizeValue" :height="sizeValue" :fill="color" viewBox="...">...</svg>
      </span>
    </template>
    ```

7.4 导出与注册：
  - 新图标需在 `packages/components/Icon/index.ts` 中导出。
  - 需在 `packages/components/index.ts` 的 `components` 数组中注册，以便全局使用。

6. 文档规范与同步要求

6.1 文档结构：
  - 每个组件在 `docs/components/` 下有一个对应的 Markdown 文档：
    - 文件名按组件命名，如 `button.md`, `input.md`, `modal.md`；
    - 内容结构：简介 → 基本用法 → 各种示例 → Props 表 → Events 表 → Slots 表 → Methods 表（如有）。
  - 示例代码统一放在 `docs/demos/组件名/` 目录下，使用 `.vue` 文件。
  - 文档中使用 `:::preview` 语法引用 demo：
    ```markdown
    :::preview 示例标题
    demo-preview=../demos/组件名/文件名.vue
    :::
    ```

6.2 文档同步规则（重要）：
  - **当组件代码发生变化时，必须同步更新文档**：
    1. Props 变化：更新文档中的 Props 表格，确保与 `src/props.ts` 中的定义完全一致（包括新增、删除、类型变更、默认值变更）。
    2. Events 变化：更新文档中的 Events 表格，确保与组件 `defineEmits` 中的事件定义一致。
    3. Slots 变化：更新文档中的 Slots 表格，确保与组件模板中的插槽定义一致。
    4. Methods 变化：如果组件暴露了方法（通过 `defineExpose`），更新 Methods 表格。
    5. 功能变化：如果新增或删除了功能特性，需要：
       - 更新相应的示例 demo 文件（`docs/demos/组件名/`）；
       - 在文档中添加或删除对应的示例章节。
  
  - **文档更新检查清单**：
    - [ ] Props 表格是否与 `src/props.ts` 完全一致？
    - [ ] Events 表格是否与组件事件定义一致？
    - [ ] Slots 表格是否完整？
    - [ ] Methods 表格是否包含所有暴露的方法？
    - [ ] 示例 demo 是否正常工作？
    - [ ] 文档中的代码示例是否使用了最新的 API？

6.3 Props 表规范：
  - Props 表必须以 `src/props.ts` 为准，保持字段、类型、默认值同步。
  - 表格格式：
    | 参数 | 说明 | 类型 | 可选值 | 默认值 |
    | --- | --- | --- | --- | --- |
  - 类型列应使用 TypeScript 类型表示，如 `string / number`、`boolean`、`'sm' \| 'md' \| 'lg'` 等。
  - 可选值列：如果是枚举类型，列出所有可选值；如果是通用类型（如 `string`），使用 `—`。
  - 默认值列：必须与 `props.ts` 中的 `default` 值一致，如果没有默认值使用 `—`。

示例结构：
  ```md
  # Button 按钮

  通用操作按钮，支持多种类型、尺寸和形态。

  ## 基本使用

  ```vue
  <template>
    <AiButton type="primary">主要按钮</AiButton>
    <AiButton>默认按钮</AiButton>
    <AiButton type="text">文字按钮</AiButton>
  </template>
  ```

  ## Props

  | 属性     | 说明       | 类型                                      | 默认值  |
  | -------- | ---------- | ----------------------------------------- | ------- |
  | type     | 按钮类型   | 'primary' \| 'default' \| 'success' ...   | default |
  | size     | 按钮尺寸   | 'sm' \| 'md' \| 'lg'                      | md      |
  | disabled | 是否禁用   | boolean                                   | false   |

  ## Events

  | 事件名 | 说明     | 回调参数            |
  | ------ | -------- | ------------------- |
  | click  | 点击事件 | (event: MouseEvent) |
  ```

--------------------------------
【AI 开发新组件时的行为要求补充】

- 当我说"新增一个 AiXxx 组件"时，你需要自动：
  1. 在 `packages/components/Xxx/` 下创建完整目录和文件；
  2. 按本节规范设计 Props、事件、样式、测试、文档骨架；
  3. 更新 `packages/components/index.ts` 和 `packages/index.ts` 的导出；
  4. 如有需要，更新 `packages/theme/index.scss` 引入新的样式；
  5. 创建文档文件 `docs/components/xxx.md` 和相应的 demo 文件 `docs/demos/xxx/`；
  6. 确保通过 ESLint、Vitest、打包构建。

- 当我说"更新/修改 AiXxx 组件"时，你需要：
  1. 修改组件代码（Props、Events、Slots、Methods 等）；
  2. **必须同步更新文档** `docs/components/xxx.md`：
     - 更新 Props 表格（与 `src/props.ts` 保持一致）；
     - 更新 Events 表格（与组件事件定义一致）；
     - 更新 Slots 表格（如有变化）；
     - 更新 Methods 表格（如有变化）；
     - 更新或创建相应的 demo 示例（`docs/demos/xxx/`）；
  3. 确保文档中的示例代码使用最新的 API。

- 所有命名、结构、API、文档，都要尽量"对齐现有组件的模式"，保持高度一致。

- **重要提醒**：组件代码变化时，文档必须同步更新，这是强制要求。
```