## 模块
### commonjs模块
CommonJS 模块输出的是一个值的拷贝
运行时加载

循环依赖处理
CommonJS每个文件都是一个模块，第一次加载的时候会去执行该模块，当遇到循环依赖时，加载的时候会只加载已经执行并导出的部分

模块不会重复执行

### ES6模块
ES6 模块输出的是值的引用
编译时输出接口

模块不会重复执行

import 命令会被 JavaScript 引擎静态分析，优先于模块内的其他内容执行。
export 命令会有变量声明提前的效果。

循环依赖处理
发现循环依赖时，并不会继续执行下去,只生成一个引用
获取模块已经加载的当前的最新值

### forEach循环
forEach() 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，则传递给 callback 的值是 forEach() 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 shift()），之后的元素将被跳过

### 动态规划
[动态规划套路详解](https://juejin.cn/post/6844903916908331015#heading-11)

动态规划套路:
1、暴力的递归算法
2、带备忘录的递归解法
3、动态规划
通用思路:
1、定义dp数组
2、写出状态转移方程
3、代码实现

### 闭包

闭包是指有权访问另一个函数作用域中的变量的函数(闭包就是能够读取其他函数内部变量的函数)
(闭包只能取得包含函数中任何变量的最后一个值。别忘了闭包所保存的是整个变量对象，而不是某个特殊的变量)
[学习Javascript闭包（Closure）](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
参考资料:红宝书p73、p178

闭包的应用：
1、防抖节流
2、封装私有变量
`
function Person(){
    var name = 'default';
    this.getName:function(){
        return name;
    }
    this,setName:function(value){
        name = value;
    }
}
`
3、存储变量
a、缓存代理（设计模式-代理模式）
`
var proxyMult = (function(){
 var cache = {};
 return function(){
 var args = Array.prototype.join.call( arguments, ',' );
 if ( args in cache ){
 return cache[ args ];
 }
 return cache[ args ] = mult.apply( this, arguments );
 }
})();
`
b、单例模式
`
var getSingle = function( fn ){
 var result;
 return function(){
 return result || ( result = fn .apply(this, arguments ) );
 }
};
`
### js深浅拷贝
深拷贝考虑情况
考虑null
对象
数组
set
map
函数
循环引用
new Number生成的数字类型

### 垃圾回收&&内存泄漏
#### 垃圾回收算法
新生代：内存分半复制
老生代：标记清除、标记整理

#### 内存泄露原因
全局变量
闭包
引用没有清除（weakMap)
没有清理的 DOM 元素引用
window.addEventListener事件注册没有解绑(观察者模式)
缓存
队列-消费速度低于生产速度

- 怎么判断变量是否存活—可达性分析


### this
[JavaScript 的 this 原理](https://www.ruanyifeng.com/blog/2018/06/javascript-this.html)
[Javascript 的 this 用法](https://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

总的来说，this就是函数运行时所在的环境对象(this 永远指向最后调用它的那个对象)
this的指向:
1、普通的函数调用 (指向全局对象)
2、作为对象的方法调用 (隐式绑定;指向包含上下文)
3、作为构造函数调用 (指向新创建的对象)
4、显式绑定，call、apply
<!-- 5、匿名函数调用 -->
  <!-- 匿名函数的this是执行时的上下文(通常是window) -->
6、箭头函数
  定义时的父级执行上下文
<!-- 7、setTimeout的this指向 -->

### apply、call、bind
[this、apply、call、bind](https://juejin.cn/post/6844903496253177863#heading-0)

apply:在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值
apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。

call:在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值
call()方法接收参数：一个是在其中运行函数的作用域，剩余的是是若干个参数列表

bind:bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用,需要手动调用

bind的模拟实现:
Function.prototype.bind2 = function (context) {
  var self = this;
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs));
  }
}

### 设计模式
1、单例模式
典型应用：生成唯一的实例，比如登录浮窗
示例：
```
// 管理单例
var getSingle = function( fn ){
 var result;
 return function(){
   return result || ( result = fn.apply(this, arguments ) );
 }
};
// 创建对象
var createLoginLayer = function(){
  var div = document.createElement( 'div' );
  div.innerHTML = '我是登录浮窗';
  div.style.display = 'none';
  document.body.appendChild( div );
  return div;
}; 
var createSingleLoginLayer = getSingle( createLoginLayer );
```

2、策略模式
典型应用：表单校验
示例：
```
// 策略对象
var strategies = {
 "S": function( salary ){
 return salary * 4;
 },
 "A": function( salary ){
 return salary * 3;
 },
 "B": function( salary ){
 return salary * 2;
 }
};
// 应用策略
var calculateBonus = function( level, salary ){
 return strategies[ level ]( salary );
};
```

3、代理模式
典型应用：缓存代理可以为一些开销大的运算结果提供暂时的存储
示例：
```
// 计算方法
var mult = function(){
 var a = 1;
 for ( var i = 0, l = arguments.length; i < l; i++ ){
 a = a * arguments[i];
 }
 return a;
}; 
//  创建缓存代理
var createProxyFactory = function( fn ){
 var cache = {};
 return function(){
 var args = Array.prototype.join.call( arguments, ',' );
 if ( args in cache ){
 return cache[ args ];
 }
 return cache[ args ] = fn.apply( this, arguments );
 }
};
var proxyMult = createProxyFactory( mult )

```


4、迭代器模式
迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

5、发布-订阅模式
典型应用：事件模型
示例：
```
var Event = (function () {
    var clientList = {},
        listen,
        trigger,
        remove;
    listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = [];
        }
        clientList[key].push(fn);
    };
    trigger = function () {
        var key = Array.prototype.shift.call(arguments),
            fns = clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };
    remove = function (key, fn) {
        var fns = clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1);
                }
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }
})();
Event.listen('squareMeter88', function (price) { // 小红订阅消息
    console.log('价格= ' + price); // 输出：'价格=2000000'
});
Event.trigger('squareMeter88', 2000000); // 售楼处发布消息
```
6、模板方法模式
模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。
示例
```
var Beverage = function (param) {
      var boilWater = function () {
          console.log('把水煮沸');
      };
      var brew = param.brew || function () {
          throw new Error('必须传递 brew 方法');
      };
      var pourInCup = param.pourInCup || function () {
          throw new Error('必须传递 pourInCup 方法');
      };
      var addCondiments = param.addCondiments || function () {
          throw new Error('必须传递 addCondiments 方法');
      };
      var F = function () { };
      F.prototype.init = function () {
          boilWater();
          brew();
          pourInCup();
          addCondiments();
      };
      return F;
  };
    // 子类
    var Coffee = Beverage({
        brew: function () {
            console.log('用沸水冲泡咖啡');
        },
        pourInCup: function () {
            console.log('把咖啡倒进杯子');
        },
        addCondiments: function () {
            console.log('加糖和牛奶');
        }
    });
    var coffee = new Coffee();
    coffee.init(); 
```

7、适配器模式
适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。
适配器的别名是包装器（wrapper），这是一个相对简单的模式。在程序开发中有许多这样的场景：当我们试图调用模块或者对象的某个接口时，却发现这个接口的格式并不符合目前的需求。这时候有两种解决办法，第一种是修改原来的接口实现，但如果原来的模块很复杂，或者我们拿到的模块是一段别人编写的经过压缩的代码，修改原接口就显得不太现实了。第二种办法是创建一个适配器，将原接口转换为客户希望的另一个接口，客户只需要和适配器打交道。

8、装饰者模式
这种给对象动态地增加职责的方式称为装饰者（decorator）模式。装饰者模式能够在不改变对象自身的基础上，在程序运行期间给对象动态地添加职责。跟继承相比，装饰者是一种更轻便灵活的做法，这是一种“即用即付”的方式，比如天冷了就多穿一件外套，需要飞行时就在头上插一支竹蜻蜓，遇到一堆食尸鬼时就点开 AOE（范围攻击）技能。

典型应用:数据统计上报、插件式的表单验证
示例
```
Function.prototype.before = function( beforefn ){
 var __self = this; // 保存原函数的引用
 return function(){ // 返回包含了原函数和新函数的"代理"函数
 beforefn.apply( this, arguments ); // 执行新函数，且保证 this 不被劫持，新函数接受的参数
 // 也会被原封不动地传入原函数，新函数在原函数之前执行
 return __self.apply( this, arguments ); // 执行原函数并返回原函数的执行结果，
 // 并且保证 this 不被劫持
 }
}
Function.prototype.after = function( afterfn ){
 var __self = this;
 return function(){
 var ret = __self.apply( this, arguments );
 afterfn.apply( this, arguments );
 return ret;
 }
}; 

```




### class
class的实现是组合使用构造函数模式和原型模式
class的继承是用寄生组合式继承，只是多了一个Object.setPrototypeOf(subClass, superClass)
subClass.__proto__ = superClass

## 对象
### 创建对象
工厂模式
构造函数模式
原型模式
组合使用构造函数模式和原型模式(使用最广泛)
动态原型模式


### 原型链
原型属性:constructor、prototype、__proto__

实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有。

Object.create()

in： 对象上不管原型还是实例，可枚举，皆可访问到(不包含不可枚举)
hasOwnProperty： 实例上,论它是否可枚举(不包含原型)
Object.keys: 可枚举的实例属性(不包含原型)
getOwnPropertyNames: 实例属性，无论它是否可枚举(不包含原型)

创建对象最佳实践：组合继承, 结合构建函数模式和原型模式, 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性

### 继承
原型链继承:
```
// 父类
function SuperType(){
 this.property = true;
}
SuperType.prototype.getSuperValue = function(){
 return this.property;
};
// 子类
function SubType(){
 this.subproperty = false;
}
//继承了 SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
 return this.subproperty;
};
var instance = new SubType();
alert(instance.getSuperValue());
```

构造函数继承:
```
function SuperType(name){
 this.name = name;
}
function SubType(){
 //继承了 SuperType，同时还传递了参数
 SuperType.call(this, "Nicholas");

 //实例属性
 this.age = 29;
}
var instance = new SubType();
alert(instance.name); //"Nicholas";
alert(instance.age); //29 
```

组合继承：(最常用的继承模式)
使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承
```
function SuperType(name){
 this.name = name;
 this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
 alert(this.name);
function SubType(name, age){
 //继承属性
 SuperType.call(this, name);

 this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
 alert(this.age);
}; 
```

原型式继承:
借助原型可以基于已有的对象创建新对象
```
function object(o){
 function F(){}
 F.prototype = o;
 return new F();
} 
```
es5实现:Object.create()

寄生式继承
寄生组合式继承:最佳实现
```
function inheritPrototype(subType, superType){
 var prototype = object(superType.prototype); //创建对象
 prototype.constructor = subType; //增强对象
 subType.prototype = prototype; //指定对象
} 
function SuperType(name){
 this.name = name;
 this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
 alert(this.name);
};
function SubType(name, age){
 SuperType.call(this, name);

 this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
 alert(this.age);
};
```
### 事件循环

### promise
[手写promise](https://juejin.cn/post/6844903843507994632#heading-3)

### 防抖节流
防抖函数-在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
```
function debounce(fn, delay) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, delay);
  };
}
```
节流函数-规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
```
function throttle(fn, delay) {
  let timer;
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay)
  }
}
```

### 字符集与字符编码
[Unicode与JavaScript详解](http://www.ruanyifeng.com/blog/2014/12/unicode.html)
[字符编码笔记：ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

#### 字符集
字符集：是一个系统支持的所有抽象字符的集合。字符是各种文字和符号的总称，包括各国家文字、标点符号、图形符号、数字等。
常见字符集Unicode，每个字符有一个码点

#### 字符编码
规定字符码点在计算机怎么存储怎么表示

utf-32:定长;4个字节表示一个字符
utf-8:一种变长的编码方法，字符长度从1个字节到4个字节不等;中文常用字符3个字节, 辅助平面汉字占4个字节
utf-16:基本平面的字符占用2个字节，辅助平面的字符占用4个字节
ASCII:
GBK: 一个汉字占用2个字节，一个英文字母占用1个字节