## 青羽


### TODO
1. github 的接口获取有次数限制，并且接口的速度也不能算很快（走了 https 并且走目测走国外服务器 500 - 800ms 以内还算可以了）
2. 对于 1 的问题，每次都请求自己搭建的接口，每隔一个小时左右去请求 github 同步数据
3. 最好是支持同构处理，服务端渲染和客户端渲染同一份代码，并且能够根据网络的状态来自动请求降级，自己的 node 网络不佳是切换到 spa 以及直接请求 github 的 api
4. h5 自适应支持， 博客主题可选。
5. 博文可以直接转载， 标签能够一键复制
6. docker 部署， travis 或者 jenkins 
7. 可以支持 username.github.io 绑定自定义域名，当然这个应该是跟普通的网页一样的。
8. 后台服务会做鉴权，引入一个第三方的鉴权系统