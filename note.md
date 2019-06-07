router 的 base 属性是指在路由中添加一个前缀，而对于 index.html 具体引用的 js css 文件的路径，是需要通过 assetsPublicPath 属性来手动加上前缀的。


### 优化的点
1. 路由懒加载、组件懒加载，能够做到通过 webpack 打包之后拆分成多个小的 js 文件形式
  1.1 通过 analyz 插件来查看占用大的 js 文件，分析并继续拆分
2. 开启 gzip 
3. 如何在开发环境使用 npm 包，而在线上环境使用 cdn (例如 vue vue-router 这些)
https://www.jianshu.com/p/86602494dbb7


### TODO
1. github 的接口会有频率限制，很僵硬。。。最好弄成访问自己的后台服务