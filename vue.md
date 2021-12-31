
[vue原理](https://juejin.cn/post/6844903894301016072)


## createComputedGetter
- 流程
mountCompoent ->
渲染watcher(new Watcher()) ->
computedGetter ->(computedWatcher -> this.get() -> userDef.get)


## vnode
渲染器 render(vnode, container) 渲染组件，挂载组件
h 创建vnode
组件render函数 组件实例方法,输出vnode

- 函数式组件：
是一个纯函数
没有自身状态，只接收外部数据
产出 VNode 的方式：单纯的函数调用

- 有状态组件：
是一个类，可实例化
可以有自身状态
产出 VNode 的方式：需要实例化，然后调用其 render 函数


## new Vue过程
- this._init: 合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher 

- vm.$mount(vm.$options.el): 把 el 或者 template 字符串转换成 render 方法, 

- mountComponent(this, el, hydrating): vm.$el = el,new Watcher(), vm._update(vm._render(), hydrating)

- vm._render(): vnode = render.call(vm._renderProxy, vm.$createElement)

- _createElement: **children 的规范化**, children 变成了一个类型为 VNode 的 Array; **new VNode()**

- createComponent(生成组件vnode): 
1、Ctor = baseCtor.extend(Ctor):构造一个 Vue 的子类,把一个纯对象转换一个继承于 Vue 的构造器 Sub 并返回,然后对 Sub 这个对象本身扩展了一些属性，如扩展 options、添加全局 API 等；并且对配置中的 props 和 computed 做了初始化工作
2、安装组件钩子函数
3、实例化 VNode

- _update: vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)

- createElm: 创建占位元素vnode.elm, 递归createElm children, 将children appendChild到占位元素, **invokeCreateHooks**, 将占位元素insert到真实的parentElm

- createComponent: 执行init，实例化组件实例createComponentInstanceForVnode,child.$mount()


## 合并配置
- initInternalComponent: 内部通过 new Sub(options) 实例化子组件
$options包含:
  1.Vue.options(构造函数的options.initGlobalAPI: components, directives, filters, _base ), 
  2.子组件options(Ctor = baseCtor.extend(Ctor))
  3.InternalComponentOptions(parent, _parentVnode, propsData, _parentListeners, _renderChildren , _componentTag  )

- mergeOptions: 外部我们的代码主动调用 new Vue(options) 的方式实例化一个 Vue 对象
$options包含: 
  1.Vue.options(构造函数的options.initGlobalAPI: components, directives, filters, _base ), 
  2.new Vue(options)(外部调用new vue方法传的options)



# vue原理
## new Vue构造函数 
```
function Vue(options) {
  ...
  this._init(options)
}
// 初始化一些原型方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```
### _init 进行初始化
```
let uid = 0

Vue.prototype._init = function(options) {

  const vm = this
  vm._uid = uid++  // 唯一标识

  vm.$options = mergeOptions(  // 合并options
    resolveConstructorOptions(vm.constructor),
    options || {},
    vm
  )
  ...
  // 开始一系列的初始化
  initLifecycle(vm) // 确认组件的父子关系和初始化某些实例属性
  initEvents(vm) // 将父组件在使用v-on或@注册的自定义事件添加到子组件的事件中心中
  initRender(vm) // 挂载可以将render函数转为vnode的方法
  callHook(vm, 'beforeCreate')
  initInjections(vm) // 让子组件inject的项可以访问到正确的值
  initState(vm) // 将组件定义的状态挂载到this下
  initProvide(vm) // 初始化父组件提供的provide依赖
  callHook(vm, 'created')
  ...
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}
```

问题: inject时defineReactive作用

## 组件挂载
vm._update(vm._render())

### vm._render
普通元素节点转vnode 
直接new VNode

组件转为vnode 
将组件对象转为Vue的子类baseCtor.extend(Ctor) 再new VNode 并将组件信息保存进vnode

### vm._update
```
export function createPatchFunction(backend) { 
  ...

  return function (oldVnode, vnode) {  // 接收新旧vnode

    const insertedVnodeQueue = []
    ...
    const oldElm = oldVnode.elm  //包装后的真实Dom <div id='app'></div>
    const parentElm = nodeOps.parentNode(oldElm)  // 首次父节点为<body></body>

    createElm(  // 创建真实Dom
      vnode, // 第二个参数
      insertedVnodeQueue,  // 空数组
      parentElm,  // <body></body>
      nodeOps.nextSibling(oldElm)  // 下一个节点
    )

    return vnode.elm // 返回真实Dom覆盖vm.$el
  }
}
```
- 1、元素节点生成Dom:
简单来说就是由里向外的挨个创建出真实的Dom，然后插入到它的父节点内，最后将创建好的Dom插入到body内，完成创建的过程

```
function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) { 
  ...
  const children = vnode.children  // [VNode, VNode, VNode]
  const tag = vnode.tag  // div

  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return  // 如果是组件结果返回true，不会继续，之后详解createComponent
  }

  if(isDef(tag)) {  // 元素节点
    vnode.elm = nodeOps.createElement(tag)  // 创建父节点
    createChildren(vnode, children, insertedVnodeQueue)  // 创建子节点
    insert(parentElm, vnode.elm, refElm)  // 插入

  } else if(isTrue(vnode.isComment)) {  // 注释节点
    vnode.elm = nodeOps.createComment(vnode.text)  // 创建注释节点
    insert(parentElm, vnode.elm, refElm); // 插入到父节点

  } else {  // 文本节点
    vnode.elm = nodeOps.createTextNode(vnode.text)  // 创建文本节点
    insert(parentElm, vnode.elm, refElm)  // 插入到父节点
  }

  ...
}
```
- 2. 组件VNode生成Dom
new vnode.componentOptions.Ctor(options)
child.$mount(undefined)
vm._update(vm._render())
```
function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data;
  if (isDef(i)) {
    if (isDef(i = i.hook) && isDef(i = i.init)) {
      i(vnode)  // init已经完成
    }

    if (isDef(vnode.componentInstance)) {  // 执行组件init时被赋值

      initComponent(vnode)  // 赋值真实dom给vnode.elm

      insert(parentElm, vnode.elm, refElm)  // 组件Dom在这里插入
      ...
      return true  // 所以会直接return
    }
  }
}
```

### diff算法(双端对比)
```
function sameVnode (a, b) {  // 是否是相同的VNode节点
  return (
    a.key === b.key && (  // 如平时v-for内写的key
      (
        a.tag === b.tag &&   // tag相同
        a.isComment === b.isComment &&  // 注释节点
        isDef(a.data) === isDef(b.data) &&  // 都有data属性
        sameInputType(a, b)  // 相同的input类型
      ) || (
        isTrue(a.isAsyncPlaceholder) &&  // 是异步占位符节点
        a.asyncFactory === b.asyncFactory &&  // 异步工厂方法
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
```
当判断两个节点为相同节点时，进入patchVnode
核心diff为新旧节点均有多个子节点，进行updateChildren：
首选进行四次快速查找:
1、新开始和旧开始节点比对
2、旧结束和新结束节点比对
3、旧开始和新结束节点比对
4、旧结束和新开始节点比对
再进行 key值查找

## 响应式原理
问题：Watcher Observer是什么
每个key的dep被闭包保存在Object.defineProperty里
数组的依赖收集还是在get方法里，不过依赖的存放位置会有不同，不是在defineReactive方法的dep里，而是在Observer类中的dep里，依赖的更新是在拦截器里的数组异变方法最后手动更新的。

Dep Observer Watcher三者的关系
Observer-数据的观察者
Dep-依赖管理
Watcher-数据的订阅者

Watcher分类
1、render-watcher
对象
initData -> observe -> new Observer() -> defineReactive -> Object.defineProperty(定义get、set) -> 
new Watcher(vm, updateComponent) -> this.get()-> this.getter() -> updateComponent -> 触发依赖收集 ->
get() -> dep.depend() -> 触发派发依赖 -> set() -> dep.notify() ->  watcher.run() -> updateComponent

数组
对象的依赖收集在数据属性的get的dep，依赖派发在set
数组的依赖收集在数据属性的get里赋值给Observer的dep(childOb.dep.depend()),依赖派发在数组变异方法触发ob.dep.notify()
(数组的依赖收集还是在get方法里，不过依赖的存放位置会有不同，不是在defineReactive方法的dep里，而是在Observer类中的dep里，依赖的更新是在拦截器里的数组异变方法最后手动更新的。)

2、user-watcher
initWatch -> createWatcher -> vm.$watch -> new Watcher(vm, expOrFn, cb, options) -> this.get() -> this.getter -> 读取数据触发get收集user-watcher依赖 -> dep.depend() -> 触发派发依赖 -> set() -> dep.notify() ->  watcher.run() -> cb.call(this.vm, value, oldValue)
注：这里数据会收集user-watcher和render-watcher

3、computed-watcher
initComputed -> new Watcher(vm, getter, noop, {lazy: true}) -> defineComputed -> Object.defineProperty -> createComputedGetter -> 
watcher.evaluate() ->  this.get() -> this.getter.call(vm, vm) -> 访问callback读取到依赖的数据 -> 依赖的数据收集computed-watcher ->
watcher.depend() -> 计算属性内能访问到的响应式数据的dep收集当前的render-watcher -> set() -> 触发computed-watcher和render-watcher

注：这里数据会收集computed-watcher和render-watcher


## transition组件原理
[Vue源码解析之transition(一)](https://juejin.cn/post/6879691016317141005)

### src\platforms\web\runtime\components\transition.js
- 组件

将transition组件传入的属性（prop和事件）赋值给真实子节点，并用render函数返回子节点

### src\platforms\web\runtime\modules\transition.js
- js逻辑
输出create/active/remove钩子，提供给组件patch的过程中调用

transition组件只是对props与几个回调函数做了处理，将其绑定在真实子元素上。
在patch过程中会触发create/activate/insert/remove钩子，这些hook存储了了用户及组件定义的钩子函数，当组件钩子触发的时候，定义的回调函数也被触发了。
由这些回调函数通过给元素在不同时期添加/删除不同的class，通过css来添加过渡效果。


## vue3新特性
组合式api
Teleport
多个v-model
支持多根节点组件，即片段
vue3的v-if 会拥有比 v-for 更高的优先级,而vue2 v-for 会优先作用
单文件组件 <style scoped> 现在可以包含全局规则或只针对插槽内容的规则

## vue3+ts学习问题
setup规范写法 看到有些人在setup写一堆代码
vue3结合ts
options api +ts 如何写
ts声明文件
vue3的vuex和router
