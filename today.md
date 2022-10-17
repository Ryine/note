## 学习记录

- 20190903
vue函数组件

20191012
二叉堆
广度优先遍历

20191118
<!-- webpack配置 -->

20191119
协商缓存，强缓存

20191123
抽象组件


20200410
动态规划
https://juejin.im/post/5d556b7ef265da03aa2568d5
求解动态规划的核心问题是穷举.首先，动态规划的穷举有点特别，因为这类问题存在「重叠子问题」，如果暴力穷举的话效率会极其低下，所以需要「备忘录」或者「DP table」来优化穷举过程，避免不必要的计算。


20200418
事件循环、宏任务、微任务


20200424
私钥公钥加密 https协议: 数字证书、数字签名
特性：防窃听（会话秘钥）、防篡改（数字签名）、防冒充（数字证书）

20200426
typescript

20200529
line-height、vertical-align属性

## 计划
webpack基础配置
vue的webpack配置
vue打包优化(hash变化)

重排重绘
css3过渡




面试
计算机网络： 
1. http1.0 http1.1 http2.0 https 的区别
2. 对称加密和非对称加密的区别
3. tcp/ip协议
4. 偶尔会问到七层模型
c
HTML + css + 浏览器：
1. 重绘和回流
2. 水平垂直居中的多种方式
3. position三种方式的区别
4. 浏览器渲染流程
5. 浏览器缓存方式以及不同

js：
1. 闭包
2. 操作dom
3. 作用域
4. 原型链
5. this指向
6. promise
7. es6

框架：
1. vue 和 react 的区别
2. 虚拟dom树的作用
3. diff算法，vue/react的优化
4. 组件之间通讯方式
5. 循环生成dom的key值为什么不能用index
6. 生命周期钩子


select组件
单选-不可搜索触发过程
handleFocus -> this.$emit('focus', event); -> toggleMenu -> visible-> this.$refs.reference).focus() -> handleClose-> handleBlur

单选-可搜索触发过程
handleFocus -> this.$emit('focus', event); -> toggleMenu -> visible-> this.$refs.input.focus() -> handleClose-> handleBlur


可学习
umi、react
vue-cli4
egg
ts
微前端
leetcode
请求参数格式(2020-09-08)
redis
mongodb
mysql
socket.io(2020-09-15)
nuxt
小程序


关于nuxt
axios如何进去异步数据请求
meta如何设置seo


20210301
nginx
linux权限管理

20210302
linux
leetcode
