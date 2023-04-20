const express = require('express');
const path = require('node:path');
const app = express();

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, './public')))
// 引入解析请求体的中间件
app.use(express.urlencoded())
app.get('/login', (req, res) => {
  // console.log(req.query)
  let query = req.query
  if (query.userName === 'ckw' && query.passWord === '123') {
    res.send('登录成功')
  } else {
    res.send('登录失败')
  }
})

app.post('/login', (req, res) => {
  console.log(req.body);
  if (req.body.userName === 'admin' && req.body.passWord === '123') {
    res.send('登录成功')
  } else {
    res.send('登录失败')
  }
  res.send('成功')
})
app.listen(3000)
