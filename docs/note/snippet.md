---
title: 工具函数/代码片段
---

## 闭包重载
```js
/**
* 利用闭包实现js重载
* @param target 目标对象
* @param name 添加到对象的方法名
* @param fn 函数体
*
*/
function overload (target, name, fn) {
  var old = target[name]
  target[name] = function () {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments)
    } else if (typeof old === 'function') {
      return old.apply(this, arguments)
    }
  }
}
```

## 防抖
```js
/**
*  防抖
*  @param fn 函数体
*  @param delay 延迟时间
*
*/
function debounce (fn, delay) {
  delay = delay || 500
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
  }
}
```

## 节流
```js
/**
*  节流
*  @param fn 函数体
*  @param delay 延迟时间
*  
*/  
function throttle (fn, delay) {
  delay = delay || 500
  let timer, last
  return function () {
    if (last && now - last < delay) {
      if (!timer) {
        timer = setTimeout(() => {
          last = now
          fn.apply(this, arguments)
          clearTimeout(timer)
          timer = null
        })
      }  
    } else {
      last = now
      fn.apply(this, arguments)
    }
  }
}
```

## 闭包输出 0 1 2 3 4
```js
/**
*  闭包输出 0 1 2 3 4
*  每隔 1s 输出一个数字
*  利用自执行函数
*/
function closure() {
  for(var i = 0; i < 5; i++){
    (function(i) {
      setTimeout(() => {
        console.log(i)
      }, i * 1000)
    })(i)
  }
}
/**
*  闭包输出 0 1 2 3 4
*  每隔 1s 输出一个数字
*  利用let
*/
function closure2 () {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
}
```

## 格式化时间
```js
/**
*  格式化时间
*  @param date 时间
*/
function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}
```

## image请求
```js
/**
*  Image Beacom
*  @param apiUrl 发送的接口请求
*  @param params 具体发送数据
*/
function beaconAction(apiUrl, params) {
  let _params = typpeof params === "string" ? params : JSON.stringify(params)
  let img = new Image(1,1)
  let src = `${apiUrl}?${_params}`
  img.src = src
  return new Promise((resolve, reject) => {
    img.onload = function () {
      resolve({ code: 200, data: 'success!' })
    }
    img.onerror = function (e) {
      reject(new Error(e.error))
    }
  })
}
```


## 简易版 Function.prototype.bind
```js
Function.prototype.bind = function (context) {
    var self = this;
    return function () {
        return self.apply(context, arguments);
    };
};
var obj = {name: '前端'};
var func = function () {
    console.log(this.name);
}.bind(obj);
func();
```
## 深拷贝
```js
function type(value) {
  return Object.prototype.toString.call(value).split(" ")[1].slice(0, -1).replace(/^[A-Z]{1}/, p => p.toLowerCase())
}
function deepClone(target){
  let res = null

  if(type(target) === 'array') {
    res = []
    target.forEach(item => {
      res.push(deepClone(item))
    })
  }
  
  if(type(target) === 'object'){
    res = {}
    Object.keys(target).forEach(key => {
      res[key] = deepClone(target[key])
    })
  }

  return res || target
}
```