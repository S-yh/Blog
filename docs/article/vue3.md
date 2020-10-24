---
title: Vuex
sidebarDepth: 0
---

# Vue.js 3.0

## 新增特性及优化

* 代码管理: 通过monorepo管理
* 类型检查: 通过TypeScript重构代码
* 性能优化: 
    * 移除一些features
    * 引入tree-shaking: 只打包引入的模块. 减少vue.js打包体积
* 数据劫持优化: 通过Proxy API劫持
    * proxy不能监听到内部深层次的对象变化, vue3是在getter中取递归响应式
* 编译优化: 
    * patch过程优化: 相比于vue2的基于组件的变化, vue3 利用block tree 将模板基于动态节点.借助block tree 将vnode更新性能由模板整体大小提升为与动态内容的数量相关
    * slot的编译优化
    * 事件监听器的缓存优化
    * 重写diff算法
* 语法优化: 
    * composition API, 优化逻辑复用,更好的类型支持

## 组件渲染

* 创建vnode -> 渲染vnode -> 生成dom

### 应用程序初始化

```js

import {createApp} from 'vue'
import App from './app'

const app = createApp(App)
app.mount('#app')

```

### 核心渲染流程

* 创建vnode和渲染vnode
    * vnode: 本质上是用来描述DOM 的JavaScript对象, 他在Vue.js中可以描述不同类型的节点, 比如普通元素节点, 组件节点等
    * 优势: 
        1. 抽象: 可以把渲染过程抽象化,从而使得组件的抽象能力也得到提升
        2. 跨平台: 因为patch vnode的过程不同平台可以有自己的实现. 基于vnode再做服务端渲染. weex平台, 小程序平台渲染
    * 初始渲染两件事情: 
        1. 渲染组件生成subTree
        2. 把subTree挂载到container中