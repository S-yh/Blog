---
title: 数据结构/算法
---

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

## 数组拆分
数组arr = [a1,a2,a3,b1,b2,b3,c1,c2,c3] 转化为 [a1,b1,c1],[a2,b2,c2],[a3,b3,c3]
```js
function rangeArr(arr) {
    let result = []
    arr.forEach(item => {
        let i = /\d+/.exec(item)[0]
        result[i] ? result[i].push(item) : result[i] = [item]
    })
    return result.filter(Boolean)
}
```

## 货币格式化
```js
1.
function formatMoney(num) {
    return num.toString().split('').reverse((pre, next, index) => {
        return ((index % 3) ? next: (next + ',')) + pre
    })
}
2. (1231231241).toLocaleString('en-US')
```

## 循环队列
```js
function MyCircularQueue(k) {
    this.queue = Array(k)
    this.head = -1
    this.tail = -1
    this.size = k
}

MyCircularQueue.prototype.enQueue = function (value) {
    if(this.isFull()) return false
    if(this.isEmpty()) this.head = 0
    this.tail = (this.tail + 1) % this.size
    this.queue[this.tail] = value
    return true
}
MyCircularQueue.prototype.deQueue = function () {
    if(this.isEmpty()) return false
    if(this.head === this.tail) this.head = this.tail = -1
    else this.head = (this.head + 1) % this.size
    return true
}
MyCircularQueue.prototype.Front = function () {
    return this.isEmpty() ? -1 : this.queue[this.head]
}
MyCircularQueue.prototype.Rear = function () {
    return this.isEmpty() ? -1 : this.queue[this.tail]
}
MyCircularQueue.prototype.isEmpty = function () {
    return this.head === -1
}
MyCircularQueue.prototype.isFull = function () {
    return this.head === (this.tail + 1) % this.size
}

```

## 岛屿数量
* 广度优先搜索(队列)
```js
var numIslands = function(grid) {
    if (!grid.length) {
        return 0;
    }
    let num = 0;
    let row = grid.length;
    let col = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                num++;
                let queue = [];
                grid[i][j] = 0;
                queue.push(i * col + j);
                while (queue.length) {
                    let now = queue.shift();
                    let nr = parseInt(now / col);
                    let nc = now % col;
                    if (nr - 1 >= 0 && grid[nr - 1][nc] == 1) {
                        grid[nr - 1][nc] = 0;
                        queue.push((nr - 1) * col + nc);
                    }
                    if (nr + 1 < row && grid[nr + 1][nc] == 1) {
                        grid[nr + 1][nc] = 0;
                        queue.push((nr + 1) * col + nc);
                    }
                    if (nc - 1 >= 0 && grid[nr][nc - 1] == 1) {
                        grid[nr][nc - 1] = 0;
                        queue.push(nr * col + nc - 1);
                    }
                    if (nc + 1 < col && grid[nr][nc + 1] == 1) {
                        grid[nr][nc + 1] = 0;
                        queue.push(nr * col + nc + 1);
                    }
                }
            }
        }
    }
    return num;
};

```
* 深度优先搜索(递归)
```js
var numIslands = function(grid) {
    if(!grid.length){
        return 0;
    }
    let num = 0;
    let row = grid.length;
    let col = grid[0].length;
    let loop = (x, y) => {
        if(grid[x][y] == 1){
            grid[x][y] = 0;
            x > 0 && loop(x - 1, y);
            x < row - 1 && loop(x + 1, y);
            y > 0 && loop(x, y - 1);
            y < col - 1 && loop(x, y + 1);
        }
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 1){
                num++;
                loop(i, j);
            }
        }
    }
    return num;
};

```

## 转盘锁
```js
var openLock = function(deadends, target) {
    /**密码锁的密码个数 */
    const limits = target.length;
    /**过滤集合 */
    let close = new Set(deadends);
    let start = new Array(limits).fill("0").join("");
    if(close.has(start)){
        return -1;
    }
    /**队列 先进先出 */
    let queue = [start];
    close.add(start);
    /**最少转动次数 */
    let times = 0;
    while(queue.length) {
        /**当前轮次的个数 */
        //忽略过滤集合 第一轮由0000衍生出来8个  第二轮由第一轮8个衍生出来8*8=64个
        //只有遍历完当前轮次的个数，最少转动次数times才会加一
        let thisTimes = queue.length;
        while(thisTimes){
            thisTimes--;
            /**当前要衍变的值 */
            let curr = queue.shift();
            if(curr == target){
                return times;
            }
            let loop = limits;
            while(loop){
                loop--;
                let upNext = getNext(curr, loop, true);
                if(!close.has(upNext)){
                    close.add(upNext);
                    queue.push(upNext);
                }
                let downNext = getNext(curr, loop, false);
                if(!close.has(downNext)){
                    close.add(downNext);
                    queue.push(downNext);
                }
            }
        }
        times++;
    }
    return -1;
};
/**
 * @param {string} curr 当前要衍变的值
 * @param {number} num 演变位数
 * @param {boolean} isUp 是否向上衍变
 * @return {string}
 */
var getNext = (curr, num, isUp) => {
    let arr = curr.split("");
    let char = parseInt(arr[num]) + (isUp ? 1 : -1);
    if(char > 9) char = 0;
    if(char < 0) char = 9;
    arr[num] = String(char);
    return arr.join("");
}
```
