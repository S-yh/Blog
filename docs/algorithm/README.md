## 时间复杂度

* 一个算法中的语句执行次数称为语句频度或时间频度, 时间频度T(n)中, n称为问题的规模, 当n不断变化时, 时间频度T(n)也会不断变化, 但有时我们想知道它变化时呈现什么规律, 为此引入时间复杂度的概念, 算法的时间复杂度,也就是算法的时间度量, 记做: T(n) = O(f(n)), 他表示随问题规模n的增大, 算法执行时间的增长率和f(n)的增长率相同, 称作算法的渐进时间复杂度, 简称'时间复杂度', 这种表示方法称为 "大O符号表示法", 又称为渐进符号, 用于描述函数渐进行为的数学符号.
* 常见的时间复杂度量级有: 常数阶O(1), 线性阶O(n), 平方阶O(n²), 立方阶O(n³), 对数阶O(logn), 线性对数阶O(nlogn), 指数阶O(2^n)

## 堆
[参考](https://mp.weixin.qq.com/s/XG0hSN7I6LXNcpPJk7X2qA)  
堆有以下两个特点: 
* 是一颗完全二叉树, 这样实现的堆也被称为二叉堆
* 堆分为大顶堆和小顶堆
    * 大顶堆: 堆中节点的值都大于等于其子节点的值
    * 小顶堆: 堆中节点的值都小于等于其子节点的值  

一般对于二叉树来说每个节点是要存储左右子节点的指针，而由于完全二叉树的特点（叶子节点都在最后一层，并且这些叶子节点都是靠左排序的），用数组来表示它再合适不过，用数组来存储有啥好处呢，由于不需要存指向左右节点的指针，在这颗树很大的情况下能省下很多空间！


## 求一个数组的最大值: 
```js
Math.max.apply(null, arr)
```
## 判断一个单词是否是回文
```js
str === str.split('').reserve().join('')
```
## 数组去重
```js
Array.from(new Set(array))
[...new Set(array)]
```


## 交换变量
```js
a = a + b ; b = a - b ; a = a -b;
a = {a: b, b: a}
a = [a, b]
a = [b, b=a][0]
[a, b] = [b, a]
```

## 两数之和
```js
var twoSum = function(nums, target) {
    let maps = {}
    let loop = 0
    let diff = 0
    while (loop < nums.length) {
        diff = target - nums[loop]
        if (maps[diff] !== undefined) return [maps[diff], loop]
        maps[npms[loop]] = loop
        loop++
    }
}

//expect [0,1]
console.log(twoSum([2,7,11,15],9))
```