const express = require('express')

// 获取服务器实例

const app = express()

// 启动服务器
// listen 里面需要传一个端口号
app.listen(3000, () => {
  console.log('服务器已经启动')
})

/* 需要为服务器设置路由
*   - 路由可以根据不同的请求方式和请求地址来处理用户的请求
*   - app.METHOD()   METHOD 可以是 get或 post
*  中间件
*   - 在 express 中， 用app.use 定义一个中间件
*   - 中间件作用和路由用法很像
*   - 但是中间件不区分请求的方式
*
*   - 和路由的区别
*       - 1. 会匹配所有请求
*       - 2. 路径设置父目录
*       - 3. 当多个中间件匹配的是*/


// next 是 第三个参数，调用函数后，会触发后续的中间件
// next() 不能在响应处理完毕后调用
app.use('/', (req, res, next) => {
  console.log('收到请求1')
  // res.send('这是通过中间件返回的响应1')
  next()
});
app.use('/', (req, res, next) => {
  console.log('收到请求2')
  // res.send('这是通过中间件返回的响应2')
  next()
});
app.use('/', (req, res) => {
  console.log('收到请求3')
  res.send('这是通过中间件返回的响应3')
})


/* 路由的回调函数执行时，会收到三个参数
*   第一个 request
*   第二个 response*/
// app.get('/hello', function (req, res) {
//   console.log(req.url);
//   console.log('有人访问我')
//   // sendStatus 向客户端发送响应状态码
//   // res.sendStatus(400)
//
//   // status 设置响应状态码，但不发送
//   res.status(200)
//   res.send('请求接收成功，已发送响应')
//   /* 在路由中应该做两件事
//   *   - 读取用户的请求(request)
//   *   - 根据用户的请求返回响应(response)*/
// })
