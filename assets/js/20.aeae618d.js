(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{394:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[s._v("#")]),s._v(" TypeScript")]),s._v(" "),a("h2",{attrs:{id:"选择typescript的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择typescript的原因"}},[s._v("#")]),s._v(" 选择TypeScript的原因")]),s._v(" "),a("p",[s._v("JS代码是在执行过程中编译的, 也就意味着JS的语法规则检测是在执行过程中才会进行的一个步骤, 带来的后果就是在开发过程中的所有语法错误, 我们都没办法完全预知到, 只有浏览器报错才会知道."),a("br"),s._v("\nJS同时是一门弱类型语言,我们生命一个变量之后,他可以是任意类型的. ts让js具备了强类型语言的特征.")]),s._v(" "),a("h2",{attrs:{id:"ts-是js的超集-可以编译成纯js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts-是js的超集-可以编译成纯js"}},[s._v("#")]),s._v(" TS: 是JS的超集, 可以编译成纯JS")]),s._v(" "),a("p",[s._v("ts就是一套语法规则, 帮助我们约束自己的代码规范")]),s._v(" "),a("ul",[a("li",[s._v("作用\n"),a("ul",[a("li",[s._v("直接在开发过程暴露错误")]),s._v(" "),a("li",[s._v("约束变量类型")]),s._v(" "),a("li",[s._v("描述函数规则, 明确函数的参数类型与返回值类型")]),s._v(" "),a("li",[s._v("使用interface描述复杂数据")])])])]),s._v(" "),a("p",[s._v("ts的主要作用在于约束")]),s._v(" "),a("h2",{attrs:{id:"声明文件-d-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明文件-d-ts"}},[s._v("#")]),s._v(" 声明文件 "),a("code",[s._v("(.d.ts)")])]),s._v(" "),a("p",[s._v("TS可以用来描述一个简单的变量. 能够描述一个复杂的JSON数据, 能够描述函数, 也能够描述class. 在实践中, 当声明内容很多时, 通常会统一在一个文件中编写ts的描述规则, 这个文件就是"),a("code",[s._v(".d.ts")]),s._v("为后缀的声明文件.")]),s._v(" "),a("p",[s._v("如果声明文件过多, 可能会出现重名的声明, 为了避免造成干扰, TS引入了作用域"),a("code",[s._v("namespace")]),s._v(", 如下")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" drag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("在使用过程中, 只需要直接使用命名空间即可. ts会自动帮助我们识别而无需引入, 或者ts会自动帮助我们引入.")]),s._v(" "),a("h2",{attrs:{id:"交叉类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交叉类型"}},[s._v("#")]),s._v(" 交叉类型"),a("code",[s._v("(&)")])]),s._v(" "),a("p",[s._v("通常使用&符号来解决交叉类型, 将两种类型合并为一种类型.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TouchEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TouchEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MouseEvent\n")])])]),a("h2",{attrs:{id:"联合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联合类型"}},[s._v("#")]),s._v(" 联合类型"),a("code",[s._v("(|)")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" attr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" \n")])])]),a("h2",{attrs:{id:"类型保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型保护"}},[s._v("#")]),s._v(" 类型保护")]),s._v(" "),a("p",[s._v("一个变量可能是字符串, 也可能是数组, 为此, 应该使用一些判断, 帮助编辑器做出正确推断.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("per"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("per"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"索引类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引类型"}},[s._v("#")]),s._v(" 索引类型")]),s._v(" "),a("p",[s._v("可以使用"),a("code",[s._v("keyof")]),s._v("来获取一个对象中key对应的具体值")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keyof")]),s._v(" Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),s._v("\n")])])]),a("p",[s._v("类似于 "),a("code",[s._v("type key = 'name'| 'age'")])]),s._v(" "),a("h2",{attrs:{id:"编译上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译上下文"}},[s._v("#")]),s._v(" 编译上下文")]),s._v(" "),a("p",[a("code",[s._v("tsconfig.json")])]),s._v(" "),a("ul",[a("li",[s._v("编译选项")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 基本选项 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定要包含在编译中的库文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allowJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许编译 javascript 文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checkJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报告 javascript 文件中的错误")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preserve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"declaration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成相应的 '.d.ts' 文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成相应的 '.map' 文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将输出文件合并为一个文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定输出目录")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用来控制输出目录结构 --outDir.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除编译后的所有的注释")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noEmit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不生成输出文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"importHelpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从 tslib 导入辅助工具函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isolatedModules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 严格的类型检查选项 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用所有严格类型检查选项")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在表达式和声明上有隐含的 any类型时报错")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用严格的 null 检查")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitThis"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当 this 表达式值为 any 类型的时候，生成一个错误")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alwaysStrict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以严格模式检查每个模块，并在每个文件里加入 'use strict'")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 额外的检查 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noUnusedLocals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有未使用的变量时，抛出错误")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noUnusedParameters"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有未使用的参数时，抛出错误")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitReturns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 并不是所有函数里的代码都有返回值时，抛出错误")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noFallthroughCasesInSwitch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 模块解析选项 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于解析非相对模块名称的基目录")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块名到基于 baseUrl 的路径映射的列表")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rootDirs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根文件夹列表，其组合内容表示项目运行时的结构内容")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typeRoots"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包含类型声明的文件列表")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要包含的类型声明文件名列表")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allowSyntheticDefaultImports"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许从没有设置默认导出的模块中默认导入。")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Source Map Options */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定调试器应该找到 TypeScript 文件而不是源文件的位置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mapRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定调试器应该找到映射文件而不是生成文件的位置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"inlineSourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"inlineSources"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 其他选项 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用装饰器")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emitDecoratorMetadata"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为装饰器提供元数据的支持")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"类型声明空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型声明空间"}},[s._v("#")]),s._v(" 类型声明空间")]),s._v(" "),a("p",[s._v("变量声明空间包含可用作变量的内容. 例如 "),a("code",[s._v("class Foo")]),s._v(" 提供了一个类型"),a("code",[s._v("Foo")]),s._v("的类型声明空间. 此外它同样提供了一个变量"),a("code",[s._v("Foo")]),s._v("到变量声明空间")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")])])}),[],!1,null,null,null);t.default=e.exports}}]);