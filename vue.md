
[vue原理](https://zhuanlan.zhihu.com/p/99014242)


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

