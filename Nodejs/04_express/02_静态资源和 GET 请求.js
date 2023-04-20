const express = require('express')
const path = require('node:path')
const app = express()

// Nodejs/04_express/public
// Nodejs/04_express/02_静态资源和 GET 请求.js
app.use(express.static(path.resolve(__dirname, './public')))

app.get('/', (req, res) => {
  res.send('这是hello路由111')
})

app.get('/login', (req, res) => {
  console.log(req.query);
  res.send('登录成功')
})

app.listen(3000, () => {
  console.log('服务器已启动')
})
