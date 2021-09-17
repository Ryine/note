### CommonsChunkPlugin


### loader
css-loader:解析css文件;css-loader会处理 import / require（） @import / url 引入的内容;最后导出一个数组
style-loader:通过一个JS脚本创建一个style标签，里面包含一些样式,插入到html页面中.此时css保存在js中

### extract-text-webpack-plugin
将css从js文件中抽离成单独的文件


### webpack3缓存、优化
UglifyJsPlugin:压缩清除未使用代码
OptimizeCSSPlugin: 压缩css文件
CommonsChunkPlugin: 提取公共代码
import(): 路由懒加载
HashedModuleIdsPlugin: 固定moduleId, 保持chunkhash稳定
NamedChunksPlugin: 固定chunkId
ModuleConcatenationPlugin：作用域提升
CompressionWebpackPlugin: gzip压缩



### moduleId、chunkId
- moduleId：新增或删减依赖时，moduleId会发生变化，导致文件chunkhash变化，解决方式：HashedModuleIdsPlugin
新增模块时:
1、moduleId发生变化，会导致runtime代码发生变化，因为runtime 会因为现在包含一个新模块的引用
2、新增模块的chunk发生变化，因为代码发生变化
3、公共vendor发生变化，因为此时moduleId都变了

- chunkId：增删构建入口（页面），chunkId会发生变化，导致文件chunkhash变化，解决方式：NamedChunksPlugin
- 但在使用路由懒加载的情况下，你会发现NamedChunkPlugin并没什么用。自定义chunkName

runtime包含chunks 映射关系的 list
`
__webpack_require__.e = 
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.charset = 'utf-8';
script.async = true;
script.timeout = 120000;

script.src = __webpack_require__.p + "js/" + (
{ 
    "0": "vendor-async", 
    "1": "error-pages", 
    "2": "order", 
    "3": "intro", 
    "4": "wallet", 
    "5": "protocol", 
    "6": "price", 
    "7": "index", 
    "8": "vendor", 
    "9": "app" }[chunkId] || chunkId) + "." + 
    { "0": "0eb0d732700056f150e1", 
    "1": "8c67275330d13fc209a9", 
    "2": "45553336a1b7dc31bc20", 
    "3": "e491b79a2ed955e3444a", 
    "4": "046fc0a7f52d2141d1ef", 
    "5": "836c84e8c7f26f9acfd9", 
    "6": "5ea82c1e0bdfddd95f8e", 
    "7": "e518d88c6b268b2a3203", 
    "8": "b8d5632964b301ffe235", 
    "9": "cf9c1c58df298f555f6c" 
}[chunkId] + ".js";
`

问题：chunk里面有什么
chunk包含自身chunkId和引用的chunkId,还有模块Id及对应模块集合

# webpack分割策略
`
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks (module) {
    return (
      module.resource &&
      /\.js$/.test(module.resource) &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    )
  }
}),
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  minChunks: Infinity
}),
new webpack.optimize.CommonsChunkPlugin({
  name: 'app',
  async: 'vendor-async', // 即解决children:true时合并到entry chunks自身时初始加载时间过长的问题。async设为true时，commons chunk 将不会合并到自身，而是使用一个新的异步的commons chunk。当这个children chunk 被下载时，自动并行下载该commons chunk
  children: true, // children 可以用来把 entry chunk 创建的 children chunks 的共用模块合并到自身，但这会导致初始加载时间较长
  minChunks: 3
}),
`
### webpack3升webpack4
[手摸手，带你用合理的姿势使用webpack4（上）](https://juejin.cn/post/6844903652956569608#heading-14)

optimization.splitChunks代替原有的CommonsChunkPlugin
mini-css-extract-plugin代替extract-text-webpack-plugin
optimization.moduleIds代替HashedModuleIdsPlugin
optimization.chunkIds代替NamedChunksPlugin
增加mode：
development 模式下，默认开启了NamedChunksPlugin 和NamedModulesPlugin
production 模式下，由于提供了splitChunks和minimize, 同时 webpack 也会自动帮你 Scope hoisting 和 Tree-shaking

### webpack4

[SplitChunks插件用法详解](https://juejin.cn/post/6844904198023168013#heading-1)

SplitChunks默认分割策略：
`
optimization: {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
}
`
vue-cli3分割策略:
`
 cacheGroups: {
  defaultVendors: {
    name: `chunk-vendors`,
    test: /[\\/]node_modules[\\/]/,
    priority: -10,
    chunks: 'initial'
  },
  common: {
    name: `chunk-common`,
    minChunks: 2,
    priority: -20,
    chunks: 'initial',
    reuseExistingChunk: true
  }
}
`
### webpack原理
[干货！撸一个webpack插件(内含tapable详解+webpack流程)](https://juejin.cn/post/6844903713312604173#heading-2)
[webpack原理都不会？](https://github.com/Cosen95/blog/issues/48)
[webpack原理](https://juejin.cn/post/6844903614469636103#heading-2)
[Webpack tapable 使用研究](https://juejin.cn/post/6844903895584473096#heading-16)

- webpack 本质上就是一个插件集合，由 tapable 控制各插件在 webpack 事件流上运行

#### webapck构建流程：
初始化: 启动构建，读取与合并配置参数，实例化 Compiler,加载 Plugin
compile:开始编译,执行对象的 run 方法开始执行编译
make: 分析入口文件,创建模块对象
build-nodule: 模块构建,从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理(AST阶段)
seal: 封装构建结果,逐次对每个 module 和 chunk 进行整理，生成编译后的源码，合并，拆分，生成 hash
emit: 输出资源,在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

#### webpack打包后文件分析
