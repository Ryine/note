## 关于height
height一般情况下子元素影响父元素，而且又分成若干种情况：

1、如果父元素设了height：父子互不影响。

2、如果父元素没有设height：
大部分情况下，子元素的盒子把父元素撑开到多高，那么父元素的height就是多高。也就是子元素的盒子高=父元素的height值。

子元素设置百分百比则相对于父元素的高度, 且父元素需要设置显性高度


## 关于width
1、width值是一般情况下父元素影响子元素，当父元素有overflow的时候父元素不影响子元素

2、width默认100%,相对父元素

3、img元素的宽高为自身

4、inline-block的宽高根据内容自适应

## BFC(块格式化上下文)
[学习 BFC (Block Formatting Context)](https://juejin.cn/post/6844903495108132877#heading-17)
[什么是BFC?](https://juejin.cn/post/6844903544726749198)

BFC:一块独立的渲染区域(BFC包含创建该上下文元素的所有子元素，但不包括创建了新BFC的子元素的内部元素)

BFC的创建方法:
根元素或其它包含它的元素；
浮动 (元素的float不为none)；
绝对定位元素 (元素的position为absolute或fixed)；
行内块inline-blocks(元素的 display: inline-block)；
表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
overflow的值不为visible的元素；
弹性盒 flex boxes (元素的display: flex或inline-flex)；

BFC的约束规则:
内部的Box会在垂直方向上一个接一个的放置
垂直方向的距离有margin决定(属于同一个BFC的两个相邻Box的margin会发生重叠，与方向无关)
每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
BFC的区域不会与float的元素区域重叠
计算BFC的高度时，浮动子元素也参与计算
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

### 浏览器渲染页面
#### 页面渲染流程:
处理HTML标记并构建DOM树。
处理CSS标记并构建CSSOM树。
DOM树与CSSOM树合并后形成渲染树Render Tree(只包含渲染网页所需的节点)。
layout布局（reflow自动重排）结算节点在设备视口内的确切位置和大小。
painting绘制（rasterizing栅格化）：结合layout将渲染树中的各个节点绘制到屏幕上。

#### 浏览器渲染页面时阻塞问题:
[根据浏览器渲染流程研究“阻塞”](https://juejin.cn/post/6844903881248522254#heading-0)
1、js脚本--JS 会阻塞后续 DOM 解析，需等待脚本下载完成并执行后才会继续解析
async:异步执行，异步下载完毕后就会执行，不确保执行顺序
defer:是延迟执行，在浏览器看起来的效果像是将脚本放在了body后面一样

2、css样式--css不阻塞DOM 解析,但阻塞页面渲染和js的执行
3、渲染知识
图像是不会阻塞页面的首次渲染
资源的下载一开始就开始 
浏览器在遇到<body>标签之前不会渲染页面的任何部分

#### 渲染原理
合成:

知识点：
位图
纹理
光栅化