---
title: React Hooks
sidebarDepth: 0
---

# React Hooks

React采用自上而下的单向数据流的方式, 管理自身的状态和数据, 在单向数据流中, 数据只能由父组件触发, 向下传递到子组件.   
可以在父组件中定义state, 并通过props的方式传给到子组件, 如果子组件想要修改父组件传递而来的状态,则只能给父组件发送消息, 由父组件改变, 在重新传递给子组件.   
在React中, **state和props的改变,都会引发组件重新渲染**, 如果是父组件的变化, 则父组件下所有子组件都会重新渲染.  
在class组件中, 组件重新渲染,是执行render函数. 在函数式组件中, 重新渲染是**整个函数重新执行**.  

::: tip
Hooks: 有状态的函数组件
::: 

## useState

在函数式组件中, 每一次渲染, 函数都会重新执行, 所有useState需要利用闭包, 在函数内部创建一个当前函数组件的状态, 并提供一个修改该状态的方法.  
  
useState接收一个值作为当前定义的state的初始值, 并且初始操作只有组件渲染才会执行. 初始值也可以传入一个函数作为参数, 函数返回值为初始值. 该函数也只会在组件首次渲染时执行一次.  
  
从react中引入useState
```js
import { useState } from 'react'
```
利用数组结构得到一个状态与修改状态的方法
```js
const [counter, setCounter] = useState(0)
```
Example：利用useState声明状态, 每当点击时,setCounter执行,counter增加
```js
import React, {useState} from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
    return [
        <div key="a">{counter}</div>,
        <button key="b" onClick={() => setCounter(counter + 1)}>
        点击+1
        </button>
    ]
}
```

::: tip
无论在class中,还是hooks中, state的改变都是异步的.
:::
状态异步改变, 意味着, 当想要在setCounter之后立即去使用它时, 无法拿到状态最新的值, 而之后再下一个事件循环周期执行时, 状态才是最新的值.




