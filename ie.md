## IE11兼容问题
1、get请求后续会从浏览器缓存中读取，无法获取最新数据

2、本地下载问题：IE11不支持createObjectURL

3、使用babel6（transform-runtime模式）时，es6的实例方法不支持，需升级到babel7-core3