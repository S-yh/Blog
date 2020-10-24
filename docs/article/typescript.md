---
title: TypeScript
sidebarDepth: 0
---

# TypeScript

## 选择TypeScript的原因

JS代码是在执行过程中编译的, 也就意味着JS的语法规则检测是在执行过程中才会进行的一个步骤, 带来的后果就是在开发过程中的所有语法错误, 我们都没办法完全预知到, 只有浏览器报错才会知道.  
JS同时是一门弱类型语言,我们生命一个变量之后,他可以是任意类型的. ts让js具备了强类型语言的特征.

## TS: 是JS的超集, 可以编译成纯JS

ts就是一套语法规则, 帮助我们约束自己的代码规范

* 作用
    * 直接在开发过程暴露错误
    * 约束变量类型
    * 描述函数规则, 明确函数的参数类型与返回值类型
    * 使用interface描述复杂数据

ts的主要作用在于约束

## 声明文件 `(.d.ts)`

TS可以用来描述一个简单的变量. 能够描述一个复杂的JSON数据, 能够描述函数, 也能够描述class. 在实践中, 当声明内容很多时, 通常会统一在一个文件中编写ts的描述规则, 这个文件就是`.d.ts`为后缀的声明文件.  

如果声明文件过多, 可能会出现重名的声明, 为了避免造成干扰, TS引入了作用域`namespace`, 如下
```ts
declare namespace drag {
    // ...
}
```
在使用过程中, 只需要直接使用命名空间即可. ts会自动帮助我们识别而无需引入, 或者ts会自动帮助我们引入.

## 交叉类型`(&)`

通常使用&符号来解决交叉类型, 将两种类型合并为一种类型.
```ts
type TouchEvent = React.TouchEvent & React.MouseEvent
```

## 联合类型`(|)`
```ts
const attr: number | string = 20 
```

## 类型保护
一个变量可能是字符串, 也可能是数组, 为此, 应该使用一些判断, 帮助编辑器做出正确推断.
```ts
function counter(per: string | string[]) {
    if(typeof (per) === 'string') {
        ...
    } else {
        ...
    }
}
```

## 索引类型
可以使用`keyof`来获取一个对象中key对应的具体值
```ts
interface Person{
    name: string,
    age: number
}
const key: keyof Person = 'name'
```
类似于 `type key = 'name'| 'age'`

## 编译上下文

`tsconfig.json`

* 编译选项
```js
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```

## 类型声明空间

变量声明空间包含可用作变量的内容. 例如 `class Foo` 提供了一个类型`Foo`的类型声明空间. 此外它同样提供了一个变量`Foo`到变量声明空间
```ts
class Foo {}
const someVar = Foo;
```

## 模块
