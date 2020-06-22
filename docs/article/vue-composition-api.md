---
title: Vue Composition API
sidebarDepth: 0
---

# Vue 组合式 API

## 响应式与副作用

创建一个响应式的状态:
```js
import {reactive} from 'vue'

const state = reactive({
    count: 0
})
```
  
`reactive` 几乎等价于2.x中现有的`Vue.observable()`API,这里返回的`state`是一个响应式对象.   
  
> 在Vue中, 响应式状态的基本用力就是在渲染时使用它, 因为有了依赖追踪, 视图会在响应式状态发生改变时自动更新  
  
在DOM当中渲染内容被视为一种**副作用**, 程序会在外部修改其本身的状态, 使用`watchEffect`API应用基于响应式状态的副作用, 并自动进行重应用.  
  
```js
import { reactive, watchEffect } from 'vue'

const state = reactive({
    count: 0
})

watchEffect(() => {
    document.body.innerHtml = `count is ${state.count}`
})
```

`watchEffec` 接收一个应用预期副作用的函数, 它会立即执行该函数, 并将该执行过程中用到的所有响应式状态的property作为依赖进行追踪.

## 计算状态与Ref

有一些状态依赖于其他状态的状态(衍生状态), 在Vue中通过**计算属性**来处理, 在Vue Composition API中可以使用`computed`API直接创建一个计算值.
```js
import { reactive, computed } from 'vue'

const state = reactive({
    count: 0,
})

const double = computed(() => state.count * 2)
```

`computed` 内部简单实现.
```js
function computed(getter) {
    const ref = {
        value: null
    }
    watchEffect(() => {
        ref.value = getter()
    })
    return ref
}
``` 
另外需要劫持对这个对象`.value`属性的读写操作,来实现依赖收集与更新通知. 返回的`Ref`对象用来作为一个响应式引用保留内部的值.除了计算值的ref, 还可以使用`ref`API直接创建一个可变更的普通ref.
```js
const count = ref(0)
```

## 解开Ref

ref值可以暴露给渲染上下文, 在渲染过程中, Vue会直接使用其内部的值, 也就是说在模板中可以把`count.value`直接写成`count`, 当一个ref值嵌套与响应式对象中时,访问会自动解开
```js
const state = reactive({
    count: 0,
    double: computed(() => state.count * 2)
})

console.log(state.double)
```

在组件中的使用方式
```html
<template>
  <Button @click="increment">
    Count is: {{state.count}}, double is: {{state.double}}
  </Button>
</template>
<script>
    import { reactive, computed } from 'vue'
    export default {
        setup() {
            const state = reactive({
                count: 0,
                double: computed(() => state.count * 2)
            })
            function increment() {
                state.count++
            }
            return {
                state, increment
            }
        }
    }
</script>
```

## 声明周期钩子函数

为了在声明周期钩子中产生副作用, 我们可以使用形如 `onXXX`的API
```js
import { onMounted } from 'vue'

export default {
    setup() {
        onMounted(() => {
            console.log('Mounted')
        })
    }
}
```

这些声明周期方法只能用在`setup`钩子中, 它会通过内部的全局状态自动找到调用此`setup`钩子的实例, 如此设计是为了减少将逻辑提取到外部函数时的冲突.

## Ref vs. Reactive

* `ref`的使用时为了让基础类型值具有响应式,
* 使用`reactive`的问题是, 使用组合函数时必须始终保持对这个所返回对象的引用, 以保持响应式, 不能解构或展开
* 使用`toRefs`API 可以将`reactive`返回的响应式对象的每个property都转成响应的ref. 可以展开或解构
  
两种变量风格
* 类似于在js中声明基础类型变量与对象变量时一样区别使用`ref`和`reactive`
* 所有地方都使用`reactive`, 然后在组合函数返回的时候对响应式对象使用`toRefs`.

## 主要API

### `setup`

`setup`函数是一个新的组件选项, 作为组件内使用Composition API的入口点.

* 调用时机: 创建组件实例, 然后初始化`props`, 紧接着就调用`setup`函数, 从生命周期钩子的视角来看, 它会在`beforeCreate`钩子之前调用
* 模板中使用: 如果`setup`返回一个对象, 则对象的属性将会被合并到组件模板的渲染上下文. 
> `setup`返回的ref在模板中会自动解开,不需要写`.value`
* 渲染函数/JSX中使用
`setup`也可以返回一个函数, 函数中也能使用当前`setup`函数作用域中的响应式数据
```js
import { h, ref, reactive } from 'vue'

export default {
    setup() {
        const count = ref(0)
        const objec = reactive({foo: 'bar'})
        return () => h('div', [count.value, object.foo])
    }
}
```
* 参数: 
    1. `setup`函数接收`props`作为第一个参数, `props`对象是响应式的, `watchEffect`或`watch`会观察和响应`props`的更新, `props`对象不可以解构,会失去响应式.
    2. `setup`函数接收`context`作为第二个参数, 暴露了一些property, 可以解构使用.

* `this`在`setup`中不可用
* 类型定义
```js
interface Data {
    [key: string]: unknown
}
function setup(props: Data): Data
```

### `reactive`

`reactive`接收一个普通对象, 然后返回该普通对象的响应式代理. 响应式转换是深层的, 会影响对象内部所有嵌套的属性, 基于es2015的proxy实现, 返回的代理对象不等于原始对象.
```js
const obj = reactive({count:0})
```

### `ref`

`ref`接受一个参数值, 并返回一个响应式且可改变的ref对象. ref对象拥有一个指向内部值的单一属性`.value`. 如果传入ref的是一个对象, 将调用`reactive`方法进行深层响应转换.
```js
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```
* 当ref作为渲染上下文的属性返回, 在模板中使用时, 会自动解开, 无需额外输入`.value`
* 当ref作为reactive对象的property被访问和修改时, 也自动解开,
```js
const count = ref(0)
const state = reactive({
    count
})
console.log(state.count) // 0
state.count = 1
console.log(count.value) // 1
```

> 当嵌套在reactive Object中时, ref才会解套, 从Array或Map等原生集合访问ref时, 不会自动解套

### `computed`

传入一个getter函数, 返回一个默认不可手动修改的ref对象.
```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 报错
```
传入一个拥有`get`和`set`函数的对象,可创建一个可以手动更改的计算状态
```js
const count = ref(1)
const plusOne = computed({
    get: () => count.value + 1,
    set: (val) => {
        count.value = val - 1
    }
})
```

### `readonly`
传入一个对象或ref, 返回一个原始对象的**只读**代理, 一个只读代理是深层的, 对象内部任何嵌套的属性也是只读的.
```js
const original = reactive({count: 0})
const copy = readonly(original)

```

### `watchEffect`
立即执行传入的函数, 并响应式追踪其依赖. 并在其依赖变更时重新运行该函数.
```js
const count = ref(0)
watchEffect(() => console.log(count.value))
```
* 停止监听
当`watchEffect`在组件的`setup`函数或生命周期被调用时, 侦听器会被链接到该组件的声明周期, 并在组件卸载时自动停止. 在一些情况下也可以显示调用返回值以停止监听
```js
const stop = watchEffect(() => {})

stop()
```
* 清除副作用
`watchEffect`传入的函数可以接受一个`onInvalidate`函数作入参, 用来注册清理失效时的回调.当以下情况发生时, 这个**失效回调**会被触发.  
  * `watchEffect`函数即将重新执行
  * 侦听器被停止, 也就是上文说到的停止监听情况. 
```js
const id = ref(0)
watchEffect(onInvalidate => {
    const token = asyncOperation(id.value)
    // id改变 或 停止监听时.
    onInvalidate(() => {
        token.cancel()
    })
})
```

* 副作用刷新时机
Vue会缓存副作用函数, 并异步刷新, 可以避免同一个tick中多个状态改变, 导致重复调用. 核心的具体实现是, 组件的更新函数也是一个被监听的副作用, 当副作用函数进入队列时, 会在所有组件更新后执行.

> 注意: 初始化运行是在组件`mounted`之前执行的, 如果希望在编写副作用函数时访问dom或模板ref,请在`onMounted`中进行.
```js
onMounted(() => {
    watchEffect(() => {
        // 这里可以访问到DOM或者 template refs
    })
})
```
如果副作用函数需要同步在组件更新之前重新执行, 可以传递一个拥有`flush`属性的对象作为选项, 默认为`post`, 同步为`sync`, 更新之前运行为`pre`
```js
// 同步运行
watchEffect(() => {}, {flush: 'sync'})
// 组件更新之前运行
watchEffect(() => {}, {flush: 'pre'})
```

* 侦听器调试
`onTrack`和`onTrigger`选项可用于调试侦听器的行为
  * 当一个reactive对象属性或一个ref作为依赖被追踪时, 将调用`onTrack`
  * 依赖项变更导致副作用被触发时, 调用`onTrigger`
这两个回调都接受一个包含有关依赖项信息的调试器事件.
```js
watchEffect(() => {},{
    onTrigger(e) {
        debugger
    }
})
```

### `watch`
`watch`等效于 2.x中的`watch选项`, watch需要侦听特定的数据源, 并在回调函数中执行副作用. 默认情况是懒执行的.

* 与`watchEffect`相比, `watch`可以
  * 懒执行副作用
  * 更明确依赖的状态
  * 访问侦听状态变化前后的值 

* 侦听数据源
侦听器的数据源可以是一个拥有返回值的getter函数, 也可以是ref
```js
// 侦听一个getter
const state = reactive({count: 0})
watch(()=>state.count, (count,preCount) => {}

// 侦听一个ref
const count = ref(0)
watch(count, (count,preCount) => {})

// 侦听多个数据源
watch([fooRef,barRef], ([foo, bar], [preFoo, preBar]) => {})
```

### 生命周期钩子函数
`onMounted`, `onUpdated`, `onUnmounted`. 这些钩子注册函数只能在`setup`期间同步使用. 因为他们依赖于内部的全局状态来定位当前组件实例, 组件实例上下文也是在生命周期钩子同步执行期间设置的, 因此, 在卸载组件时, 在生命周期钩子内部同步创建的侦听器和计算状态也将自动删除
* 与2.x生命周期相对相应的组合式API  

|2.x|composition API|
|---|---------------|
|beforeCreate | 使用 setup()|
|created | 使用 setup()|
|beforeMount | onBeforeMount|
|mounted | onMounted|
|beforeUpdate | onBeforeUpdate|
|updated | onUpdated|
|beforeDestroy | onBeforeUnmount|
|destroyed | onUnmounted|
|errorCaptured | onErrorCaptured|

* 新增的钩子函数
    * onRenderTracked
    * onRenderTriggered
两个函数都接受一个`DebuggerEvent`,与`watchEffect`参数选项中的`onTrack`和`onTrigger`蕾西
```js
export default {
    onRenderTriggered(e) {
        // 检查哪个依赖项导致组件重新渲染. 
        debugger
    }
}
```

### 依赖注入
`provide`和`inject`提供依赖注入, 且只能在当前活动组件实例的`setup`调用.
```js
import { provide, inject } from 'vue'

const ThemeSymbol = Symbol()
const Ancestor = {
    setup() {
        provide(ThemeSymbol, 'dark')
    }
}
const descendent = {
    setup() {
        const theme = inject(ThemeSymbol, 'light' /* optional default value */)
        return {
            theme
        }
    }
}
```

`inject` 接受一个可选的默认值作为第二个参数, 如果未提供默认值, 并且在provide上下文中未找到该属性, 则`inject`返回`undefined`

* 注入的响应式.
可以使用ref来保证`provide`和`inject`之间值的响应, 如果注入一个响应式对象, 他的状态变化也可以被监听
```js
// 提供者：
const themeRef = ref('dark')
provide(ThemeSymbol, themeRef)

// 使用者：
const theme = inject(ThemeSymbol, ref('light'))
watchEffect(() => {
  console.log(`theme set to: ${theme.value}`)
})
```

### 模板Refs

当使用组合式API时, reactive refs和template refs的概念是统一的. 为了获得对模板元素或组件实例的引用, 可以在setup中声明一个ref并返回它.
```vue
<template>
    <div ref="root"></div>
</template>
<script>
    import { ref, onMounted } from 'vue'
    export default {
        setup() {
            const root = ref(null)
            onMounted(() => {
                console.log(root.value) // <div>
            })
            return {
                root
            }
        }
    }
</script>
```



