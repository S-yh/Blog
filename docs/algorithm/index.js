/** 动态规划 */

//  爬楼梯

var climbStairs = function(n) {
    let dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

console.log("爬楼梯:", climbStairs(3))

// 打家劫舍

var rob = function(nums) {
    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]
    if (nums.length == 2) return Math.max(nums[1], nums[0])
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return Math.max(dp[nums.length - 1], dp[nums.length - 2])
}

console.log("打家劫舍:", rob([2, 7, 9, 3, 1]))

// 最大正方形

var maxSquare = function(matrix) {
    if (matrix.length == 0) return 0

    let maxsqlen = 0
    let rowLen = matrix.length
    let colLen = matrix[0].length
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (matrix[row][col] === '1') {
                matrix[row][col] = 1
                if (row != 0 && col != 0) {
                    matrix[row][col] = Math.min(matrix[row - 1][col], matrix[row - 1][col - 1], matrix[row][col - 1]) + 1
                }
                maxsqlen = Math.max(maxsqlen, matrix[row][col])
            }
        }
    }

    return maxsqlen * maxsqlen
}

console.log("最大正方形面积:", maxSquare([
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '1'],
]));

// 零钱兑换

var coinChange = (coins, amount) => {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log("零钱兑换:", coinChange([1, 2, 5], 11))

// 不同路径

var uniquePaths = function(m, n) {
    if (m === 1 && n === 1) return 1
    let dp = new Array(m).fill(new Array(n))
    for (let i = 0; i < m; i++) dp[i][0] = 1
    for (let i = 0; i < n; i++) dp[0][i] = 1
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}

console.log("不同路径:", uniquePaths(7,3))

// 股票问题


/**  栈 */

// 两个栈实现队列

function MaxHeap(arr) {
    this.container = []
    if(Array.isArray(arr)) {
        arr.forEach(this.insert.bind(this))
    }
}

const swap = (arr, i, j) =>  {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

MaxHeap.prototype.insert = function (data)  {
    const { container }  = this
    container.push(data)
    let index = container.length - 1
    while(index) {
        let parent = Math.floor((index - 1) / 2)
        if(container[index] <= container[parent]){
            break
        }
        swap(container, index, parent)
        index = parent
    }
}
