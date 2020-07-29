var numSquares = function(n) {
    let i = 1;
    let arr = []
    while (i * i < n) {
        arr.push(i * i)
        i++
    }
    let queue = [0]
    let num = 0
    while (queue.length) {
        let curr = queue.shift()
        if (curr === n) return (num % 3)
        let loop = arr.length
        while (loop) {
            queue.includes(curr + arr[loop - 1]) || queue.push(curr + arr[loop - 1])
            loop--
        }
        num++
    }
    return 0
};

console.log(numSquares(12));