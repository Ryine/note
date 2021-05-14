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

## 浮动
浮动元素同时处于常规流内和流外的元素。其中块级元素认为浮动元素不存在，而浮动元素会影响行内元素的布局，浮动元素会通过影响行内元素间接影响了包含块的布局。
对于行内元素：浮动元素之后的元素将围绕它，浮动元素之前的元素将不会受到影响。

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

## 布局
[各种常见布局实现](https://juejin.cn/post/6844903574929932301)

### 居中
1、position: absolute;top: 50%;left: 50%; + transform: translate(-50%,-50%); 
2、position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;（需有固定宽高）
3、flex
4、行内:height与line-height相等;text-align: center;vertical-align: middle;


### 两列布局
1、float
  float+margin
  float+float
  float+overflow
2、absolute
3、flex
4、Grid

### 三列布局
1、float
  float+margin
  float+overflow
2、flex
3、grid
4、absolute

### 全屏布局
flex




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
[Chromium网页加载过程简要介绍和学习计划](https://blog.csdn.net/luoshengyang/article/details/50414848)
[Chromium网页渲染机制简要介绍和学习计划](https://blog.csdn.net/Luoshengyang/article/details/50916769)
[【中字】像素的一生 Life of a Pixel - Steve Kobes(Chrome Team)](https://www.bilibili.com/video/BV12b411w78Y)
[Life of a Pixel 学习笔记](https://bengbu-yuezhang.github.io/2020/05/26/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93/)

<!-- 合成:
知识点：
位图
纹理
光栅化

Compositor工作环境：GPU

compositor与GPU关系：

合成器可以使用GPU来执行其绘制步骤。

CPU任务：带软件光栅化的位图；

GPU任务：

1，硬件栅格化中的纹理；

2，绘画是将图层组合成最终屏幕图像（单个位图）的合成器；

GPU工作过程：接收位图，转换成纹理，配合compositor合成一张位图，存储到window’s backbuffer

问题：
GPU有没有加速 -->

浏览器渲染过程模型演化：
DOM tree -> Render Object tree -> Render Layer tree -> Graphics Layer Tree -> CC Layer tree -> CC Pending Layer Tree -> CC Active Layer Tree
1: DOM tree的每个子节点都对应着一个html标签(并不是所有的HTML标签都是需要渲染的，例如script标签就不需要进行渲染)
2: 对于需要渲染的HTML标签，它们会关联有一个Render Object。这些Render Object会形成一个Render Object Tree。Render Object tree加上了样式
3: 为了便于执行绘制操作，具有相同坐标空间的Render Object会绘制在同一个Render Layer中。这些Render Layer又会形成一个Render Layer Tree
4: Render Layer被提升成合成层之后就会拥有一个Graphics Layer,而其他不是合成层的渲染层，则和其第一个拥有 GraphicsLayer 的父层共用一个
5、CC Layer tree是在Graphics Layer Tree创建的同时一并创建的，之间是一对一的
6、Layer tree进行paint后到 Pending Layer Tree
7、Pending Layer Tree进行光栅后激活成为Active Layer Tree

渲染过程：

parsing（解析HTML生成DOM树）-> style (生成样式规则模型) -> layout（生成布局对象）-> compositing update
（输入合成）-> paint（绘制）-> commit（提交）-> tiling（切割）-> raster（栅格化）-> draw quads -> display（显示到屏幕上）

渲染进程将HTML解析为为DOM树结构。
渲染引擎将CSS样式表解析为CSSOM，并计算出DOM节点的样式。
创建布局树，并计算元素的布局信息(遍历布局树，填充几何数据)。
对布局树进行分层，并生成分层树。
为每个图层生成绘制列表，并将其提交到合成线程。
合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。
合成线程发送绘制图块命令DrawQuad给浏览器进程。
浏览器进程根据DrawQuad消息生成页面，并显示到显示器上。

Performance工具：
性能问题:
1、Forced reflow(强制同步布局)

