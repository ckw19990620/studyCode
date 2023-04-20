const express = require('express');
const path = require('node:path')
const parser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(parser())
app.use(session({secret: 'ckw', resave: true, saveUninitialized: true}))

// 配置静态资源
app.use(express.static(path.resolve(__dirname, './public')))

// app.get('/', (req, res) => {
//   res.send('<h1>首页</h1>')
// })

app.get('/get-cookie', (req, res) => {
  res.cookie('token', 'admin')
  res.send('cookie发送成功')
})

app.get('/get-session', (req, res) => {
  req.session.username = 'ckw'
  console.log(req.session);
  res.send('session获取到了')
})

app.get('/view-session', (req, res) => {
  console.log(req.session);
  res.send('查看session')
})

app.listen(3000, () => {
  console.log('服务器已启动')
})


