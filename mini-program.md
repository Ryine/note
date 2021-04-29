页面生命周期
onload 先，然后到onshow，最后onready

问题：
页面生命周期、组件生命周期
组件
事件:先捕获后冒泡，bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡，加capture表示捕获
小程序与客户端通信

第5章小程序的协同工作和发布
第7章性能优化

模板template
behaviors-相当于mixins
Component
1、在组件wxss中不应使用ID选择器、属性选择器和标签名选择器
2组件间关系
3、自定义组件扩展wx.uploadFile
rpx换算

var tr = document.getElementById('formId').querySelector("tr")
tr.style.display = "none"