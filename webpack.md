### CommonsChunkPlugin


### loader
css-loader:解析css文件;css-loader会处理 import / require（） @import / url 引入的内容;最后导出一个数组
style-loader:通过一个JS脚本创建一个style标签，里面包含一些样式,插入到html页面中.此时css保存在js中

### extract-text-webpack-plugin
将css从js文件中抽离成单独的文件


### webpack缓存、优化
UglifyJsPlugin:请除未使用代码
CommonsChunkPlugin: 提取公共代码
import(): 路由懒加载
HashedModuleIdsPlugin: chunkhash稳定
ModuleConcatenationPlugin：作用域提升

### webpack3升webpack4


### moduleId、chunkId
moduleId：新增或删减依赖时，moduleId会发生变化，导致文件chunkhash变化，解决方式：HashedModuleIdsPlugin
chunkId：增删构建入口（页面），chunkId会发生变化，导致文件chunkhash变化，解决方式：NamedChunksPlugin


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
