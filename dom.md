## DOM
### 节点类型 nodeType
Node.DOCUMENT_NODE(9) 文档类型
Node.ELEMENT_NODE(1) 元素类型
Node.TEXT_NODE(3) 文本类型
Node.COMMENT_NODE(8) 注释类型
Node.ATTRIBUTE_NODE(2) 属性类型(不被认为是文档树的一部分)

### 节点关系
childNodes、parentNode、previousSibling、nextSibling、firstChild、lastChild

### 操作节点
appendChild()、insertBefore()、replaceChild()、removeChild() // 需取得父节点
cloneNode()、normalize()

### 查找元素
document.getElementById
document.getElementsByTagName
document.getElementsByName
document.getElementsByClassName
document.querySelector(静态)
document.querySelectorAll(静态)

### 属性
getAttribute()、setAttribute()和 removeAttribute()

### 样式
div.style


### 创建节点
document.createElement
document.createTextNode

### 插入
innerHTML
outerHTML
innerText
outerText

### 元素大小
scrollWidth,scrollHeight: 对象的实际内容的宽度，不包含边框滚动条，会随对象中内容超过可视区后而变大
clientWidth,clientHeight: 对象内容的可视区的宽度，不包含边框滚动条，会随对象显示大小的变化而改变。
offsetWidth,offsetHeight: 对象整体的实际宽度(占用的所有可见空间)，包含边框滚动条，会随对象显示大小的变化而改变

### 窗口大小
innerWidth,innerHeight: 页面视图区的大小(包含滚动条)
outerWidth,outerHeight: 浏览器窗口本身的尺寸

## 思考
querySelectorAll 方法与getElementsBy 系列方法区别


## 事件
UI事件
load、unload、error、resize、scroll

焦点事件
focus、blur

鼠标与滚轮事件
click、dblclick、mousedown、mouseup、mouseenter、mouseleave、mousemove、mouseout、mouseover

键盘与文本事件
keydown、keypress、keyup

复合事件
compositionstart、compositionupdate、compositionend

变动事件(DOM)

HTML5 事件(补充)
beforeunload、DOMContentLoaded、readystatechange、 pageshow 和 pagehide、hashchange

触摸与手势事件
touchstart、touchmove、touchend