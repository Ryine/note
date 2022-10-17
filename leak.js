// let leakObject =null
// let count =0
// setInterval(function testMemoryLeak(){
// const originLeakObject = leakObject
// const unused =function(){
// if(originLeakObject){
//       console.log('originLeakObject')
// }
// }
//   leakObject ={
//     count:String(count++),
//     leakStr:new Array(1e7).join('*'),
//     leakMethod:function(){
//       console.log('leakMessage')
// }
// }
// },1000)

// function test () {
//   let a = 1
//   return function () {
//     console.log(a)
//   }
// }
// let result = test()
// console.log(result)

// function debounce (fn, delay) {
//   let timer = null
//   return function () {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.bind(this, arguments)
//     }, delay)
//     timer = null
//   }
// }
// function throttle () {
//   let timer = null
//   return function () {
//     if (timer) return
//     timer = setTimeout (() => {
//       fn.bind(this, arguments)
//     })
//     timer = null
//   }
// }
// let a = 1
// function test () {
//   console.log(a)
// }


process.nextTick(function () {
  console.log('nextTick延迟执行1');
});
process.nextTick(function () { 
  console.log('nextTick延迟执行2');
});
// 加入两个setImmediate()的回调函数
setImmediate(function () {
  console.log('setImmediate延迟执行1'); 
  // 进入下次循环 
  Promise.resolve().then(() => {
    console.log('then')
  })
  process.nextTick(function () {
      console.log('强势插入');  
  });
});
setImmediate(function () {
  console.log('setImmediate延迟执行2'); 
});

console.log('正常执行');


// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
// 入参:需要防抖的函数，延迟时间
// 返回值：防抖后的函数
function debounce(fn,delay){
  let timer = null //借助闭包
  return function() {
    // 如果setTimeout的n秒内存在定时器，则清除定时器,重新计时
      if(timer){
          clearTimeout(timer) 
      }
      // 保存定时器ID，以便在清除定时器时使用
      timer = setTimeout(fn,delay) // 简化写法
  }
}
// 执行栈 debounce -> setTimeout -> showTop
// 然后是旧代码
function showTop  () {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条位置：' + scrollTop);
}
// window.onscroll = debounce(showTop,1000) // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置


class Event {
  constructor() {
    this.clientList = []
  }
  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn); // 订阅的消息添加进缓存列表
  }
  trigger() {
    let key = Array.prototype.shift.call(arguments), // (1);
    fns = this.clientList[key]
    if (!fns || fns.length === 0) { // 如果没有绑定对应的消息
      return false
    }
    for (let i = 0; i < fns.length; i++) {
      let fn = fns[i]
      fn.apply(this, arguments) // (2) // arguments 是 trigger 时带上的参数
    }
  }
  remove(key, fn) {
    let fns = this.clientList[key];
    if (!fns) { // 如果 key 对应的消息没有被人订阅，则直接返回
      return false;
    }
    if (!fn) { // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
      fns && (fns.length = 0);
    } else {
      for (let l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
        let _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1); // 删除订阅者的回调函数
        }
      }
    }
  }
}
new Event()