# ssr

## 概念
SSR（Server-Side-Rendering，服务器端渲染）:由服务端渲染出完整的页面返回浏览器

## 优点与缺点
好处:
更好的搜索引擎优化 (SEO)
更快的内容呈现

缺点:
开发一致性。浏览器特有的代码可以只用在特性的生命周期钩子里；一些外部的库在服务端渲染的应用里可能需要特殊的对待。

需要更多的构建设定和部署要求。不同于一个完全静态的 SPA 可以部署在任意静态服务器，一个服务端渲染的应用需要一个 Node.js 的环境。

更多的服务端负载。在 Node.js 中渲染一个完整的应用会比服务静态文件产生更密集的 CPU 运算。所以如果流量很高，请务必备好与其负载相对应的服务器并采取明智的缓存策略。

## 原理
[服务端渲染指南](https://v3.cn.vuejs.org/guide/ssr/introduction.html)


## ssr优化
缓存:页面缓存、组件缓存

## nuxt细节
[nuxt文档](https://www.nuxtjs.cn/guide)

nuxt渲染页面分为两个阶段, 服务端渲染和浏览器渲染,只有首屏是服务端渲染

nuxt服务端渲染时生命周期只有两个钩子函数created和beforeCreate两个钩子函数,

怎么样才能保证在服务端创建的app的状态和客户端创建app的状态保持一致呢？
  1、服务端获取数据，保存到服务端的store状态，以便渲染时候使用，并且还会保存到context的state中，而context的内容最终会保存到window中；
  2、在renderer中会在html代码中添加<script>window.__INITIAL_STATE__ = context.state</script>，在解析页面的时候会进行设置全局变量；
  3、在浏览器进行初始化Store的时候，通过window对象进行获取数据在服务端的状态，并且将其注入到store.state状态中，这样能够实现状态统一。（window对象作为中间媒介进行传递数据）


## 部署


### 镜像操作
docker login <host> -p <password> -u bill
docker build -t nuxt-app:v1 .
docker tag nuxt-app:v1 <host>/bill/nuxt-app:v1
docker push <host>/bill/nuxt-app:v1
docker images
docker images rm <your-image-name>

### k8s操作
kubectl delete -f nuxt-app.yaml
kubectl apply -f nuxt-app.yaml
kubectl expose deployment nuxt-app
kubectl exec -ti <your-pod-name>  -n <your-namespace>  -- /bin/sh
kubectl logs -f <pod_name> --tail=20

