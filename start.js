// start
// 1
// 2
// 3
// 4
// 5
// 6
// // xhr
// promise1
// async
// catch1
// setImmediate

// loop6

// timeout2
// timeout2_promise
// timeout2_then
// timeout1
// timeout1_promise
// timeout1_then
// loop6
// loop6
// loop6
// loop6
// 这个列子里面，包含了宏任务，微任务，分别看看浏览器和node 打印的结果
console.log(1)
// 栈
setTimeout(function(){
    console.log(2)
    // 微任务
    Promise.resolve(100).then(function(){
        console.log('promise')
    })
})
// 栈
let promise = new Promise(function(resolve, reject){
    console.log(7)
    resolve(100)
}).then(function(data){
    // 微任务
    console.log(data)
})
// 栈
setTimeout(function(){
    console.log(3)
})
console.log(5)