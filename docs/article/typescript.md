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