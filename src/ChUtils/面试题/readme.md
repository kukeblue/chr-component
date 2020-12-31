


## 算法

### 1. 冒泡排序

```
function bubbleSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    for(let i = 0; i <  arr.length ; i++) {
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){ //相邻两个元素作比较，如果前面元素大于后面，进行交换
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
```

## 框架

- recat diff原理 ok
- react hook原理 
- setstate 原理  ok
- react 优化方案
<br/><br/><br/>


## webpack
- plugins 和 loader的区别 ok
<br/><br/><br/>



## js
- promise
```
new Promise((resolve)) {
    http.get('url', function(result){
        resolve(result.id)
    })
}).then(function (id){
    console.log(id)
})

// 基础版本实现
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reson = undefined;

        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks= [];

        let resolve = (value) => {
            if(this.status === PENDING) {
                this.status = FULLFILLED;
                this.value = value
            }
        }

        let reject = (reason) => {
            if(this.status == PENDING) {
                this.status = REJECTED
                this.reason = reason;
            }
        }

        try {
            executor(resolve, reject) {

            }catch (error) {
                reject(error)
            }
        }

        then(onFulfilled, onRejected) {
            if(this.status == FULFILLED) {
                onFulfilled(this.value)
            }

            if(this.status === REJECTED) {
                onRejected(this.reason)
            }
        }
    }
}

```
- async / await 原理   ok
- bind 原理
- new 原理
- js数据类型  string number undefined null boolean object array function ok
- 强制转为number; parseInt() Number() parseFloat()   ok
- 创建子节点 createElemet appendChild insertbefore removechild ok
- children parent ok
- document.getElementById ok
- 判断变了类型的方法 typeof instanceof  Object.prototype.toString.call() constructor
- 原型链
1.js分为函数对象和普通对象，每个对象都有__proto__属性，但是只有函数对象才有prototype属性
2.Object、Function都是js内置的函数, 类似的还有我们常用到的Array、RegExp、Date、Boolean、Number、String
- 操作字符串方法
split splace  concat includes slice sub substring trim match
```
substring(start,end)返回指定下标间的字符，下标必须为正整数
substr(start,length)返回从指定下标开始的长度为length的字符，可以为负数
slice(start,end)返回指定下标间的字符，可以为负数
```
- call apply bind new
```
    Function.prototype.myApply = function(context) {
        context = context ? Object(context) : window
            context.fn = this
            let args = [...arguments][1]
            if (!args) {
                return context.fn()
            }
            let r = context.fn(args)
            delete context.fn;
            return r
        }

    Function.prototyep.bind = function(context) {
        let me = this
        return function() {
            return  me.apply(context)
        }
    }
```
- es6的新熟悉

- 谈谈类的继承
- 谈谈你所熟悉的设计模式




## 网络
1. 状态码   ok
200 请求成功
301 重定向
304 缓存
400 参数错误
403 拒绝
404 找不到
500 服务端错误
503 服务端错误


2. http协议的缓存机制  ok
强制缓存和对比缓存



3. keep-alive和多路复用的区别
4. http2.0的特性
5. 头部压缩原理
6. http握手
7. udp和tcp的区别
8. dns原理

## 浏览器相关
1. eventLoop  ok
2. 关键渲染路径
3. 加载原理    
4. DOM树和渲染树的区别
5. 回流和重绘

## 性能优化问题
1. 白屏优化方案  
2. 长列表优化方案

## css
1. css定位 static absolute relative fixed sticky