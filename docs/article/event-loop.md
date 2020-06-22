---
title: Event Loop
sidebarDepth: 0
---

# JavaScript 事件循环

::: tip
事件循环从整体上决定了JavaScript代码的执行顺序
:::

JavaScript的特点就是单线程, 这个唯一的线程拥有唯一的一个**事件循环**. JavaScript代码的执行过程中, 除了依靠**函数调用栈**来处理函数的执行顺序, 还依靠**任务队列**来处理一些代码的执行. **任务队列**分为`macro-task(宏任务)`和`micro-task(微任务)`. 新标准中称为`task`和`jobs`  
* 宏任务大概包括: `script(整体代码)`, `setTimeout`, `setInterval`,`I/O`, `UI rendering`
* 微任务大概包括: `Promise`, `MutationObserver`  

`setTimeout`和`Promise`等称之为任务源.进入任务队列的是他们指定的具体执行任务.来自不通过任务源的任务会进入不同的任务队列. setTimeout和setInterval是同源的.
> setTimeout中的回调函数是进入任务队列的任务

**事件循环的顺序决定代码的执行顺序, 从script整体代码开始循环执行, 此时全局上下文进入函数调用栈, 之后不断的有同步函数进入调用栈,又不断清除, 直到调用栈清空只剩全局上下文, 接下来开始执行micro-task队列中的所有微任务. 直到所有可执行的微任务执行完毕之后. 循环再次从宏任务开始. 在marco-task队列中找到其中一个宏任务执行完毕. 并执行所有其产生的微任务. 如此循环反复执行下去.**
> 其中每一个任务的执行, 无论是marco-task 还是 micro-task 都是借助函数调用栈来完成的.

> 其中遇到`setTimeout`定时任务时. 会将其加入宏任务中的定时器队列, 当其出队的时候. 如果没到时间则将其加入到下一个事件循环中, 直到到达指定时间. 才会将其出队. 

